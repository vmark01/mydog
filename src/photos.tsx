const base = import.meta.env.BASE_URL;

const photos = [
  {
    src: `${base}photos/z1.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 1"
  },
  {
    src: `${base}photos/z3.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 2"
  },
  {
    src: `${base}photos/z2.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 3"
  },
  {
    src: `${base}photos/z9.png`,
    width: 1024,
    height: 1024,
    alt: "Kép 4"
  },
  {
    src: `${base}photos/z4.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 5"
  },
  {
    src: `${base}photos/z5.png`,
    width: 1500,
    height: 2000,
    alt: "Kép 6"
  },
  {
    src: `${base}photos/z6.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 7"
  },
  {
    src: `${base}photos/z7.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 8"
  },


  {
    src: `${base}photos/ze1.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 10"
  },
  {
    src: `${base}photos/ze2.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 11"
  },
  {
    src: `${base}photos/ze3.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 12"
  },
  {
    src: `${base}photos/ze4.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 13"
  },
  {
    src: `${base}photos/ze5.jpg`,
    width: 1500,
    height: 1125,
    alt: "Kép 14"
  },
  {
    src: `${base}photos/ze6.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 15"
  },
  {
    src: `${base}photos/ze7.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 16"
  },
  {
    src: `${base}photos/ze8.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 17"
  },
  {
    src: `${base}photos/ze9.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 18"
  },
  {
    src: `${base}photos/ze10.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 19"
  },
  {
    src: `${base}photos/ze11.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 20"
  },
  {
    src: `${base}photos/ze12.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 21"
  },
  {
    src: `${base}photos/ze13.jpg`,
    width: 1024,
    height: 1024,
    alt: "Kép 22"
  },
  {
    src: `${base}photos/ze14.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 23"
  },
  {
    src: `${base}photos/ze15.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 24"
  },
  {
    src: `${base}photos/ze16.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 25"
  },
  {
    src: `${base}photos/ze17.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 26"
  },
  {
    src: `${base}photos/ze18.jpg`,
    width: 1816,
    height: 1362,
    alt: "Kép 27"
  },
  {
    src: `${base}photos/ze19.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 28"
  },
  {
    src: `${base}photos/ze20.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 29"
  },
  {
    src: `${base}photos/ze21.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 30"
  },
  {
    src: `${base}photos/ze22.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 31"
  },
  {
    src: `${base}photos/ze23.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 32"
  },
  {
    src: `${base}photos/ze24.jpg`,
    width: 2048,
    height: 1536,
    alt: "Kép 33"
  },
  {
    src: `${base}photos/ze25.jpg`,
    width: 1536,
    height: 1152,
    alt: "Kép 34"
  },
  {
    src: `${base}photos/ze26.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 35"
  },
  {
    src: `${base}photos/ze27.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 36"
  },
  {
    src: `${base}photos/ze28.jpg`,
    width: 1536,
    height: 1229,
    alt: "Kép 37"
  },
  {
    src: `${base}photos/ze29.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 38"
  },
  {
    src: `${base}photos/ze30.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 39"
  },
  {
    src: `${base}photos/ze31.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 40"
  },
  {
    src: `${base}photos/ze32.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 41"
  },
  {
    src: `${base}photos/ze33.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 42"
  },
  {
    src: `${base}photos/ze34.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 43"
  },
  {
    src: `${base}photos/ze35.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 44"
  },
  {
    src: `${base}photos/ze36.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 45"
  },
  {
    src: `${base}photos/ze37.jpg`,
    width: 1511,
    height: 1723,
    alt: "Kép 46"
  },
  {
    src: `${base}photos/ze38.jpg`,
    width: 1254,
    height: 1003,
    alt: "Kép 47"
  },


  {
    src: `${base}photos/ze39.jpg`,
    width: 2048,
    height: 1536,
    alt: "Kép 48"
  },
  {
    src: `${base}photos/ze40.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze41.jpg`,
     width: 1284,
    height: 856,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze42.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze43.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze44.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze45.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze46.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze47.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze48.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze49.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze50.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze51.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze52.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze53.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze54.jpg`,
    width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze55.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze56.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze57.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
  {
    src: `${base}photos/ze58.jpg`,
     width: 1500,
    height: 2000,
    alt: "Kép 47"
  },
];

export default photos;
