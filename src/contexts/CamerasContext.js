import { createContext, useState } from "react";
import { http } from "../http/htpp";

export const CamerasContext = createContext();

export const CamerasProvider = ({ children }) => {

    const [cameras, setCameras] = useState([]);
    const [cameraSelecionada, setCameraSelecionada] = useState([]);
    const [keys, setKeys] = useState([]);
    const [modalShowEditar, setModalShowEditar] = useState(false);

    const criarCamera = () => {
        try {
            const response = http.post('');
        } catch (error) {

        }
    }

    const pegarCameras = async () => {
        try {
            const response = await http.get('/camera/');
            if (!response) throw new Error("Erro ao buscar câmeras!");
            const camerasResponse = response.data;
            const camerasFormatadaObj = await formatarCameras(camerasResponse);
            if(camerasFormatadaObj.erro) throw new Error("Erro ao formatar câmeras!");
            setCameras([...camerasFormatadaObj.cameras]);
            const camerasFormatada = camerasFormatadaObj.cameras;
            camerasFormatada.map((camera) => (setKeys([...Object.keys(camera)]))); 
        } catch (error) {
            return { erro: true, mensagem: error.message };
        }
    }

    const deletarCamera = async () => {
        try {
            const id = cameraSelecionada.id;
            const response = await http.delete(`/camera/delete?id=${id}`);
            if(!response.data) throw new Error("Erro ao deletar câmera!");
            const novasCameras = cameras.filter(camera => camera.id !== cameraSelecionada.id);
            setCameras([...novasCameras]);
        } catch (error) {
            console.log(error);
        }

    }

    const editarCamera = async () => {
        try {
            const alphadigi = await formatarCameraEditar();
            const response = await http.put('/camera/update', alphadigi);
            if(!response) throw new Error("Erro ao editar câmera");
            if(response.status === 200) {
                const camerasFiltrada = cameras.map((camera) => {
                    if(camera?.id === alphadigi.id) {
                        camera = alphadigi;
                    }
                    return camera;
                });
                setCameras(camerasFiltrada);
                setModalShowEditar(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const formatarCameras = async (cameras) => {
        try {
            let camerasArray = [];
            cameras.forEach((camera) => {
                // objeto começará com id e area 
                const propriedadesOBJ = Object.entries(camera).filter((c) => (c[0] !== 'id' && c[0] !== 'area')) 
                let obj = {
                    "id": camera.id,
                    "area": camera.area.nome,
                    ...Object.fromEntries(propriedadesOBJ)
                };
                obj.ultimaHora = new Date(obj.ultimaHora).toLocaleString('pt-BR')
                obj.sentido = obj.sentido ? 'Entrada' : 'Saída';        
                camerasArray.push(obj);
            })
           return {erro: false, cameras: camerasArray};
        } catch (error) {
            console.log(error);
            return {erro: true, cameras: [], message: error.message};
        }
    }
    
    const formatIP = async (value) => {
        return value
          .replace(/\D/g, '') 
          .replace(/(\d{3})(\d)/g, '$1.$2')
          .replace(/(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3')
          .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3.$4')
          .slice(0, 15);
      };

    const formatarCameraEditar = async () => {
        const alphadigi = cameraSelecionada;
        if(typeof alphadigi?.sentido === 'string') {
            alphadigi.sentido = alphadigi.sentido.toUpperCase() === 'ENTRADA' ? true : false
        }
        return alphadigi;
    }

    return (
        <CamerasContext.Provider value={{
            criarCamera,
            pegarCameras,
            editarCamera,
            deletarCamera,
            keys,
            setKeys,
            cameraSelecionada, 
            setCameraSelecionada,
            cameras,
            setCameras,
            formatIP,
            modalShowEditar, 
            setModalShowEditar,
        }}>
            {children}
        </CamerasContext.Provider> 
)
}