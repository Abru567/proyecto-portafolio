import { fetchData } from ".//fetchData"
import { Suspense } from 'react';
import { productos } from './servicios/productos.json'
import '../App.css'

const apiData = fetchData(productos)

export default function Main() {

        const data = apiData.read()

        return (

                <div>
                        <Suspense fallback={<div>loading...</div>}>
                                <ul>
                                        {data?.map((user) => { <li key={user.id}>{user.titulo}</li> })};
                                        {data?.map((user) => { <li key={user.id}>{user.tipo}</li> })
                                        }
                                </ul>
                        </Suspense>
                </div>

        )
}