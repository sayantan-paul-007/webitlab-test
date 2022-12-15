import '../components/ServiceSection.css';
import '../components/Media.css'
import media from '../images/media-icon.svg';
import health from '../images/healthcare-icon.svg';
import hospitality from '../images/hospitality-icon.svg';
import ecommerce from '../images/ecommerce-icon.svg';
import education from '../images/education-icon.svg';
import travel from '../images/travel-icon.svg';
import mobile from '../images/mobile-icon.svg';
import it from '../images/it-icon.svg';
import agritech from '../images/agritech-icon.svg';

const Service = () =>{
    return(
    <>
    <section className="service-section">
    <div className='service-head'>
               <p> WE ARE WORKING WITH THESE INDUSTRIES</p>
            </div>
            <div className="service-grid">
                <div className="service-item">
                    <img src={media} alt="Icon 1" className='service-img' />
                    <p>MEDIA & ENTERTAINMENT</p>
                </div>
                <div className="service-item">
                    <img src={health} alt="Icon 2" className='service-img' />
                    <p>HEALTH CARE & WELLNESS</p>
                </div>
                <div className="service-item">
                    <img src={hospitality} alt="Icon 3" className='service-img' />
                    <p>HOSPITALITY & REAL ESTATE</p>
                </div>
                <div className="service-item">
                    <img src={ecommerce} alt="Icon 4" className='service-img' />
                    <p>RETAIL & E COMMERCE</p>
                </div>
                <div className="service-item">
                    <img src={education} alt="Icon 5" className='service-img' />
                    <p>EDUCATION & LEARNING</p>
                </div>
                <div className="service-item">
                    <img src={travel} alt="Icon 6" className='service-img' />
                    <p>TRAVEL & TRANSPORT</p>
                </div>
                <div className="service-item">
                    <img src={mobile} alt="Icon 7" className='service-img' />
                    <p>MOBILE & TELECOM</p>
                </div>
                <div className="service-item">
                    <img src={it} alt="Icon 8" className='service-img' />
                    <p>IT & ITES</p>
                </div>
                <div className="service-item">
                    <img src={agritech} alt="Icon 8" className='service-img' />
                    <p>AGRITECH</p>
                </div>
            </div>
    </section>
    </>
    )
} 
export default Service