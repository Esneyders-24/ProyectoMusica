
import fondo from '../img/Velorimusic.jpg'

const Mainhero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="overlay"></div>
            <div className="Hero-content">
                <p className="tag">Relajante</p>
                <h1 className="Texto1">
                    El Arte del Silencio <br />
                    el Ritmo
                </h1>
                <p className="description">
                    Ya sea para un lanzamiento personal, una banda sonora o un proyecto comercial <br />
                    nos dedicamos a dar vida a tu identidad sonora
                </p>

            <button className="btn">
              Averiguamos
            </button>
            </div>
        </section>
    )
}

   
export default Mainhero