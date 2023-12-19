
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App(){
  return (
     
      <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
       </>
    
  )
}

export default App;
