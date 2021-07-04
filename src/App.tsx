import './App.css'
import Contacts from './contacts/Contacts'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import MyWorks from './myWorks/MyWorks'
import Skills from './skills/Skills'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <MyWorks />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
