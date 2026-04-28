
import Video2 from '../video/VideOVE.mp4'
const Beneficios = () => {
    return (
    <section className="about2">
        <div className="about2-text">
         <p className="subtitle2">Los Beneficios de la musica</p>          

          <h2 className="Titulo-beneficios">
            EL IMPACTO DE UNA <span className="Subrayar">IDENTIDAD </span>SONORA SUPERIOR
            </h2>  
          <p className="Parrafo1">
               Nos especializamos en convertir visiones artísticas en realidades sonoras. <br />
            Descubre nuestro portafolio de proyectos de vanguardia en arquitectura de audio y diseño de atmósferas,
             ejecutados con absoluta precisión técnica 
          </p>

          <div className="about-video2">
               <video src={Video2}  autoPlay muted  loop playsInline></video> 
          </div>
         <div>
          <ul>
            <li className= "listado-grande"> <span className="Lista-global">1.</span> Conexión Emocional</li>
            <li className="listado-grande1"> <span className="Lista-global">2.</span> Memoria Auditiva </li>
            <li className="listado-grande2"> <span className="Lista-global">3.</span> Liberación de Dopamina</li>
            <li className="listado-grande3"> <span className="Lista-global">4.</span> Aumento de la Resiliencia</li>
            <li className='listado-grande4'> <span className="Lista-global">5.</span> Fomento de la Autoconfianza</li>
            <li className="listado-grande5"> <span className="Lista-global">6.</span> Conexión Social</li>
          </ul>
         </div>
    </div>    
    </section>   
   )
}
export default Beneficios