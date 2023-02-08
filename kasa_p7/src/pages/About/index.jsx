import './index.css'
import BannerAbout from "../../assets/BannerAbout.png"
import Banner from "../../components/Banner/index"



function About() {
    return (
        <main className="main-about">
        <Banner
        img = {BannerAbout}
        title=""/>
       </main>
       
    )
}

export default About