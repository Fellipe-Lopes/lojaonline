import header from './header.module.css';

export const Header = () =>{
    return(
        <header className={header.cabecalho}>

            <div className={header.logo}>
                LOGO
            </div>

            <div className={header.barra_de_pesquisa}>
                <input className={header.pesquisa} type="text" />
            </div>

            <div className={header.menu}>
                <ul className={header.lista_menu}>
                    <li className={header.lista_menu_item}>Login</li>
                    <li className={header.lista_menu_item}>Promoções</li>
                </ul>
            </div>

            <div className={header.carrinho}>
                CARRINHO
            </div>

        </header>
    )
}