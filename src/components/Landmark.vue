<template>
  <div>
    <Header />
    <span v-for="(it, index) in listItems" :key="index">
      <button type="button" class="btn btn-secondary m-1" @click="loadIri(it.iri)">{{ it['název'].cs }}</button>
    </span>

    <div class="row">
      <!-- LEFT COLUMN -->
      <div class="col-lg-8">
        <div class="d-flex justify-content-center m-5">

          <!-- PDF -->
          <div id="pdf" class="pdf-container" ref="pdf">
            <div id="top">
              <img :src="item.photo" id="photo" />
              <div id="name" class="carousel-caption">
                <h1>
                  <span class="badge badge-primary" :style="badgeStyle">
                  {{ item.name }}
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
                      <span :style="descriptionStyle">
                      {{ item.description }}
                      </span>
                    </div>
                    <div class="row middle-link pb-3 text-light">
                      <span v-if="item.link">🔗</span>
                      <span class="pl-3"><small>{{ item.link }}</small></span>
                    </div>
                  </div>
                </div>
                <div class="col-3 p-5 content-center d-flex align-items-center bg-secondary text-white">
                  <div>
                    <div class="">
                      <div class="row">
                        <h3 v-if="item.open"><strong>⏰</strong></h3>
                      </div>
                      <div class="row">
                        {{ item.open }} 
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
              <l-map :zoom="zoom" :center="item.center" :options="{zoomControl: false}" ref="theMap">
                <l-tile-layer :url="map_url"></l-tile-layer>
                <l-marker :lat-lng="item.center" > </l-marker>
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
                <option v-for="(it, index) in bootswatches" :key="index" >
                  {{ it }}
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
            <!-- <div class="form-group p-3">
              <label for="urlInput">Adresa (JSON):</label>
              <input type="url" class="form-control" id="urlInput" v-model="item.url" />
              <button class="btn btn-warning m-1" @click="load(item.url)">Nahrát nový turistický cíl</button>
            </div> -->
            <div class="form-group m-3">
              <label for="nameInput" class="mb-2">Jméno: </label>
              <input type="text" class="form-control" id="nameInput" v-model="item.name" />
            </div>
            <div class="form-group m-3">
              <label for="nameSizeInput" class="mb-2">Velikost jména: </label>
              <input type="number" class="form-control" id="nameSizeInput" v-model="fsize" />
            </div>
            <div class="form-group m-3">
              <label for="photoInput" class="mb-2">Foto: </label>
              <input type="url" class="form-control" id="photoInput" v-model="item.photo" />
            </div>
            <div class="form-group m-3">
              <label for="descriptionInput" class="mb-2">Popis:</label>
              <textarea type="text" class="form-control" id="descriptionInput" v-model="item.description" row="7"></textarea>
            </div>
            <div class="form-group m-3">
              <label for="descriptionSizeInput" class="mb-2">Velikost popisu: </label>
              <input type="number" class="form-control" id="descriptionSizeInput" v-model="fdsize" />
            </div>
            <div class="form-group m-3">
              <label for="linkInput" class="mb-2">🔗 Link: </label>
              <input type="text" class="form-control" id="linkInput" v-model="item.link" />
            </div>
            <div class="form-group m-3">
              <label for="linkInput" class="mb-2">⏰ Otevřeno: </label>
              <textarea type="text" class="form-control" id="linkInput" v-model="item.open" row="7"></textarea>
            </div>
            <div class="form-group m-3">
              <label for="linkInput" class="mb-2">♿ 🍼 Přístupnost: </label>
              <input type="text" class="form-control" id="linkInput" v-model="item.access" />
            </div>
          </div>
        </div>
        
      </div>
      <!-- / RIGHT COLUMN -->
    </div>

    <div id="img" style="display:none"> {{ loadedItems }} </div>
    <Footer />
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import axios from 'axios'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'home',
  data() {
    return {

      item: {
        center: [50, 13.5],
        name: '',
        description: '',
        link: '',
        open: '',
        photo: '',
        access: '♿ 🍼',
        info: {},
        url: 'https://michalskop.gitlab.io/ofnapp/data/konvent.json'
      },

      map_url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      bootswatch: 'journal',
      bootswatches: ['journal', 'cosmo', 'cerulean', 'cyborg', 'darkly', 'flatly', 'litera', 'lumen', 'lux', 'materia', 'minty', 'pulse', 'sandstone', 'siplex', 'sketchy', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'yeti'],
      s: 0,
      ss: 0,
      fsize: 150,
      fdsize: 75,
      // url: 'https://michalskop.gitlab.io/ofnapp/data/konvent.json',
      pngData: '',
      pngName: '',
      pngClass: "btn btn-secondary disabled",
      listLinks: [],
      listItems: [],
      defaultUrls: {
        url: 'https://michalskop.gitlab.io/ofnapp/data/konvent.json',
        // dataurl: "https://oha03.mvcr.gov.cz/sparql",
        // dataquery: `PREFIX dcterms: <http://purl.org/dc/terms/>
        // PREFIX dcat: <http://www.w3.org/ns/dcat#>
        // SELECT ?odkazKeStažení
        // WHERE {
        //   ?datová_sada a dcat:Dataset ;
        //     dcterms:conformsTo <https://ofn.gov.cz/turistické-cíle/2020-07-01/> ;
        //     dcat:distribution ?distribuce .
        //   ?distribuce a dcat:Distribution ;
        //     dcterms:format <http://publications.europa.eu/resource/authority/file-type/JSON_LD> ;
        //     dcat:downloadURL ?odkazKeStažení . 
        // }`,
        dataurl: "https://gitlab.com/michalskop/ofnapp/-/raw/master/public/data/konvent.json?inline=false",
        // dataformat: 'application/json'
      }
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

    // // get list of Link
    // axios.get(this.listUrl).then( response => {
    //   this.listLinks = this.extractLinks(response.data.results.bindings)
    //   // get list of Items
    //   this.listItems = this.getListItems()
    //   this.ss++
    // })
    // .catch( error => {
    //   console.log(error)
    // })

    this.listLinks = [this.listUrl]
    // get list of Items
    this.listItems = this.getListItems()

  },
  computed: {
    listUrl () {
      if (typeof this.$route.query.dataurl !== 'undefined') {
        return this.$route.query.dataurl
      } else {
        const myUrl = new URL(this.defaultUrls.dataurl)
        // myUrl.searchParams.append("query", this.defaultUrls.dataquery)
        // myUrl.searchParams.append("format", this.defaultUrls.dataformat)
        return myUrl.href
      }
    },
    loadedItems () {
      let x = this.ss
      if (Array.isArray(this.listItems)) {
        if (typeof this.$route.query.iri !== 'undefined') {
          this.loadIri(this.$route.query.iri)
        } else {
          // load first item or default item
          if (this.listItems.length > 0) {
            this.loadIri(this.listItems[0].iri)
          } else {
            this.load(this.item.url)
          }
        }
      } else {
        this.load(this.item.url)
      }
      return x
    },
    badgeStyle () {
      return "font-size:" + this.fsize + "%"
    },
    descriptionStyle () {
      return "font-size:" + this.fdsize + "%"
    }
  },
  methods: {
    // get list of items
    getListItems () {
      let listItems = []
      let $this = this
      for (const link of $this.listLinks) {
        axios.get($this.corsLink(link)).then( response => {
          if (Array.isArray(response.data)) {
            for (const d of response.data) {
              listItems.push(d)
            }
          } else {
            listItems.push(response.data)
          }
        })
        // .catch( error => {
        //   // console.log(error)
        // })
      }
      return listItems
    },

    // extract links from downloaded files
    extractLinks (bindings) {
      let listLinks = []
      for (const b of bindings) {
        if ((typeof b['odkazKeStažení'] != 'undefined') && (typeof b['odkazKeStažení']['type'] != 'undefined') && ( b['odkazKeStažení']['type'] == 'uri')) {
          listLinks.push( b['odkazKeStažení']['value'])
        }
      }
      return listLinks
    },

    // create CORS link (using cors-anywhere.herokuapp.com)
    corsLink (link) {
      return "https://cors-anywhere.herokuapp.com/" + link
    },

    // change swatch theme
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

    // whether exist 'cs' attribute
    existCs(obj, attr, df) {
      if (typeof obj === 'object' && typeof obj[attr] != 'undefined' && typeof obj[attr]['cs'] != 'undefined') {
        return obj[attr]['cs']
      } else {
       return df
      }
    },

    // whether attribute exist in array
    existInArr(o, property, attr, df) {
      for (let obj of o[property]) {
        if (typeof obj === 'object' && typeof obj[attr] != 'undefined') {
          return obj[attr]
        }
      }
      return df
    },

    // load item from list of items based on iri
    loadIri(iri) {
      this.pngClass = "btn btn-secondary disabled"

      let item = {}
      for (const it of this.listItems) {
        if (iri == it.iri) {
          item = it
          break
        }
      }
      if (Object.keys(item).length > 0) {
        this.item.info = item
        this.item.center = [this.item.info['umístění']['geometrie']['coordinates'][1], this.item.info['umístění']['geometrie']['coordinates'][0]]
        this.item.name = this.existCs(this.item.info, 'název', 'Turistický cíl')
        this.item.description = this.existCs(this.item.info, 'popis', 'Ideální turistický cíl')
        this.item.link = this.existInArr(this.item.info, 'kontakt', 'url', null).replace('https://', '').replace('http://', '').replace(/\/$/, "")
        this.item.open = this.item.info['open']
        this.item.photo = this.existInArr(this.item.info, 'příloha', 'url', null)
        this.item.url = ''

      // change iri parameter https://stackoverflow.com/a/61353880/1666623
        const query = Object.assign({}, this.$route.query);
        if (this.item.info.iri != this.$route.query.iri) {
          query.iri = this.item.info.iri
          this.$router.replace({ query })
        }
      }

    },

    // load item from url
    load(url) {
      const query = Object.assign({}, this.$route.query);
      query.dataurl = url
      // delete query.iri
      console.log(query)
      this.$router.replace({ query })
      // this.pngClass = "btn btn-secondary disabled"
      // if (url == 'undefined' || typeof url === 'object') {
      //   url = this.url
      // }
      // axios.get(this.corsLink(url)).then( response =>
      //   {
      //     this.item.info = response.data
      //     this.item.center = [this.item.info['umístění']['geometrie']['coordinates'][1], this.item.info['umístění']['geometrie']['coordinates'][0]]
      //     this.item.name = this.existCs(this.item.info, 'název', 'Turistický cíl')
      //     this.item.description = this.existCs(this.item.info, 'popis', 'Ideální turistický cíl')
      //     this.item.link = this.existInArr(this.item.info, 'kontakt', 'url', null).replace('https://', '').replace('http://', '').replace(/\/$/, "")
      //     this.item.open = this.item.info['open']
      //     this.item.photo = this.existInArr(this.item.info, 'příloha', 'url', null)
      //     this.url = url

      //     // add iri parameter https://stackoverflow.com/a/61353880/1666623
      //     // const query = Object.assign({}, this.$route.query);
      //     // if (this.item.info.iri != this.$route.query.iri) {
      //     //   query.iri = this.item.info.iri
      //     //   this.$router.replace({ query })
      //     // }
      //   }
      // )
    },

    // download PDF
    download() {
      let $this = this

      html2canvas(document.getElementById('pdf'),  {
          scale: 1,
          allowTaint: true,
          useCORS : true,
          scrollX: -window.scrollX - 2 * (window.devicePixelRatio - 1),  // hotfix #9
          scrollY: -window.scrollY
        }).then(function (canvas) {
        const imgSrc = canvas.toDataURL("image/png", 0.8)
        const img = new Image()
        img.src = imgSrc
        document.getElementById("img").appendChild(img)
        img.addEventListener('load', function() {
          // console.log(img.width, img.height)
          $this.pngName = $this.item.name + '-' + $this.bootswatch + ".png"
          $this.pngData = img.src.replace('image/png', 'image/octet-stream')
          $this.pngClass = "btn btn-secondary"

          var doc = new jsPDF({
            // orientation: 'portrait',
            unit: 'pt',
            format: [Math.floor(Math.floor(img.width) * 3 / 4), Math.floor(Math.floor(img.height) * 3 / 4)] // hotfix #9
          })

          doc.addImage(img.src, 'PNG', -1, -1)
          doc.save($this.item.name + '-' + $this.bootswatch + ".pdf")
        })

      })
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Header,
    Footer
    // FontAwesomeIcon,
  }
}
</script>

<style scoped>
/* @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'; */
/* @import 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css'; */
@import 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/journal/bootstrap.min.css';


.pdf-container {
  /* width: 595pt;
  height: 842pt; */
  width: 595px;
  height: 842px;
  /* outline: 1px #080 solid; */
  /* border: 1px #000 solid; */
}

#top {
  /* height: 321.56pt;  */
  height: 321.56px;
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
  left: -5px;
  transform: rotate(-5deg);
}
/* #name > h1 {
  font-size: 2.5em; 
} */

.badge {
  font-size: 1.5em;
}

#middle {
  /* height: 321.59pt; */
  height: 321.59px;
  text-align: justify;
  text-transform: uppercase;
  font-size: 1.15em;
}

#map-wrap {
  /* height: 198.74pt; */
  height: 198.74px;
}

.content-center {
   /* height: 321.59pt; */
   height: 321.59px;
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