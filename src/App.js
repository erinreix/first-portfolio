import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import "./App.css";
import Projects from "./components/Projects"

function App() {
 return (
   <ChakraProvider theme={theme}>
       <main>
         <Header />
         <LandingSection />
         <Projects />
         <Footer />
       </main>
   </ChakraProvider>
 );
}

export default App;