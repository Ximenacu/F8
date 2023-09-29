import WA from '../icons/WA1.png'
import mail from '../icons/mail.png'
import QR from '../images/QR whats.jpg'

const Contact = () => {
  return (
    <div className="Contact flex sectionb padd3" >

      <div className="contactBox" >
        <h2 className='Title section' >¡Contactanos!</h2>

        <p className='section'>¿Tienes alguna duda o <br/> te gustaría conocer la casa? <br/>
          ¡Envíanos un mensaje!
        </p>

        <a  href="https://wa.me/524423185033"
          target="_blank" >
            <div className='contactA flex' id="wame">
              <img src={WA}></img>
              <h3 className='lils' >WhatsApp</h3>
            </div>
        </a>
          
        {/* <img src={QR} style={{borderRadius: "30px"}} ></img> */}

        <div className='contactA flex'>
          <img src={mail}  ></img>

          <div className='lils' >
            {/* <div style={{fontWeight:"bold", fontSize: "1.17em"}} >Mail</div> */}
            
            <a href="mailto:ximenacuu@gmail.com" >
              
              ximenacuu@gmail.com 
              </a><br/>
            <a href="mailto:jorge.fdz@2y2.com.mx">jorge.fdz@2y2.com.mx</a>
          
           
          </div>

        </div>
         
  
       
            
      </div>

    </div>
  );
};

export default Contact;
