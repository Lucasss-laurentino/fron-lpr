import './index.css';
 import { MenuLateral } from "../MenuLateral"
import { Navbar } from "../Navbar"
import { Outlet } from 'react-router-dom';

export const PageDefault = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 p-0">
                        <MenuLateral />
                    </div>
                    <div className="col-10">
                        <Navbar />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}