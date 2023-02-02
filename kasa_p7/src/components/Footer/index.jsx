import "./index.css";
import LogoFooter from "../../assets/Footer-logo.png"

function Footer() {
    return (
        <div className = "Footer-div">
            <img className="Footer-logo" src={LogoFooter} alt="Logo" />
            <p className = "Footer-text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer