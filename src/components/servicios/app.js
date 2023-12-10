const express = require('express');
const app = express();
const PORT = 3000;
export function Menu(){
const menu = [
    {
        "id": "a",
        "titulo": "bebidas",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Cafe caliente"
    },
    {
        "id": "b",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Caramel%20Macchiato%20425x425%20sin%20fondo_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Cafe helado"
    },
    {
        "id": "c",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FDulce%20de%20leche%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Frappuccino"
    },
    {
        "id": "d",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEnglish%20Breakfast%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Te caliente"
    },
    {
        "id": "e",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Te helado"
    },
    {
        "id": "f",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMango%20Dragonfruit%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Heladas"
    },
    {
        "id": "g",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate%20Caliente%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Calientes"
    },
    {
        "id": "h",
        "titulo": "comida",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-Relleno-Avellana-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Bakery"
    },
    {
        "id":"i",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBagel-Sandwich-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "sandwich y preparados"
    },
    { 
        "id":"j",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMoneda-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Snacks"
    },
    {
        "id":"k",
        "titulo":"encasa",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCafe-verona_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "cafeengranos"
    },
    {
        "id":"l",
        "img": "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCAJA-TE-HIBISCUS_2.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
        "tipo": "Te"
    }
 
];

app.get('/menu', (req, res) => {
  res.json(menu);
})
app.get('/menu/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = menu.find(item => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
}
