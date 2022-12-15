import '../components/IconSection.css';
import '../components/Media.css'
import icon1 from '../images/section-icon-1.svg';
import icon2 from '../images/section-icon-2.svg';
import icon3 from '../images/section-icon-3.svg';
import icon4 from '../images/section-icon-4.svg';
import icon5 from '../images/section-icon-5.svg';
import icon6 from '../images/section-icon-6.svg';
import icon7 from '../images/section-icon-7.svg';
import icon8 from '../images/section-icon-8.svg';
const IconSection = () => {
    return(
        <>
        <section className='icon-section'>
            <div className='section-head'>
               <p> MEASUREMENT TO OUR SUCCESS</p>
            </div>
            <div className='section-head sub-head'>
            <p> Our process-driven approach keeps us going</p>
            </div>
            <div className="icon-grid">
                <div className="icon-item">
                    <img src={icon1} alt="Icon 1" className='icon-img' />
                    <p>TRANSPARENCY AND RELIABILITY</p>
                </div>
                <div className="icon-item">
                    <img src={icon2} alt="Icon 2" className='icon-img' />
                    <p>REAL TIME PROJECT STATUS</p>
                </div>
                <div className="icon-item">
                    <img src={icon3} alt="Icon 3" className='icon-img' />
                    <p>WELL STRUCTURED COMMUNICATION</p>
                </div>
                <div className="icon-item">
                    <img src={icon4} alt="Icon 4" className='icon-img' />
                    <p>AGILE METHODOLOGY</p>
                </div>
                <div className="icon-item">
                    <img src={icon5} alt="Icon 5" className='icon-img' />
                    <p>ONSITE COLLABORATION</p>
                </div>
                <div className="icon-item">
                    <img src={icon6} alt="Icon 6" className='icon-img' />
                    <p>INNOVATION AT WORK</p>
                </div>
                <div className="icon-item">
                    <img src={icon7} alt="Icon 7" className='icon-img' />
                    <p>CLIENT'S INVOLVEMENT IN EACH MILESTONE</p>
                </div>
                <div className="icon-item">
                    <img src={icon8} alt="Icon 8" className='icon-img' />
                    <p>DEDICATED TEAM</p>
                </div>
            </div>
        </section>
        </>
    ) 
}
export default IconSection; 