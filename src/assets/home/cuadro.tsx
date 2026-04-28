import Video from '../video/video2.mp4'

const cuadro = () => {
    return (
         <section className="about1">

      <div className="about1-container">

        {/* TEXTO */}
        <div className="about1-text">
          <h2 className="Titulo-cuadro " >
            DONDE LAS FRECUENCIAS <br />
            INSPIRAN Y <br />
             <span className="Color-Titulo-cuadro">DISEÑO SONORO COBRA VIDA</span>
          </h2>

          <p className="subtitle1">Comenzó en 1991</p>

          <div className="list1">
            <ul>
              <li> Últimas tecnologías</li>
              <li> Garantía de 5 años</li>
            </ul>

            <ul>
              <li> Diseños de alta calidad</li>
              <li> Diseño residencial</li>
            </ul>
          </div>

          <p className="description1">
            Ya sea su hogar, oficina o un proyecto comercial, siempre nos <br />
            dedicamos a hacer realidad su visión.
          </p>

          <button className="btn1">
            Más información →
          </button>
        </div>

        <div className="about-video1">
          <video src={Video} autoPlay muted  loop playsInline></video>
        </div>


      </div>

    </section>

    )
}

export default cuadro