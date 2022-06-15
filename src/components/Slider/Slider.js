import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import IMG0 from "../../assets/images/amazon0.jpg";
import IMG1 from "../../assets/images/amazon1.jpg";
import IMG2 from "../../assets/images/amazon2.jpg";
import IMG3 from "../../assets/images/amazon3.jpg";
import IMG4 from "../../assets/images/amazon4.jpg";
import styled from "styled-components";

const Slider = () => {
  return (
    <Main className="home">
      <div className="home__container">
        
      <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG0}
                                        alt="First slide"
                                    />
                                   
                               </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG1}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG3}
                                        alt="forth slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={IMG4}
                                        alt="fivth slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>
                        </div>
      </div>
    </Main>
  );
}

export default Slider;

const Main = styled.div`
height: 400px;
width: 100%;
overflow: hidden;
.home {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    margin-bottom: 0!important;
}
.carousel {
  max-width: 1500px;
    margin: 0 auto;
    min-width: 100%;
}

.home__row {
    display: flex;
    z-index: 10000;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 0!important;
}

.carousel-item {
  max-height: 230px;
}
.carousel-inner {
  overflow: visible;
}
.carousel-indicators {
  display: none;
}

@media screen and (max-width: 950px) {
  
  /* .row__container {
    margin-top:-54px ;
  }
   */
}
@media screen and (max-width: 650px) {
  .home__row {
    flex-wrap: wrap;
    margin: 0;
  }
  .carousel-item {
    max-height: 155px;
  }
  /* .row__container {
    margin-top:-31px ;
  } */
  
}
@media screen and (max-width: 560px) {
  .carousel-item {
    max-height: 80px;
  }

}

`