import Image from "next/image";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
   <>
   <Header></Header>
   <Welcome></Welcome>

   <Portfolio></Portfolio>
   </>
  );
}
