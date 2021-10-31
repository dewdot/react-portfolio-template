import { TestimonialData } from "./TestimonialData";
import { useState } from "react";
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SliderLeftHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TestimonialData.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }

  }
  const SliderRightHandler = () => {
    if (currentSlide === TestimonialData.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }

  }
  return (
    <div id="testimonials" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>Clients <span className="color-primary">Testimonials</span></h1>
          <p className="width70">Feel free to get in touch with me. I am always open to discuss new projects, creative ideas or opportunities to be part of your visions.</p>
        </div>
        <div className="testimonials">
          <i className="bi bi-chevron-left arrow-icon" onClick={SliderLeftHandler}></i>

          <div className="testimonial">
            <h3>{TestimonialData[currentSlide].name}</h3>
            <em className="position">{TestimonialData[currentSlide].position}</em>
            <p>{TestimonialData[currentSlide].message}</p>
          </div>
          <i className="bi bi-chevron-right arrow-icon" onClick={SliderRightHandler}></i>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;