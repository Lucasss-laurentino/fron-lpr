import './index.css';
import { ListaMenu } from './ListaMenu';

export const MenuLateral = () => {
    return (
        <>
            <div className="div-menu-lateral">
                <div className="header-menu-lateral">
                    <img src="/img/LogoSegmix_login.png" alt="" className="img-fluid" />
                </div>
                <div class="body-menu-lateral">
                    <ListaMenu />
                </div>
            </div>
        </>
    );
}