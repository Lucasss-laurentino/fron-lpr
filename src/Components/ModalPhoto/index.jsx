import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalPhoto = ({ show, setShow, campo, base64 }) => {

    const [base64string, setBase64string] = useState("");

    const handleShow = () => {
        setShow(!show);
    }

    useEffect(() => {
        setBase64string(`data:image/jpeg;base64,`+base64);
    }, [base64]);

    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <img src={base64string} alt="" className='img-fluid' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleShow}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}