import './index.css'
import BannerAbout from "../../assets/BannerAbout.png"
import Banner from "../../components/Banner/index"
import Collapse from '../../components/Collapse/index';



function About() {
    return (
        <main className="main-about">
        <Banner
        img = {BannerAbout}
        title=""/>

          <section className="section_about">
            
            <div className="collapse_about_container">

            </div>
            <div className="collapse_about_container">

            </div>
            <div className="collapse_about_container">

            </div>
            <div className="collapse_about_container">

            </div>
        </section>

       </main>
       
    )
}

export default About 


