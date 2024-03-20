import './crl.css';
const Coursol = () => {
  const redirect=()=>{
    window.location.href='https://registrations-app.netlify.app'
  }
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex={0}
        onClick={redirect}
         className="carousel__slide" 
          style={{
            background:'url(https://i.ibb.co/C0CpxKg/Blue-Orange-Modern-Car-Insurance-Instagram-Post-Square.png)',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'

            }}>
          <div className="carousel__snapper">
            <a href="#carousel__slide4" className="carousel__prev">
              Go to last slide
            </a>
            <a href="#carousel__slide2" className="carousel__next">
              Go to next slide
            </a>
          </div>
        </li>
        <li 
        onClick={redirect}
        
        id="carousel__slide2" tabIndex={0} className="carousel__slide"  style={{background:'url(https://i.ibb.co/w6cpQ1x/1.png)',backgroundSize:'cover'}}>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide1" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide3" className="carousel__next">
            Go to next slide
          </a>
        </li>
        <li 
        onClick={redirect}
        id="carousel__slide3" tabIndex={0} className="carousel__slide" style={{background:'url(https://i.ibb.co/TrnXM7M/2.png)',backgroundSize:'cover'}}>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide2" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide4" className="carousel__next">
            Go to next slide
          </a>
        </li>
     
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4" className="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
};
export default Coursol;
