import { fetchData } from ".//fetchData"
import { Suspense } from 'react';
import {Menu} from './servicios/app'
import '../App.css'


export default function Main() {
  const axios = require('axios');

  // URL de tu API
  const apiUrl = 'http://localhost:3000';
  
  // Obtener todo el menú
  axios.get(`${apiUrl}/menu`)
    .then(response => {
      console.log('Menú:', response.data);
    })
    .catch(error => {
      console.error('Error al obtener el menú:', error);
    });
  
  // Obtener un elemento específico por ID (sustituye <id> con el ID deseado)
  const itemId = 1;
  axios.get(`${apiUrl}/menu/${itemId}`)
    .then(response => {
      console.log(`Elemento ${itemId}:`, response.data);
    })
    .catch(error => {
      console.error(`Error al obtener el elemento ${itemId}:`, error);
    });
  

        return (
            <div>{axios}</div>
        ) //(
                //<div>
                  //      <Suspense fallback={<div>loading...</div>}>
                    //            <ul>
                      //                  {data?.map((user) => { <li key={user.id}>{user.titulo}</li> })};
                        //                {data?.map((user) => { <li key={user.id}>{user.tipo}</li> })
                          //              }
                            //    </ul>
                        //</Suspense>
                //</div>

        //)
}