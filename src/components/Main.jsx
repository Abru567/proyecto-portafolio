
import { useEffect, useState } from 'react'
import '../App.css'
import { Productos } from './servicios/productos'
export default function Main() {
    const [producto, setProductos] = useState([])
    useEffect(() => (
        Productos().then(data => (
            setProductos(data)
        ))
    )
        , [])
    return (
        <></>
    )
}