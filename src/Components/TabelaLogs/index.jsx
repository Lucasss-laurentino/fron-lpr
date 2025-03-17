import { ModalPhoto } from '../ModalPhoto';
import './index.css';
import { useEffect, useState } from "react";

export const TabelaLogs = ({ logs }) => {

    const [colunas, setColunas] = useState([]);

    const [show, setShow] = useState(false);
    const [campo, setCampo] = useState("");
    const [base64, setBase64] = useState("");

    useEffect(() => {
        if (logs.length > 0) {
            setColunas(Object.keys(logs[0]));
        }
    }, [logs]);

    return (
        <>
        <ModalPhoto show={show} setShow={setShow} campo={campo} base64={base64} />
            <div className="col-12 div-tabela-logs">
                <table className="tabela-logs">
                    <thead>
                        <tr>
                            {colunas.map((coluna, index) => (
                                <th key={index} scope="col">{coluna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return (
                                <tr key={index}>
                                    {colunas.map((coluna, indexColuna) => {
                                        if(coluna.includes("_Img")){
                                            return (
                                                <td key={indexColuna} onClick={() => {
                                                    setBase64(log[coluna]);
                                                    setCampo(coluna);
                                                    setShow(true);
                                                }}>
                                                    {'Clique para ver'}
                                                </td>
                                            );
                                        } else {
                                            return (
                                                <td key={indexColuna}>
                                                    {log[coluna]}
                                                </td>
                                            );    
                                        }
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}