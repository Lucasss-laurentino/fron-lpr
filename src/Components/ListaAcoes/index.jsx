import './index.css';

export const ListaAcoes = ({abrirModalADC}) => {
    return (
        <>
        <div class="divListaAcoes">
            <button class="btn-novo" onClick={abrirModalADC}>+ Novo</button>    
        </div>
        </>
    );
}