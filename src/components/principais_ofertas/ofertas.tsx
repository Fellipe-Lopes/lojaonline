import ofertas from './ofertas.module.css';

export const Ofertas = () =>{
    return(
        <section>
            <ul className={ofertas.lista}>
                <li className={ofertas.lista_item}>
                    img
                    <h2>Samsung A20</h2>
                </li>
                <li className={ofertas.lista_item}>
                    img
                    <h2>Notebook Acer</h2>
                </li>
                <li className={ofertas.lista_item}>
                    img
                    <h2>Memória DDR4</h2>
                </li>
                <li className={ofertas.lista_item}>
                    img
                    <h2>Placa GTSX 2000</h2>
                </li>
                <li className={ofertas.lista_item}>
                    img
                    <h2>Intel i7</h2>
                </li>
            </ul>
        </section>
    )
}