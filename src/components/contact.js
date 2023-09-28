import WA from '../icons/WA1.png'
import mail from '../icons/mail.png'
import QR from '../images/QR whats.jpg'

const Contact = () => {
  return (
    <div className="Contact flex sectionb padd3" >

      <div className="contactBox padd3" >
        <h2 className='Title' >¡Contactanos!</h2>

        <p className='section'>¿Tienes alguna duda o te gustaría conocer la casa? <br/>
          ¡Envíanos un mensaje!
        </p>

        <a  href="https://wa.me/524423185033"
          target="_blank" >
            <div className='contactA flex wrapBox' id="wame">
              <img src={WA} style={{width:"10%"}}></img>
              <h3 className='lils' >WhatsApp</h3>
            </div>
        </a>
          
        {/* <img src={QR} style={{borderRadius: "30px"}} ></img> */}

        <div className='contactA flex wrapBox'>
          <img src={mail} style={{width:"10%"}} ></img>

          <div className='lils' >
            <div style={{fontWeight:"bold", fontSize: "1.17em"}} >Mail</div>
            
            <a href="mailto:ximenacuu@gmail.com" >
              ximenacuu@gmail.com </a><br/>
            <a href="mailto:jorge.fdz@2y2.com.mx">jorge.fdz@2y2.com.mx</a>
          
           
          </div>

        </div>
         
  
       
            
      </div>

    </div>
  );
};

export default Contact;
