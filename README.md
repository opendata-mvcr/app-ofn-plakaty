# Ukázková aplikace k Otevřeným formálním normám

Informace o Otevřených formálních normách (OFN): https://opendata.gov.cz/otev%C5%99en%C3%A9-form%C3%A1ln%C3%AD-normy:start

## Aplikace
Aplikace je na adrese: https://opendata-mvcr.github.io/app-ofn-plakaty/

Aplikace umí vygenerovat PDF (a PNG) k tisku ukázkového letáčku z dat dle příslušné OFN, je možné si zadat vlastní JSON dle dané OFN.

Lze měnit barevnou paletu u letáčku.

Implementované ukázky:

- Turistické cíle
- Sportoviště

### Poznámka - mobily
Vzhledem k povaze aplikace tato není optimalizována na mobily, ale až od velikosti tabletů a výše.

### Parametry URL
- `dataurl` - URL souboru JSON s jedním nebo více turistickými cíli
- `iri` - IRI prvku na zobrazení

### Příklad
#### Vlastní seznam turistických cílů nebo turistický cíl:

https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fv%C3%ADce-c%C3%ADl%C5%AF.jsonld

nebo 

https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https://gitlab.com/michalskop/ofnapp/-/raw/master/public/data/skala.json

#### Přímé zobrazení turistického cíle
https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Fgitlab.com%2Fmichalskop%2Fofnapp%2F-%2Fraw%2Fmaster%2Fpublic%2Fdata%2Fskala.json

nebo

https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fv%C3%ADce-c%C3%ADl%C5%AF.jsonld&iri=https%3A%2F%2Fwww.spilberk.cz%2FV%C3%ADcec%C3%ADlov%C3%BD2


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

Tento repozitář je udržován v rámci projektu OPZ č. CZ.03.4.74/0.0/0.0/15_025/0013983.
![Evropská unie - Evropský sociální fond - Operační program Zaměstnanost](https://data.gov.cz/images/ozp_logo_cz.jpg)