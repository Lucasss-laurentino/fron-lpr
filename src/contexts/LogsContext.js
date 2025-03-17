import { createContext, useState } from "react";
import { http } from "../http/htpp";

export const LogsContext = createContext();

export const LogsProvider = ({ children }) => {

    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");

    const [logs, setLogs] = useState([]);

    const pegarLogs = async () => {
        try {

            const dateFormated = date.replaceAll('/', '-');

            const response = await http.post('Log/getDatePlate', {
                date: dateFormated,
                page,
                pageSize,
                search: search.toUpperCase()
            });

            if (!response?.data) throw new Error("Falha na requisição");

            setLogs([...response.data]);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LogsContext.Provider value={{ pegarLogs, logs, date, page, pageSize, search, setSearch }}>
            {children}
        </LogsContext.Provider>
    )
}