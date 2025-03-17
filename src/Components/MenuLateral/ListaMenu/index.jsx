import './index.css';
import IconeLogs from './iconesMenuLateral/logs.svg';
import IconeLogsHover from './iconesMenuLateral/logsHover.svg';

import IconeCameraLPR from './iconesMenuLateral/cameraLpr.svg';
import IconeCameraLPRhover from './iconesMenuLateral/cameraLprHover.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ListaMenu = () => {
    
    const [itensMenu, setItensMenu] = useState([
        {
            text: "Câmeras",
            icone: IconeCameraLPR,
            iconeHover: IconeCameraLPRhover,
            url: "/cameras"
        },
        {
            text: "Logs",
            icone: IconeLogs,
            iconeHover: IconeLogsHover,
            url: "/logs"
        },
    ]);

    const [hoverAtivo, setHoverAtivo] = useState(null);

    const navigate = useNavigate();
    
    return (
        <>
        <div class="divListaMenuLateral">
            <ul className='listaMenuLateral'>
                {itensMenu.map((item, index) => (
                    <li 
                        key={index} 
                        onClick={() => navigate(item.url)} 
                        onMouseEnter={() => setHoverAtivo(index)}
                        onMouseLeave={() => setHoverAtivo(null)}
                    >
                        <p class="m-0">{item.text}</p>
                        <img src={hoverAtivo === index ? item.iconeHover : item.icone} alt="" />
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}