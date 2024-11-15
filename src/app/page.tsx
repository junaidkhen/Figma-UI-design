import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkManagement from "./components/WorkManagement"
import Content from "../app/components/Content"
import Customize from "../app/components/Customize"
import Customize2 from "../app/components/Customize2"
import YourWork from "../app/components/YourWork"
import Sponser from "../app/components/Sponser"
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <WorkManagement/>
      <Content/>
      <Customize/>
      <Customize2/>
      <YourWork/>
      <Sponser/>
      <Footer/>
    </div>
  );
};