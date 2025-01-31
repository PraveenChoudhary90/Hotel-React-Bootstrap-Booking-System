import Carousel from 'react-bootstrap/Carousel';
import img1 from "./assets/blog01.jpg"
import img2 from "./assets/blog02.jpg"
import img3 from "./assets/blog03.jpg"
import Cards from './Card';

const Home = ()=>{
    return(
        <>
          <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage /> */}
        <img src={img1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 

    <Cards/>  
        </>
    )
}
export default Home;