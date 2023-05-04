import Websocket from './components/Websocket'
import { WebsocketProvider, socket } from './contexts/WebsocketContext'

const App = () => {
  return (
    <WebsocketProvider value={socket}>
      <Websocket />
    </WebsocketProvider>
  )
}

export default App