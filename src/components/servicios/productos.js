
import productos from "../components/productos.json"
export async function Productos() {
    const data = await productos.json();
    return data
}