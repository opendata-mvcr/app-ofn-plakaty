"""Create JSON from CSV Sportoviste Praha 11."""

import csv
import json

data = []
i = 0
with open("e0dfe4c1-1e8c-42cc-a534-e03958658a67-konverze_ds_workout-a-fitness-hit.csv") as fin:
    dr = csv.DictReader(fin)
    for row in dr:
        item = {
            "@context": "https://ofn.gov.cz/sportoviště/2020-07-01/kontexty/sportoviště.jsonld",
            "typ": "Sportoviště",
            "iri": "http://www.praha11.cz/sportoviste/",
            "název": {
                "cs": row["K. ú."] + ": " + row["Popis"]
            },
            "popis": {
                "cs": row["Umístění"]
            },
            "umístění": {
                "typ": "Umístění",
                "geometrie": {
                    "type": "Point",
                    "coordinates": [float(row['WGS-84, zeměpisná délka'].replace(',', '.')), float(row['WGS-84, zeměpisná šířka'].replace(',', '.'))]
                }
            }
        }
        if i == 1:
            item["příloha"] = [{
                "typ": "Digitální objekt",
                "url": "https://d34-a.sdn.cz/d_34/c_img_F_I/yktFdo.jpeg?fl=res,667,500,1",
                "typ_média": "http://www.iana.org/assignments/media-types/image/jpg"
            }]
            
        data.append(item)
        i += 1

with open("sportoviste_praha11.json", "w") as fout:
    json.dump(data, fout, ensure_ascii=False, indent=2)
