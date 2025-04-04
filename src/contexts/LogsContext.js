import { createContext, useState } from "react";
import { http } from "../http/htpp";

export const LogsContext = createContext();

export const LogsProvider = ({ children }) => {

    const [date, setDate] = useState(() => {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = (hoje.getMonth() + 1).toString().padStart(2, 0)  // Adiciona o zero à frente se necessário
        const dia = hoje.getDate().toString().padStart(2, 0)
        return `${ano}-${mes}-${dia}`
    });
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");

    const [logs, setLogs] = useState([]);

    const pegarLogs = async () => {
        try {
            const response = await http.post('Log/getDatePlate', {
                date,
                page,
                pageSize,
                search: search.toUpperCase()
            });
            if (!response?.data) throw new Error("Falha na requisição");
            const dadosFormatados = await formatarDados(response.data);
            setLogs([...dadosFormatados]);
        } catch (error) {
            console.log(error);
        }
    }

    const formatarDados = async (logsResponse) => {
        const objsLogsFormated = logsResponse.map((log) => {
            const hora = log.DataHora.split("T")[1].split(".");
            let objTemp = {
                "Id": log.Id,
                "Hora": hora[0],
                "Placa": log.Placa,
                "Liberado": log.Liberado,
                "Acesso": log.Acesso,
                "Ip": log.Alphadigi.Ip,
                "Carro_Img": log.Carro_Img,
                "Cadastrado": log.Cadastrado,
                "Processado": log.Processado,
            };
            return objTemp;
        });
        return objsLogsFormated;
    }

    return (
        <LogsContext.Provider value={{ pegarLogs, logs, date, setDate, page, pageSize, search, setSearch, setPage }}>
            {children}
        </LogsContext.Provider>
 
)
}