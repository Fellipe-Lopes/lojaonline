import ofertas from './ofertas.module.css';
import memorias from '../../assets/memorias/ddr4.webp';
import notebooks from '../../assets/notebooks/acer_n.webp';
import placas from '../../assets/placas_de _video/nvidia-geforce-gt-1030.webp';
import processadores from '../../assets/processadores/i7.webp';
import smart from '../../assets/smartphone/s_a20.webp';

export const Ofertas = () =>{
    return(
        <section className={ofertas.ofertas}>
            <div className={ofertas.item}>
                <div className={ofertas.imagem}>
                    <img className={ofertas.img} src={smart}/>
                </div>
                <div className={ofertas.texto}>
                    <h2>Samsung A20</h2>
                    <button className={ofertas.button}>Adicionar ao carrinho</button>
                </div>
            </div>
            <div className={ofertas.item}>
                <div className={ofertas.imagem}>
                    <img className={ofertas.img} src={processadores}/>
                </div>
                <div className={ofertas.texto}>
                    <h2>Intel Core i7</h2>
                    <button className={ofertas.button}>Adicionar ao carrinho</button>
                </div>
            </div>
            <div className={ofertas.item}>
                <div className={ofertas.imagem}>
                    <img className={ofertas.img} src={placas}/>
                </div>
                <div className={ofertas.texto}>
                <h2>Placa GT1300</h2>
                <button className={ofertas.button}>Adicionar ao carrinho</button>
                </div>
            </div>
            <div className={ofertas.item}>
                <div className={ofertas.imagem}>
                    <img className={ofertas.img} src={notebooks}/>
                </div>
                <div className={ofertas.texto}>
                    <h2>Acer Aspire</h2>
                    <button className={ofertas.button}>Adicionar ao carrinho</button>
                </div>
            </div>
            <div className={ofertas.item}>
                <div className={ofertas.imagem}>
                    <img className={ofertas.img} src={memorias}/>
                </div>
                <div className={ofertas.texto}>
                    <h2>Memória DDR4</h2>
                    <button className={ofertas.button}>Adicionar ao carrinho</button>
                </div>
            </div>
        </section>
    )
}