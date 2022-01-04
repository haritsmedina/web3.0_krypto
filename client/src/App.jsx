import { Navbar, Welcome, Loader, Footer, Transaction } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <h1>TEST</h1>
     <div className="gradient-bg-welcome">
       <Navbar />
       <Welcome />
     </div>
     <Services />
     <Transaction/>
     <Footer/>
    </div>
  )
}

export default App
