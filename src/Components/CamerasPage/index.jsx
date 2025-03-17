import { useContext, useEffect, useState } from 'react';
import { ModalADC } from './ModalADC/index';
import './index.css';
import { TabelaCameras } from './TabelaCameras';
import { CamerasContext } from '../../contexts/CamerasContext';
import { ModalDelete } from './ModalDelete';
import { ModalEditar } from './ModalEditar';

export const CamerasPage = () => {

    const [modalShow, setModalShow] = useState(false);
    const [modalShowDelete, setModalShowDelete] = useState(false);
    const [modalShowEditar, setModalShowEditar] = useState(false);

    const { pegarCameras } = useContext(CamerasContext);

    const abrirModalADC = () => {
        setModalShow(true)
    }

    const abrirModalDelete = () => {
        setModalShowDelete(true)
    }

    const abrirModalEditar = () => {
        setModalShowEditar(true)
    }


    useEffect(() => {
        pegarCameras();
    }, [])

    return (
        <>
        <ModalADC 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <ModalDelete
            show={modalShowDelete}
            onHide={() => setModalShowDelete(false)}        
        />
        <ModalEditar
            show={modalShowEditar}
            onHide={() => setModalShowEditar(false)}                
        />
            <div className="col-12 pt-3 d-flex justify-content-between">
                <h3 className="cor-logs">Câmeras</h3>
                <p class="m-0">Gateway - 192.168.0.0</p>
                <button className='btn btn-sm btn-gerar-relatorio'>Gerar relatório</button>
            </div>
            <div className="col-12 pt-4">
                <TabelaCameras 
                    abrirModalADC={abrirModalADC} 
                    abrirModalDelete={abrirModalDelete}
                    abrirModalEditar={abrirModalEditar}
                />
            </div>        
        </>
    )
}