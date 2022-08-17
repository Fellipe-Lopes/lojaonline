import produtos from './produto.module.css';

export const Produtos = ()=>{

    return(
        <div className={produtos.header2}>
            <ul className={produtos.lista}>
                <li>Celulares</li>
                <li>Notebooks</li>
                <li>Tables</li>
                <li>Video-Games</li>
                <li>Monitores</li>
                <li>Memórias</li>
                <li>Processadores</li>
                <li>Placas de Vídeo</li>
            </ul>
        </div>
    )
}