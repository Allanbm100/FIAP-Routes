import { Menu } from "../../../components/menu/Menu";

// Essa pág é para apresentar os detalhes dos hamburgueres, baseado no id na url
export default function Detalhes({ params: { id } }) { //O params: {id} TEM que ser o mesmo nome da pasta, nesse caso [id]
    return (
        <div>
            <h1>Detalhes</h1>
            <Menu />
            <h2>{id}</h2>
        </div>
    )
}