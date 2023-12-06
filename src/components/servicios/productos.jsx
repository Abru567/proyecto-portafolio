import Productos from './productos.json'
export async function productos() {
    const [data, setData] = useState(null);
  const [loading, setLoading]= useState(true)
  useEffect(()=>{
    setLoading(true);
fetch(Productos)
.then((response) => response.json())
.then((data)=>setData(data))
.finally() ( () => setLoading(false))
},[]) 
    return {data, loading}
}