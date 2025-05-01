import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      OI JESUS EU TE AMO
      <Header/>
      <main>
        <Home/>
        <About />
        <Skills/>
        <Works/>
        <Contact/>
      </main>
      

      <Footer/>
    </>
  );
}

export default App;
