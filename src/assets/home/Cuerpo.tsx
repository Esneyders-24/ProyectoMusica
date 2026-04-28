import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

const Cuerpo = () => {
    return (
        <section className="about">
      <div className="container">

        <p className="subtitle">Quiénes somos</p>

        <h2 className="Tituloxfg">
          EXPERIMENTA <span className="Titulo-central">EL ARTE DE</span> LA IDENTIDAD VIBRANTE.
        </h2>

        <p className="description1">
          Nos especializamos en convertir visiones en realidad.
          Descubra nuestro portafolio de proyectos innovadores.
        </p>

        <div className="services">

          <div className="card">
             <img  className='Imgglobal'  src={img1} alt="" />
            <h3><strong>Ingeniería de Sonido de Alta Fidelidad y Estructura Musical de Vanguardia</strong></h3>
            <br />
            <p>Combinamos técnica avanzada y creatividad para materializar tus ideas en piezas auditivas únicas, asegurando una composición sólida que destaque en la industria actual.</p>
          </div>

          <div className="card">
            <img className='Imgglobal'  src={img2} alt="" />
            <h3><strong>Curaduría Estética de Atmósferas Sensoriales y Paisajes Rítmicos Inmersivos</strong></h3>
            <p>Diseñamos entornos sonoros modernos y envolventes que logran definir tu identidad visual y auditiva, creando una conexión profunda con tu audiencia a través del ritmo.</p>
          </div>

          <div className="card">
            <img  className='Imgglobal' src={img3} alt="" />
            <h3><strong>Dirección Creativa Integral y Mentoría Estratégica para Proyectos Premium</strong></h3>
            <p>Te brindamos una guía experta en cada fase de tu evolución artística, optimizando cada detalle de tu proyecto para elevar tu propuesta al estándar de excelencia más alto.</p>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Cuerpo