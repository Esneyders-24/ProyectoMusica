import ingles from '../img/ingles.png'
import españa from '../img/España.png'
import Global from '../img/Globaljpg.png'

const Tiposmusica = () => {
    return (
        <section className="about3">
            <div className="about3-ttext">
                <p className="titulo3"> ¿QUE TIPOS DE GENERO PROPORCIONAMOS?</p>
                <p className="texto3">
                    Ofrecemos mucho más que una simple producción de pistas; proporcionamos una <span className="resaltado">experiencia integral de arquitectura auditiva.</span> Nos encargamos de estructurar cada frecuencia y matiz para construir una identidad sonora sólida, asegurando que cada proyecto refleje un estándar de vanguardia y precisión técnica inigualable.</p>

                 <div className="cards-container">

      <div className="card2">
        <div className="card2-header">
          <div className="icon-box">
            <img src={ingles} alt="Ingles" />
          </div>
          <h3 className="card2-title">Inglés</h3>
        </div>

        <div className="card2-content">
          <p>
            se caracteriza por una estructura fonética que permite una fluidez rítmica excepcional en géneros modernos. Sus frecuencias y acentuaciones naturales facilitan la creación de ganchos melódicos memorables, convirtiéndola en el estándar global para la innovación sonora y la experimentación rítmica de vanguardia.
          </p>
        </div>
      </div>

      <div className="card2">
        <div className="card2-header">
            <div className="icon-box">
            <img src={españa} alt="España" />
            </div>    
          <h3 className="card2-title">Española</h3>
        </div>

        <div className="card2-content">
          <p>
            se distingue por su extraordinaria riqueza tonal y la calidez de su interpretación. Su estructura lingüística permite una narrativa profunda y emocional, creando texturas sonoras orgánicas que logran una conexión inmediata y vibrante, posicionándose como una de las estéticas más influyentes y con mayor crecimiento en la escena global actual.
          </p>
        </div>
      </div>

      <div className="card2">
        <div className="card2-header">
          <div className="icon-box">
            <img src={Global} alt="" />
          </div>
          <h3 className="card2-title">Global</h3>
        </div>

        <div className="card2-content">
          <p>
            Esta sesión integra una curaduría de ritmos globales y fusiones que trascienden las fronteras del idioma. Nos enfocamos en capturar la esencia de diversos géneros emergentes, aplicando una ingeniería sonora que permite que cada pieza, sin importar su origen, mantenga una arquitectura técnica de primer nivel y una identidad auditiva universal
          </p>
        </div>
      </div>

    </div>


                
            </div>

        </section>

    )
}

export default Tiposmusica