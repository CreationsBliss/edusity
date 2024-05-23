import React from "react";
import Slider from "react-slick";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testimonial.css";

const Testimonial = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial">
      <div className="slider-container my-slider">
        <Slider {...settings}>
          <div className="single-slide">
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-1" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user-2" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user-3" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </div>

          <div className="single-slide">
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user-4" />
                <div>
                  <h3>William Jackson</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
