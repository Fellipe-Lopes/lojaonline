import header from './header.module.css';
import Logo from '../../assets/logo.png';
import Carrinho from '../../assets/carrinho-de-compra.png';

export const Header = () =>{
    return(
        <header className={header.cabecalho}>

            <div className={header.logo}>
                <img className={header.logo_imagem} src={Logo} alt="" />
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
                <img className={header.carrinho_logo} src={Carrinho} alt="" />
            </div>

        </header>
    )
}