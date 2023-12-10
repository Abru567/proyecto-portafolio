
import '../App.css'
export default function Main() {
const express = import ('express')
const app = express();
const port = 3000;
  // Obtener un elemento específico por ID (sustituye <id> con el ID deseado)
    const jsonData = [
      
    {
      "id": "1",
      "titulo": "bebidas",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Cafe caliente"
    },
    {                                   
      "id": "2",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Caramel%20Macchiato%20425x425%20sin%20fondo_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Cafe helado"
    },
      {
      "id": "3",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FDulce%20de%20leche%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Frappuccino"
    },
    {
      "id": "4",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEnglish%20Breakfast%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Te caliente"
    },
    {
      "id": "5",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Te helado"
    },
      {
      "id": "6",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMango%20Dragonfruit%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Heladas"
    },
    {
      "id": "7",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate%20Caliente%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Calientes"
    },
    {
      "id": "8",
      "titulo": "comida",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-Relleno-Avellana-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Bakery"
    },
    {
      "id": "9",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBagel-Sandwich-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "sandwich y preparados"
    },
    {
      "id": "10",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMoneda-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Snacks"
    },
    {
      "id": "11",
      "titulo": "encasa",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCafe-verona_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "cafeengranos"
    },
    {
      "id": "12",
      "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCAJA-TE-HIBISCUS_2.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
      "tipo": "Te"
    },  // ...
  ];
  
  app.get('/api/json', (req, res) => {
    res.json(jsonData);
  });
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });}