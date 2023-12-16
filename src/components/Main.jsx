import axios from 'axios'
import '../App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import productos from './servicios/productos.json'

const TuComponente = (() => {
  const { data, setData } = useState(null)
  const api = productos

  useEffect(() => {
    try {
     const fetchData= async() =>{
    const response = await axios.get(api)
    setData(response.data)
   }}catch(error){
        console.error('Error al hacer solicitud', error.message)
   }
   fetchData()
}, [])
console.log(data)
  return (
    <div>
      {data && (
        <ul>
          
            {data.map((item) => {
              <><li key={item.id}>item.titulo</li>
              <li key={item.id} item>item.img</li></>

            })}
          
        </ul>
      )}
    </div>
  )
})
export default TuComponente