import "../../components/Banner/index.css";


function Banner ({img, title}) {
    return (
        <div className="Banner">
            <div className="Banner_div">
                <h1> {title} </h1>
                <div className="Banner_div_img"><img src={img} alt={ title } title={ title } /></div>
            </div>
        </div>
    )
}

export default Banner
