import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CamerasContext } from '../../../contexts/CamerasContext';

export const ModalADC = ({ show, onHide }) => {

  const [ip, setIp] = useState('');
  const [estado, setEstado] = useState('');
  const [sentido, setSentido] = useState('');
  const [nome, setNome] = useState('');

  const { formatIP } = useContext(CamerasContext);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar Câmera
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form>
            <div class="d-flex justify-content-between align-items-center my-2 pb-2">
              <div className="form-group col-6">
                <label for="ip">IP</label>
                <input
                  className="form-control"
                  placeholder="Ex: 192.168.0.10"
                  name="ip"
                  value={ip}
                  onChange={ async (e) => setIp(await formatIP(e.target.value))}
                />

              </div>
              <div className="form-group col-5">
                <label for="ip">Direção</label>
                <select class="form-select form-select-md" aria-label=".form-select-sm example">
                  <option selected>Selecione</option>
                  <option value="1">Entrada</option>
                  <option value="2">Saída</option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center my-2">
              <div className="form-group col-4">
                <label for="marca">Marca</label>
                <select class="form-select form-select-md" aria-label=".form-select-sm example">
                  <option selected>Selecione</option>
                  <option value="1">Alphadigi</option>
                  <option value="2">ControlID</option>
                  <option value="3">Hikivision</option>
                </select>
              </div>
              <div className="form-group col-3">
                <label for="login">Login</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name='login'
                  value={sentido}
                  onChange={(e) => setSentido(e.target.value)}
                />
              </div>
              <div className="form-group col-3">
                <label for="senha">Senha</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name='senha'
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary my-2">Criar câmera</button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className='bg-danger border border-none'>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}