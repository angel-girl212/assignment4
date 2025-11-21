// Mapbox access token for API authentication
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nbGUta3ByIiwiYSI6ImNtZjJybG10YzFkbnUycG80N3J5cDVid2QifQ.SoIeeUn_3CNLmzU2cgtv1w';

// Initialize Mapbox map
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/angle-kpr/cmi9g9wm5002j01s3fznk0atp',
    center: [-18.9, 64.88805],
    zoom: 5.8,
    minZoom: 5.8,
    maxZoom: 20,
    maxBounds:[[-25, 62], [-10, 67]]
});

const geojson = { 
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "city": "Reykjavík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjavík",
        "capital": "primary",
        "population": 139875,
        "population_proper": 139875
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.94,
          64.1467
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kópavogur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Kópavogur",
        "capital": "",
        "population": 39810,
        "population_proper": 39810
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.9094,
          64.1108
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hafnarfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Hafnarfjörður",
        "capital": "",
        "population": 30568,
        "population_proper": 30568
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.97,
          64.02
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Akureyri",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Akureyri",
        "capital": "",
        "population": 19893,
        "population_proper": 19893
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.1,
          65.6833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Garðabær",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Garðabær",
        "capital": "",
        "population": 18891,
        "population_proper": 18891
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.9264,
          64.0902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Selfoss",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Árborg",
        "capital": "",
        "population": 9624,
        "population_proper": 9624
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21,
          63.9333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Akranes",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Akranes",
        "capital": "",
        "population": 7997,
        "population_proper": 7997
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.0947,
          64.3158
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Vestmannaeyjar",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Vestmannaeyjar",
        "capital": "",
        "population": 4523,
        "population_proper": 4523
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.2833,
          63.4167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Njarðvík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjanesbær",
        "capital": "",
        "population": 4398,
        "population_proper": 4398
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.55,
          63.9833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Grindavík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Grindavíkurbær",
        "capital": "",
        "population": 3427,
        "population_proper": 3427
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.4361,
          63.8433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Ísafjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Ísafjarðarbær",
        "capital": "",
        "population": 2620,
        "population_proper": 2620
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.1267,
          66.0758
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Sauðárkrókur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Skagafjörður",
        "capital": "",
        "population": 2614,
        "population_proper": 2614
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -19.6394,
          65.7461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hveragerði",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Hveragerði",
        "capital": "",
        "population": 2564,
        "population_proper": 2564
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.2065,
          63.9992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Höfn",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Hornafjörður",
        "capital": "",
        "population": 2389,
        "population_proper": 2389
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.212,
          64.254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Egilsstaðir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Múlaþing",
        "capital": "",
        "population": 2332,
        "population_proper": 2332
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.3833,
          65.2833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Húsavík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Norðurþing",
        "capital": "",
        "population": 2307,
        "population_proper": 2307
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -17.3167,
          66.05
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Borgarnes",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Borgarbyggð",
        "capital": "",
        "population": 1962,
        "population_proper": 1962
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.9167,
          64.5333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Sandgerði",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": 1779,
        "population_proper": 1779
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.7042,
          64.0531
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Þorlákshöfn",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Ölfus",
        "capital": "",
        "population": 1651,
        "population_proper": 1651
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.3667,
          63.85
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Garðar",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": 1595,
        "population_proper": 1595
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.6333,
          64.0667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Neskaupstaður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjarðabyggð",
        "capital": "",
        "population": 1432,
        "population_proper": 1432
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.7,
          65.15
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Dalvík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Dalvíkurbyggð",
        "capital": "",
        "population": 1362,
        "population_proper": 1362
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.5333,
          65.9667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Stykkishólmur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Stykkishólmur",
        "capital": "",
        "population": 1308,
        "population_proper": 1308
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.725,
          65.075
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Reyðarfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjarðabyggð",
        "capital": "",
        "population": 1270,
        "population_proper": 1270
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.2167,
          65.0333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Siglufjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjallabyggð",
        "capital": "",
        "population": 1182,
        "population_proper": 1182
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.9089,
          66.1519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Ólafsvík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Snæfellsbær",
        "capital": "",
        "population": 970,
        "population_proper": 970
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.7108,
          64.8942
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Bolungarvík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Bolungarvík",
        "capital": "",
        "population": 953,
        "population_proper": 953
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.2508,
          66.1575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Blönduós",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Húnabyggð",
        "capital": "",
        "population": 939,
        "population_proper": 939
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.3,
          65.6667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hvolsvöllur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Rangárþing Eystra",
        "capital": "",
        "population": 931,
        "population_proper": 931
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.2333,
          63.75
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Grundarfjörþur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Grundarfjarðarbær",
        "capital": "",
        "population": 861,
        "population_proper": 861
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.2667,
          64.9333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hella",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Rangárþing Ytra",
        "capital": "",
        "population": 861,
        "population_proper": 861
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.4,
          63.8333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Vopnafjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Vopnafjarðarhreppur",
        "capital": "",
        "population": 695,
        "population_proper": 695
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.8333,
          65.75
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Patreksfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Vesturbyggð",
        "capital": "",
        "population": 677,
        "population_proper": 677
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.9847,
          65.5953
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Seyðisfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Múlaþing",
        "capital": "",
        "population": 676,
        "population_proper": 676
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.0089,
          65.2631
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Fáskrúðsfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjarðabyggð",
        "capital": "",
        "population": 662,
        "population_proper": 662
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.0104,
          64.9294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Vogar",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Vogar",
        "capital": "",
        "population": 639,
        "population_proper": 639
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.3667,
          63.9667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hvammstangi",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Húnaþing Vestra",
        "capital": "",
        "population": 578,
        "population_proper": 578
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.95,
          65.4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Stokkseyri",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Árborg",
        "capital": "",
        "population": 528,
        "population_proper": 528
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.0505,
          63.8355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Eyrarbakki",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Árborg",
        "capital": "",
        "population": 526,
        "population_proper": 526
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.15,
          63.8667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Djúpivogur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Múlaþing",
        "capital": "",
        "population": 509,
        "population_proper": 509
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.2833,
          64.65
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Skútustaðir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Þingeyjarsveit",
        "capital": "",
        "population": 502,
        "population_proper": 502
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.9174,
          65.6436
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Skagaströnd",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Skagaströnd",
        "capital": "",
        "population": 470,
        "population_proper": 470
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.3167,
          65.8333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Þórshöfn",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Langanesbyggð",
        "capital": "",
        "population": 380,
        "population_proper": 380
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.3333,
          66.2
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hellissandur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Snæfellsbær",
        "capital": "",
        "population": 365,
        "population_proper": 365
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.9,
          64.9167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Svalbarð",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Svalbarðsstrandarhreppur",
        "capital": "",
        "population": 358,
        "population_proper": 358
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.1,
          65.75
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Þingeyri",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Ísafjarðarbær",
        "capital": "",
        "population": 326,
        "population_proper": 326
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.5,
          65.8794
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hólmavík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Strandabyggð",
        "capital": "",
        "population": 320,
        "population_proper": 320
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.6833,
          65.7167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Keflavík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjanesbær",
        "capital": "",
        "population": 314,
        "population_proper": 314
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.5667,
          64.0167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Suðureyri",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Ísafjarðarbær",
        "capital": "",
        "population": 294,
        "population_proper": 294
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.5333,
          66.1167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Búðardalur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Dalabyggð",
        "capital": "",
        "population": 272,
        "population_proper": 272
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.7667,
          65.1167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Flateyri",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Ísafjarðarbær",
        "capital": "",
        "population": 267,
        "population_proper": 267
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.5167,
          66.05
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Reykhólar",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykhólahreppur",
        "capital": "",
        "population": 242,
        "population_proper": 242
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.2,
          65.45
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Bíldudalur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Vesturbyggð",
        "capital": "",
        "population": 225,
        "population_proper": 225
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.6306,
          65.6831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hnífsdalur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Ísafjarðarbær",
        "capital": "",
        "population": 213,
        "population_proper": 213
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -23.1167,
          66.1167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Reykjahlíð",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Þingeyjarsveit",
        "capital": "",
        "population": 208,
        "population_proper": 208
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.9086,
          65.6436
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Ólafsfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjallabyggð",
        "capital": "",
        "population": 192,
        "population_proper": 192
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.65,
          66.0667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hofsós",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Skagafjörður",
        "capital": "",
        "population": 190,
        "population_proper": 190
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -19.4333,
          65.9
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Raufarhöfn",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Norðurþing",
        "capital": "",
        "population": 188,
        "population_proper": 188
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -15.95,
          66.4542
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Stöðvarfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjarðabyggð",
        "capital": "",
        "population": 184,
        "population_proper": 184
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -13.8743,
          64.8333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kirkjubæjarklaustur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Skaftárhreppur",
        "capital": "",
        "population": 176,
        "population_proper": 176
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.0667,
          63.7833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Súðavík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Súðavíkurhreppur",
        "capital": "",
        "population": 176,
        "population_proper": 176
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.9917,
          66.0278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Breiðdalsvík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjarðabyggð",
        "capital": "",
        "population": 137,
        "population_proper": 137
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14,
          64.8
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Varmahlíð",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Skagafjörður",
        "capital": "",
        "population": 137,
        "population_proper": 137
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -19.4449,
          65.5525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kópasker",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Norðurþing",
        "capital": "",
        "population": 120,
        "population_proper": 120
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.45,
          66.3
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kaldrananes",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Kaldrananeshreppur",
        "capital": "",
        "population": 116,
        "population_proper": 116
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.4417,
          65.6903
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hafnir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjanesbær",
        "capital": "",
        "population": 109,
        "population_proper": 109
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.6833,
          63.9333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Helgafell",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Stykkishólmur",
        "capital": "",
        "population": 62,
        "population_proper": 62
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.7292,
          65.0411
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Eskifjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Fjarðabyggð",
        "capital": "",
        "population": 21,
        "population_proper": 21
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -14.0154,
          65.0715
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Lambastaðir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Seltjarnarnes",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22,
          64.15
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Sólmundarhöfði",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Akranes",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.048,
          64.3167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kleppur",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjavík",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.85,
          64.1458
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Brautarholt",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjavík",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.85,
          64.2333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Gufunes",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjavík",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.8162,
          64.1526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Saurbær",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjavík",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.8327,
          64.284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Silfurtún",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Garðabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.9167,
          64.1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Bessastaðir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Garðabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22,
          64.1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Brekka",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Garðabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.0167,
          64.1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Garðakauptún",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Garðabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.9,
          64.0833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hvaleyri",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Hafnarfjörður",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.9859,
          64.0632
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Ofanleiti",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Vestmannaeyjar",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -20.2944,
          63.4197
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hlíðarendi",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Rangárþing Eystra",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -19.9507,
          63.7248
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Lögmannshlíð",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Akureyri",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.1655,
          65.6765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Glerárþorp",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Akureyri",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.0929,
          65.6938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Syðstibær",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Dalvíkurbyggð",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.3667,
          65.9667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Miðgarðar",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Þingeyjarsveit",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -17.9512,
          66.5377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Ytri-Njarðvík",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Reykjanesbær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.5473,
          63.9897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Útskálar",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.6608,
          64.0782
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Garðskagi",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.6781,
          64.0795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Flóagaflshverfi",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Ölfus",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.2333,
          63.9
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Álafoss",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Mosfellsbær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.6765,
          64.1638
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Lágafell",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Mosfellsbær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -21.7116,
          64.1603
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Býjarsker",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.7072,
          64.0286
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kirkjuból",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.7017,
          64.0651
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Hvalsnes",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Suðurnesjabær",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.735,
          63.9946
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Kálfatjörn",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Vogar",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.2938,
          64.0168
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Brunnastaðir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Vogar",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.3833,
          64
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Ásláksstaðir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Vogar",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.3346,
          64.0083
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Stóra-Vatnsléysa",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Sveitarfélagið Vogar",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.2182,
          64.0185
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Möðruvellir",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Hörgársveit",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -18.2521,
          65.7725
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "city": "Vatnsfjörður",
        "country": "Iceland",
        "iso2": "IS",
        "admin_name": "Súðavíkurhreppur",
        "capital": "",
        "population": "",
        "population_proper": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -22.4586,
          65.9424
        ]
      }
    }
  ]
}

map.on('load', () => {
  // add markers to map
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = "url('images/redstar.png')";
  
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
  }
});
