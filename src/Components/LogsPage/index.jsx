import { useContext, useEffect, useState } from "react";
import { TabelaLogs } from "../TabelaLogs"
import { LogsContext } from "../../contexts/LogsContext";
import './index.css';

export const LogsPage = () => {

    const { pegarLogs, logs, setPage, page, date, setDate } = useContext(LogsContext);

    useEffect(() => {
        pegarLogs(); // é chamada aqui pra escutar page ou data
    }, [page, date]);

    return (
        <>
            <div className="col-12 pt-3 d-flex justify-content-between">
                <h3 className="cor-logs">Logs</h3>
                <input
                    type="date"
                    className='input-data'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onClick={(e) => e.target.showPicker()}
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