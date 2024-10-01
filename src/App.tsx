import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;