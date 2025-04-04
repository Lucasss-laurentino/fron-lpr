import { useContext, useEffect, useState } from 'react';
import './index.css';
import { LogsContext } from '../../contexts/LogsContext';

export const Navbar = () => {

    const { search, setSearch, pegarLogs } = useContext(LogsContext);

    useEffect(() => {
        pegarLogs(); // é chamada aqui pra escutar search
    }, [search])

    return (
        <>
            <nav className="navbar bg-white shadow border-radius-navbar">
                <div className="col-6 div-input-search">
                    <input 
                        type="text" 
                        className='input-search-custom' 
                        placeholder='Pesquise por Placa'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <div className="div-icon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    )
}