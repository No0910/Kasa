import "../../components/Banner/index.css";


function Banner ({img, title, css}) {
    return (
        <div className="Banner">
            <div className="Banner_div">
                <h1> {title} </h1>
                <div className={css}><img src={img} alt={ title } title={ title }/></div>
            </div>
        </div>
    )
}

export default Banner
