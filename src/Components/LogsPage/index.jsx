import { useContext, useEffect, useState } from "react";
import { TabelaLogs } from "../TabelaLogs"
import { LogsContext } from "../../contexts/LogsContext";
import './index.css';

export const LogsPage = () => {

    const { pegarLogs, logs, setPage, page } = useContext(LogsContext);

    useEffect(() => {
        pegarLogs();
    }, [page]);

    const [data, setData] = useState(() => {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = (hoje.getMonth() + 1).toString().padStart(2, 0)  // Adiciona o zero à frente se necessário
        const dia = hoje.getDate().toString().padStart(2, 0)
        return `${ano}-${mes}-${dia}`
    });

    return (
        <>
            <div className="col-12 pt-3 d-flex justify-content-between">
                <h3 className="cor-logs">Logs</h3>
                <input
                    type="date"
                    className='input-data'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button className='btn btn-sm btn-gerar-relatorio'>Gerar relatório</button>
            </div>
            <div className="col-12 pt-4">
                <TabelaLogs logs={logs} />
                <div class="div-btn-table-logs">
                    <button class="btn btn-lg" onClick={() => setPage(page === 1 ? 1 : page - 1)}>Anterior</button>
                    <button class="btn btn-lg" onClick={() => setPage(page+ 1)}>Próximo</button>
                </div>
            </div>

        </>
    )
}