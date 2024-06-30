import styles from "./App.module.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About"; 
import { Experience } from "./Components/Experience/Experience";
import { Contact } from "./Components/Contact/Contact";


function App() {
  return <div className={styles.App} id="home"> 
    <Navbar />
    <Home />
    <About/> 
    <Experience/>
    <Contact/>
   </div>
}

export default App
