import './crl.css';
const Coursol = () => {
  const redireact=()=>{
    // Simulate a mouse click:
window.location.href = "https://reqs-app.netlify.app";
 }
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li onClick={redireact} id="carousel__slide1" tabIndex={0} className="carousel__slide"  style={{background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDA7rFFFpoztYvBJFGpXH0pTnPkukY1oQlz8f0xFnOdXajV4eBo5ol3i7bE6WVpRhvL2Q&usqp=CAU)',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
          <div className="carousel__snapper">
            <a href="#carousel__slide4" className="carousel__prev">
              Go to last slide
            </a>
            <a href="#carousel__slide2" className="carousel__next">
              Go to next slide
            </a>
          </div>
        </li>
        <li onClick={redireact} id="carousel__slide2" tabIndex={0} className="carousel__slide"  style={{background:'url(https://emergivac.co.za/wp-content/uploads/2022/11/Insurance-policies-which-are-the-most-important-for-a-person-to-have.jpeg)',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide1" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide3" className="carousel__next">
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide3" tabIndex={0} className="carousel__slide" style={{background:'url(https://i.ibb.co/C0CpxKg/Blue-Orange-Modern-Car-Insurance-Instagram-Post-Square.png)',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide2" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide4" className="carousel__next">
            Go to next slide
          </a>
        </li>
        <li  onClick={redireact} id="carousel__slide4" tabIndex={0} className="carousel__slide" style={{background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9ycaaR77GCRvcyJfNXHZON588KQxNPm1sw&usqp=CAU)',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide3" className="carousel__prev">
            Go to previous slide
          </a>
          <a href="#carousel__slide1" className="carousel__next">
            Go to first slide
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
