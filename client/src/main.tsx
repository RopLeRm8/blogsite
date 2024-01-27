import ReactDOM from 'react-dom/client'
import "./css/Global.css"
import RouteProvider from './providers/RouteProvider.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouteProvider />
)
