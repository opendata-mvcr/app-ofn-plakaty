<template>
  <div>
    <button type="button" class="btn btn-secondary m-1" @click="load('https://michalskop.gitlab.io/ofnapp/data/konvent.json')">Klášter Plasy</button>
    <button type="button" class="btn btn-secondary m-1" @click="load('https://michalskop.gitlab.io/ofnapp/data/skala.json')">Malovaná skála</button>
    <button type="button" class="btn btn-secondary m-1" @click="load('https://michalskop.gitlab.io/ofnapp/data/lom.json')">Kaolinový důl Kaznějov</button>
    <button type="button" class="btn btn-secondary m-1" @click="load('https://michalskop.gitlab.io/ofnapp/data/spilberk.json')">Ŝpilberk</button>

    <div class="row">
      <!-- LEFT COLUMN -->
      <div class="col-lg-8">
        <div class="d-flex justify-content-center m-5">

          <!-- PDF -->
          <div id="pdf" class="pdf-container" ref="pdf">
            <div id="top">
              <img :src="photo" id="photo" />
              <div id="name" class="carousel-caption">
                <h1>
                  <span class="badge badge-primary">
                  {{ name }}
                  </span>
                </h1>
              </div>
            </div>

            <div id="middle">
              <div class="row m-0">
                <div class="col-9 p-5 content-center d-flex align-items-center bg-info text-white">
                  <div>
                    <div class="row">
                      <h4 class="">🛈</h4>
                      {{ description }}
                    </div>
                    <div class="row middle-link pb-3 text-light">
                      <span v-if="link">🔗</span>
                      <span class="pl-3"><small>{{ link }}</small></span>
                    </div>
                  </div>
                </div>
                <div class="col-3 p-5 content-center d-flex align-items-center bg-secondary text-white">
                  <div>
                    <div class="">
                      <div class="row">
                        <h3 v-if="open"><strong>⏰</strong></h3>
                      </div>
                      <div class="row">
                        {{ open }} 
                      </div>
                    </div>
                    <div class="row middle-link pb-3 text-light">
                      <h3>♿ 🍼</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="map-wrap">
              <l-map :zoom="zoom" :center="center" :options="{zoomControl: false}" ref="theMap">
                <l-tile-layer :url="map_url"></l-tile-layer>
                <l-marker :lat-lng="center" > </l-marker>
              </l-map>
            </div>

          </div>

          <!-- / PDF -->

        </div>
      </div>
      <!-- / LEFT COLUMN -->

      <!-- RIGHT COLUMN -->
      <div class="col-lg-4">
        <ul class="nav nav-tabs">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Základ</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Detaily</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <!-- SWATCH -->
            <div class="form-group p-3">
              <label for="exampleFormControlSelect1">Barevná varianta:</label>
              <select class="form-control" id="exampleFormControlSelect1" v-model="bootswatch" @change="swatch">
                <option v-for="(item, index) in bootswatches" :key="index" >
                  {{ item }}
                </option>

              </select>
            </div>
            <!-- / SWATCH -->

            <div class="row justify-content-center">
              <div class="col-md-6">
                <!-- <div class="card card-body">
                  <div class="form-group container"> -->
                    <button class="btn btn-primary btn-block pl-5 pr-5" @click="download">Vytvořit a stáhnout PDF<br/>(+ vytvořit PNG)</button>
                  <!-- </div>
                </div> -->
                <div class="p-2">
                  <a :class="pngClass" :href="pngData" id="pngLink" :download="pngName" disabled>Stáhnout PNG</a>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

            <h3>
              Nastavení turistického cíle
            </h3>
            <div class="form-group p-3">
              <label for="urlInput">Adresa (JSON):</label>
              <input type="url" class="form-control" id="urlInput" v-model="url" />
              <button class="btn btn-warning m-1" @click="load">Nahrát nový turistický cíl</button>
            </div>
            <div class="form-group m-3">
              <label for="nameInput" class="mb-2">Jméno: </label>
              <input type="text" class="form-control" id="nameInput" v-model="name" />
            </div>
            <div class="form-group m-3">
              <label for="photoInput" class="mb-2">Foto: </label>
              <input type="url" class="form-control" id="photoInput" v-model="photo" />
            </div>
            <div class="form-group m-3">
              <label for="descriptionInput" class="mb-2">Popis:</label>
              <textarea type="text" class="form-control" id="descriptionInput" v-model="description" row="7"></textarea>
            </div>
            <div class="form-group m-3">
              <label for="linkInput" class="mb-2">🔗 Link: </label>
              <input type="text" class="form-control" id="linkInput" v-model="link" />
            </div>
            <div class="form-group m-3">
              <label for="linkInput" class="mb-2">⏰ Otevřeno: </label>
              <textarea type="text" class="form-control" id="linkInput" v-model="open" row="7"></textarea>
            </div>
            <div class="form-group m-3">
              <label for="linkInput" class="mb-2">♿ 🍼 Přístupnost: </label>
              <input type="text" class="form-control" id="linkInput" v-model="access" />
            </div>
          </div>
        </div>
        
      </div>
      <!-- / RIGHT COLUMN -->
    
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import axios from 'axios'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'


export default {
  name: 'home',
  data() {
    return {
      name: '',
      description: '',
      info: {},
      link: '',
      open: '',
      photo: '',
      access: '♿ 🍼',
      map_url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [50, 13.5],
      zoom: 13,
      bootswatch: 'journal',
      bootswatches: ['journal', 'cosmo', 'cerulean', 'cyborg', 'darkly', 'flatly', 'litera', 'lumen', 'lux', 'materia', 'minty', 'pulse', 'sandstone', 'siplex', 'sketchy', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'yeti'],
      s: 0,
      url: 'https://michalskop.gitlab.io/ofnapp/data/konvent.json',
      // url: 'http://localhost:8080/data/konvent.json',
      pngData: '',
      pngName: '',
      pngClass: "btn btn-secondary disabled"
    }
  },
  mounted() {
    // missing leaflet icon workaround
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    this.load(this.url)

  },
  methods: {
    swatch() {
      var head = document.getElementsByTagName('head')[0]
      var style = document.createElement('link')
      style.href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/' + this.bootswatch + '/bootstrap.min.css'
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.id = 'swatch-' + (this.s + 1)
      head.append(style)
      if (this.s > 0) {
        var myobj = document.getElementById("swatch-" + this.s)
        myobj.remove()
      }
      this.s++
      this.pngClass = "btn btn-secondary disabled"
    },

    existCs(obj, attr, df) {
      if (typeof obj === 'object' && typeof obj[attr] != 'undefined' && typeof obj[attr]['cs'] != 'undefined') {
        return obj[attr]['cs']
      } else {
       return df
      }
    },

    existInArr(o, property, attr, df) {
      for (let obj of o[property]) {
        if (typeof obj === 'object' && typeof obj[attr] != 'undefined') {
          return obj[attr]
        }
      }
      return df
    },

    load(url) {
      // console.log(url)
      this.pngClass = "btn btn-secondary disabled"
      if (url == 'undefined' || typeof url === 'object') {
        url = this.url
      }
      axios.get(url).then( response =>
        {
          this.info = response.data
          this.center = [this.info['umístění']['geometrie']['coordinates'][1], this.info['umístění']['geometrie']['coordinates'][0]]
          this.name = this.existCs(this.info, 'název', 'Turistický cíl')
          this.description = this.existCs(this.info, 'popis', 'Ideální turistický cíl')
          this.link = this.existInArr(this.info, 'kontakt', 'url', null).replace('https://', '').replace('http://', '').replace(/\/$/, "")
          this.open = this.info['open']
          this.photo = this.existInArr(this.info, 'příloha', 'url', null)
          this.url = url
        }
      )
    },

    download() {
      let $this = this
      var doc = new jsPDF({
        // orientation: 'portrait',
        // unit: 'pt',
        // format: [842, 595]
      })
      html2canvas(document.getElementById('pdf'),  {
          // scale: 1,
          allowTaint: true,
          useCORS : true,
          scrollX: 0,
          scrollY: -window.scrollY
        }).then(function (canvas) {
        const img = canvas.toDataURL("image/png", 0.8)
        // console.log(img)
        // const imgTag = document.getElementById('pngLink')
        $this.pngName = $this.name + '-' + $this.bootswatch + ".png"
        $this.pngData = img.replace('image/png', 'image/octet-stream')
        // window.location.href = imgTag
        $this.pngClass = "btn btn-secondary"
        // document.body.appendChild(canvas)

        doc.addImage(img, 'PNG', 0, 0)
        doc.save($this.name + '-' + $this.bootswatch + ".pdf")
      })
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    // FontAwesomeIcon,
  }
}
</script>

<style scoped>
/* @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'; */
/* @import 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css'; */
@import 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/journal/bootstrap.min.css';


.pdf-container {
  width: 595pt;
  height: 842pt;
  outline: 1px #080 solid;
  /* border: 1px #000 solid; */
}

#top {
  height: 321.56pt; 
  border-bottom: 1px #000 solid;
}

#photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

#name {
  position: relative;
  top: -75px;
  transform: rotate(-5deg);
}

.badge {
  font-size: 1.5em;
}

#middle {
  height: 321.59pt;
  text-align: justify;
  text-transform: uppercase;
  font-size: 1.15em;
}

#map-wrap {
  height: 198.74pt;
}

.content-center {
   height: 321.59pt;
   vertical-align: middle;
   margin-left: 0!important;
}

.middle-link {
  position: absolute;
  bottom: 0;
}
canvas {
  outline: 1px #000 solid;
}

</style>