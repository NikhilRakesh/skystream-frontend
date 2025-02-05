import "../../src/App.css"
import Header from '../component/HomeComponent/Header'
import Banner from '../component/HomeComponent/Banner'
import Cta from '../component/HomeComponent/Cta'
import Section1 from '../component/HomeComponent/Section1'
import Section2 from '../component/HomeComponent/Section2'
import Section3 from '../component/HomeComponent/Section3'
import Section4 from '../component/HomeComponent/Section4'
import Footer from '../component/HomeComponent/Footer'
import Contact from '../component/HomeComponent/Contact'
import { useSnapshot } from "valtio"
import state from "../store"

function Home() {
  
  const snap = useSnapshot(state)

  return (
    <div className="background-gradiant min-h-screen md:pt-8 py-4 relative">
      <Header />
      <Banner />
      <Cta/>
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4 />
      <Footer />
      {snap.showContact && <Contact/>}
    </div>
  );
}

export default Home
