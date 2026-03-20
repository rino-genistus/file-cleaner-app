import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import Title from './components/Title'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Title/>
    </>
  )
}

export default App
