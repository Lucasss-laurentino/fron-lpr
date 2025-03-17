import { useContext } from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CamerasContext } from '../../../contexts/CamerasContext';

export const ModalEditar = ({ show, onHide }) => {

    const { 
        cameraSelecionada, 
        setCameraSelecionada, 
        formatIP,
        editarCamera,
    } = useContext(CamerasContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'ip') {
            setCameraSelecionada((prevState) => ({
                ...prevState,
                [name]: formatIP(value)
            }));
        } else {
            setCameraSelecionada((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editar Câmera
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="d-flex justify-content-between align-items-center">
                            <div className="form-group col-6">
                                <label for="ip">IP</label>
                                <input
                                    type='text'
                                    className="form-control"
                                    placeholder="Ex: 192.168.0.10"
                                    name="ip"
                                    value={cameraSelecionada.ip}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="form-group col-5">
                                <label for="ip">Estado</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex: 192.168.0.10"
                                    name='estado'
                                    value={cameraSelecionada.estado}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <div className="form-group col-6">
                                <label for="ip">Sentido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex: 192.168.0.10"
                                    name='sentido'
                                    value={cameraSelecionada.sentido}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="form-group col-5">
                                <label for="ip">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex: 192.168.0.10"
                                    name='nome'
                                    value={cameraSelecionada.nome}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>

                        <button type="button" onClick={editarCamera} className="btn btn-primary my-2">Editar</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} className='btn-secondary'>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}