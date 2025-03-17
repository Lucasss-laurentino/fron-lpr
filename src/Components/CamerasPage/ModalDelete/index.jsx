import { useContext, useEffect } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CamerasContext } from '../../../contexts/CamerasContext';

export const ModalDelete = ({ show, onHide }) => {

    const { cameraSelecionada, keys, deletarCamera } = useContext(CamerasContext);

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Excluir Câmera
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="m-0">{cameraSelecionada.ip}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        deletarCamera();
                        onHide();
                    }} className='btn-danger'>Excluir</Button>
                    <Button onClick={onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}