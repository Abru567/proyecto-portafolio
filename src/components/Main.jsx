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
}, [])
  return (
    <div>
      {data && (
        <ul>
          
            {data.map((item) => {
              <li key={item.id}>item</li>
            })}
          
        </ul>
      )}
    </div>
  )
})
export default TuComponente