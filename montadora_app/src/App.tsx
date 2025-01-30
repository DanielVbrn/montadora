import Header from './UI/components/Header/Header'
import logo from "./assets/logo.png"
import HomePage from './pages/home/HomePage'



function App() {

  return (
    <div>
      <Header title='MONTADORA' imgLogo={logo}/>
      <HomePage />

    </div>
  
  )
}

export default App;
