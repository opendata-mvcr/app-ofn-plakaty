<template>
  <div>
    <button type="button" class="btn btn-secondary m-1" @click="load('http://localhost/michal/dev/tmp/pdf/sportoviste_plasy.json')">Sportoviště Plasy</button>
    <button type="button" class="btn btn-secondary m-1" @click="load('http://localhost/michal/dev/tmp/pdf/sportoviste.json')">Ukázková sportoviště</button>

    <div class="row">
      <!-- RIGHT COLUMN -->
      <div class="col-8">
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
                <div class="col-12 p-5 content-center d-flex align-items-center bg-info text-white">
                  <div>
                    <div class="row pb-3" v-for="(item, index) in info" :key="index">
                      <h4 style="width:100%">{{ item['název']['cs'] }}</h4>
                      <div>
                        🛈 {{ item['popis']['cs'] }}
                      </div>
                      <div v-if="item['kontakt']">
                      🔗 <span class="pl-3"><small>{{ item['kontakt'][0]['url'] }}</small></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="map-wrap">
              <l-map :zoom="zoom" :center="center" :options="{zoomControl: false}" ref="theMap">
                <l-tile-layer :url="map_url"></l-tile-layer>
                <div v-for="(item, index) in info" :key="index">
                    <l-marker :lat-lng="[item['umístění']['geometrie']['coordinates'][1], item['umístění']['geometrie']['coordinates'][0]]" > </l-marker>
                </div>
              </l-map>
            </div>

          </div>

          <!-- / PDF -->

        </div>
      </div>
      <!-- / RIGHT COLUMN -->

      <!-- LEFT COLUMN -->
      <div class="col-4">

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
            <div class="card card-body">
              <div class="form-group container">
                <button class="btn btn-primary pl-5 pr-5" @click="download">Vytvořit PDF</button>
              </div>
            </div>
          </div>
        </div>

        <hr/>

        <h3>
          Nastavení sportovišť
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

      </div>
      <!-- / LEFT COLUMN -->
    
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
      name: 'Sportoviště',
      info: [],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg',
      access: '♿ 🍼',
      map_url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [50, 13.5],
      zoom: 13,
      bootswatch: 'journal',
      bootswatches: ['journal', 'cosmo', 'cerulean', 'cyborg', 'darkly', 'flatly', 'litera', 'lumen', 'lux', 'materia', 'minty', 'pulse', 'sandstone', 'siplex', 'sketchy', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'yeti'],
      s: 0,
      url: 'http://localhost/michal/dev/tmp/pdf/sportoviste_plasy.json'
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
    },

    load(url) {
      if (url == 'undefined') {
        url = this.url
      }
      axios.get(url).then( response =>
        {
          this.info = response.data
          let center = [0, 0]
          for (let row of this.info) {
              center[0] = center[0] + row['umístění']['geometrie']['coordinates'][1]
              center[1] = center[1] + row['umístění']['geometrie']['coordinates'][0]
          }
          center[0] = center[0] / this.info.length
          center[1] = center[1] / this.info.length
          this.center = center

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
        // document.body.appendChild(canvas)
        doc.addImage(img, 'PNG', 0, 0)
        doc.save($this.name + ".pdf")
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
