# Ukázková aplikace k Otevřeným formálním normám

Informace o Otevřených formálních normách (OFN): https://opendata.gov.cz/otev%C5%99en%C3%A9-form%C3%A1ln%C3%AD-normy:start

## Aplikace
Aplikace je na adrese: https://michalskop.gitlab.io/ofnapp/

Aplikace umí vygenerovat PDF (a PNG) k tisku ukázkového letáčku z dat dle příslušné OFN, je možné si zadat vlastní JSON dle dané OFN.

Lze měnit barevnou paletu u letáčku.

Implementované ukázky:

- Turistické cíle
- Sportoviště

### Poznámka - mobily
Vzhledem k povaze aplikace tato není optimalizována na mobily, ale až od velikosti tabletů a výše.

### Parametry URL
- `dataurl` - URL SPARQL query NKODu
- `iri` - IRI prvku na zobrazení

### Příklad
#### Vlastní seznam turistických cílů:

https://michalskop.gitlab.io/ofnapp/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsparql%3Fquery%3DPREFIX%2Bdcterms%253A%2B%253Chttp%253A%252F%252Fpurl.org%252Fdc%252Fterms%252F%253E%250A%2B%2B%2B%2B%2B%2B%2B%2BPREFIX%2Bdcat%253A%2B%253Chttp%253A%252F%252Fwww.w3.org%252Fns%252Fdcat%2523%253E%250A%2B%2B%2B%2B%2B%2B%2B%2BSELECT%2B%253FodkazKeSta%25C5%25BEen%25C3%25AD%250A%2B%2B%2B%2B%2B%2B%2B%2BWHERE%2B%257B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%253Fdatov%25C3%25A1_sada%2Ba%2Bdcat%253ADataset%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcterms%253AconformsTo%2B%253Chttps%253A%252F%252Fofn.gov.cz%252Fturistick%25C3%25A9-c%25C3%25ADle%252F2020-07-01%252F%253E%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcat%253Adistribution%2B%253Fdistribuce%2B.%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%253Fdistribuce%2Ba%2Bdcat%253ADistribution%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcterms%253Aformat%2B%253Chttp%253A%252F%252Fpublications.europa.eu%252Fresource%252Fauthority%252Ffile-type%252FJSON_LD%253E%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcat%253AdownloadURL%2B%253FodkazKeSta%25C5%25BEen%25C3%25AD%2B.%2B%250A%2B%2B%2B%2B%2B%2B%2B%2B%257D%26format%3Dapplication%252Fjson

#### Přímé zobrazení turistického cíle
https://michalskop.gitlab.io/ofnapp/#/?iri=https%3A%2F%2Fwww.plasy.cz%2Fmalovana-skala

nebo

https://michalskop.gitlab.io/ofnapp/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsparql%3Fquery%3DPREFIX%2Bdcterms%253A%2B%253Chttp%253A%252F%252Fpurl.org%252Fdc%252Fterms%252F%253E%250A%2B%2B%2B%2B%2B%2B%2B%2BPREFIX%2Bdcat%253A%2B%253Chttp%253A%252F%252Fwww.w3.org%252Fns%252Fdcat%2523%253E%250A%2B%2B%2B%2B%2B%2B%2B%2BSELECT%2B%253FodkazKeSta%25C5%25BEen%25C3%25AD%250A%2B%2B%2B%2B%2B%2B%2B%2BWHERE%2B%257B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%253Fdatov%25C3%25A1_sada%2Ba%2Bdcat%253ADataset%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcterms%253AconformsTo%2B%253Chttps%253A%252F%252Fofn.gov.cz%252Fturistick%25C3%25A9-c%25C3%25ADle%252F2020-07-01%252F%253E%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcat%253Adistribution%2B%253Fdistribuce%2B.%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%253Fdistribuce%2Ba%2Bdcat%253ADistribution%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcterms%253Aformat%2B%253Chttp%253A%252F%252Fpublications.europa.eu%252Fresource%252Fauthority%252Ffile-type%252FJSON_LD%253E%2B%253B%250A%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2Bdcat%253AdownloadURL%2B%253FodkazKeSta%25C5%25BEen%25C3%25AD%2B.%2B%250A%2B%2B%2B%2B%2B%2B%2B%2B%257D%26format%3Dapplication%252Fjson&iri=https%3A%2F%2Fwww.plasy.cz%2Fmalovana-skala

#### Vlastní obrázek
Karlštejn: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zamek_Karl%C5%A1tejn.jpg/1920px-Zamek_Karl%C5%A1tejn.jpg

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
