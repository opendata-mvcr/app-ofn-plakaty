<template>
  <div>
    <Header light="light" />
    <div class="container pt-4 article text-justify">
      <h1 id="uk-zkov-aplikace-k-otev-en-m-form-ln-m-norm-m">Ukázková aplikace k Otevřeným formálním normám</h1>
      <p>Informace o Otevřených formálních normách (OFN): <a href="https://opendata.gov.cz/otev%C5%99en%C3%A9-form%C3%A1ln%C3%AD-normy:start">https://opendata.gov.cz/otev%C5%99en%C3%A9-form%C3%A1ln%C3%AD-normy:start</a></p>
      <h2 id="aplikace">Aplikace</h2>
      <p>Aplikace je na adrese: <a href="https://opendata-mvcr.github.io/app-ofn-plakaty/">https://opendata-mvcr.github.io/app-ofn-plakaty/</a></p>
      <p>Aplikace umí vygenerovat PDF (a PNG) k tisku ukázkového letáčku z dat dle příslušné OFN, je možné si zadat vlastní JSON dle dané OFN.</p>
      <p>Lze měnit barevnou paletu u letáčku.</p>
      <p>Implementované ukázky:</p>
      <ul>
      <li>Turistické cíle</li>
      <li>Sportoviště</li>
      </ul>
      <h3 id="pozn-mka-mobily">Poznámka - mobily</h3>
      <p>Vzhledem k povaze aplikace tato není optimalizována na mobily, ale až od velikosti tabletů a výše.</p>
      <h3 id="parametry-url">Parametry URL</h3>
      <ul>
      <li><code>dataurl</code> - URL souboru JSON s jedním nebo více turistickými cíli</li>
      <li><code>iri</code> - IRI prvku na zobrazení</li>
      </ul>
      <h3 id="p-klad">Příklad</h3>
      <h4 id="vlastn-seznam-turistick-ch-c-l-nebo-turistick-c-l-">Vlastní seznam turistických cílů nebo turistický cíl:</h4>
      <p><a href="https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fv%C3%ADce-c%C3%ADl%C5%AF.jsonld">https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fv%C3%ADce-c%C3%ADl%C5%AF.jsonld</a></p>
      <p>nebo </p>
      <p><a href="https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Fgitlab.com%2Fmichalskop%2Fofnapp%2F-%2Fraw%2Fmaster%2Fpublic%2Fdata%2Flom.json">https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Fgitlab.com%2Fmichalskop%2Fofnapp%2F-%2Fraw%2Fmaster%2Fpublic%2Fdata%2Flom.json</a></p>
      <h4 id="p-m-zobrazen-turistick-ho-c-le">Přímé zobrazení turistického cíle</h4>
      <p><a href="https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Fgitlab.com%2Fmichalskop%2Fofnapp%2F-%2Fraw%2Fmaster%2Fpublic%2Fdata%2Fskala.json">https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Fgitlab.com%2Fmichalskop%2Fofnapp%2F-%2Fraw%2Fmaster%2Fpublic%2Fdata%2Fskala.json</a></p>
      <p>nebo</p>
      <p><a href="https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fvíce-cílů.jsonld&iri=https%3A%2F%2Fwww.spilberk.cz%2FVícecílový2">https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fvíce-cílů.jsonld&iri=https%3A%2F%2Fwww.spilberk.cz%2FVícecílový2</a></p>
      <h4 id="vlastn-obr-zek">Vlastní obrázek</h4>
      <p>Karlštejn <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zamek_Karl%C5%A1tejn.jpg/1920px-Zamek_Karl%C5%A1tejn.jpg">https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zamek_Karl%C5%A1tejn.jpg/1920px-Zamek_Karl%C5%A1tejn.jpg</a></p>
      
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
@import 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/journal/bootstrap.min.css';

.article {
  max-width: 960px;
}
</style>