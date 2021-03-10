import Div from './Div'

//componente
function App() {
  return (
    <div>
      <h1>Você está em APP</h1>
      <marquee>Andando.....</marquee>
      <Home />
      <div>------</div>
      <Div />
    </div>
  )
}

//compnente
function Home() {
  return (
    <div>
      <h1>Inicio Home</h1>
      <Div />
      <div>Fim home</div>
    </div>
  )
}

export default App