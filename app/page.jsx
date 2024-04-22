import Image from "next/image";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Plans from "./components/Plans";

export default function Home() {
  return (
   <>
   <Header></Header>
   <Welcome></Welcome>

   <Portfolio></Portfolio>

   <Experience></Experience>

   <Plans></Plans>
   <br /><br />
   <Contact></Contact>
   </>
  );
}
