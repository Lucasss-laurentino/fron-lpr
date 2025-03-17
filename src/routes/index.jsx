import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageDefault } from '../Components/PageDefault'
import { LogsProvider } from '../contexts/LogsContext'
import { LogsPage } from '../Components/LogsPage'
import { CamerasPage } from '../Components/CamerasPage'
import { CamerasProvider } from '../contexts/CamerasContext'

export default function appRouter() {
    return (
        <LogsProvider>
            <CamerasProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<PageDefault />} >
                            <Route path='/logs' element={<LogsPage />} />
                            <Route path='/cameras' element={<CamerasPage />} />
                        </Route>
                    </Routes>
                </Router>
            </CamerasProvider>
        </LogsProvider>

    )
}