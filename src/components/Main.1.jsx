import { productos } from './servicios/productos';

export default function Main() {  
    const{data,loading}=productos;
    return (
     <div>{
        <ul>
         {loading && <li>loading...</li>}   
        {data?.map((user)=> (<li key={user.main}>{user.main}</li>))}
        {data?.map((user)=> (<li key={user.main}>{user.main}</li>))}
        {data?.map((user)=> (<li key={user.main}>{user.main}</li>))}
        </ul>
        }</div>
        )
}
