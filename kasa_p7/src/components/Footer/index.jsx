import "../../components/Footer/index.css";
import LogoFooter from "../../assets/Footer-logo.png"

function Footer() {
    return (
        <div className = "Footer-div">
            <img className="Footer-logo" src={LogoFooter} alt="Logo" />
            <h1 className = "Footer-h1">© 2020 Kasa. All rights reserved</h1>
        </div>
    )
}

export default Footer