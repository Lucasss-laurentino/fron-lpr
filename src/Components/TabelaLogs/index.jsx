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
                                        if (coluna.includes("_Img")) {
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
                                                    {log[coluna] === true &&
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#157347" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                                        </svg>
                                                    }
                                                    {log[coluna] === false &&
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DC3545" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                                                            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                                                        </svg>
                                                    }

                                                    {
                                                        log[coluna]
                                                    }
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