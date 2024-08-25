// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const Testimonial = () => {
//   // const options = {
//   //   autoplay: true,
//   //   smartSpeed: 1500,
//   //   dots: true,
//   //   loop: true,
//   //   items: 1,
//   // };
//   return (
//     <div className="container bg-white py-5">
//       <div className="row px-3">
//         <div className="col-12">
//           <h2 className="title position-relative pb-2 mb-4">Testimonial</h2>
//         </div>
//         <div className="col-12">
//           {/* <OwlCarousel className="testimonial-carousel" {...options}> */}
//           {/* <div className="owl-carousel testimonial-carousel"> */}
//           <div className="text-left">
//             <i className="fa fa-3x fa-quote-left text-primary mb-4" />
//             <h4 className="text-body mb-4">
//               Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr
//               dolore et eos labore, stet justo sed est sed. Diam sed sed dolor
//               stet accusam amet eirmod eos, labore diam clita
//             </h4>
//             <div className="d-flex align-items-center">
//               <img
//                 className="img-fluid"
//                 // src="img/testimonial-1.jpg"
//                 style={{ width: "60px", height: "60px" }}
//               />
//               <div className="pl-3">
//                 <h5 className="text-primary m-0">Client Name</h5>
//                 <i>Profession</i>
//               </div>
//             </div>
//           </div>
//           <div className="text-left">
//             <i className="fa fa-3x fa-quote-left text-primary mb-4" />
//             <h4 className="text-body mb-4">
//               Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr
//               dolore et eos labore, stet justo sed est sed. Diam sed sed dolor
//               stet accusam amet eirmod eos, labore diam clita
//             </h4>
//             <div className="d-flex align-items-center">
//               <img
//                 className="img-fluid"
//                 // src="img/testimonial-2.jpg"
//                 style={{ width: "60px", height: "60px" }}
//               />
//               <div className="pl-3">
//                 <h5 className="text-primary m-0">Client Name</h5>
//                 <i>Profession</i>
//               </div>
//             </div>
//           </div>
//           <div className="text-left">
//             <i className="fa fa-3x fa-quote-left text-primary mb-4" />
//             <h4 className="text-body mb-4">
//               Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr
//               dolore et eos labore, stet justo sed est sed. Diam sed sed dolor
//               stet accusam amet eirmod eos, labore diam clita
//             </h4>
//             <div className="d-flex align-items-center">
//               <img
//                 className="img-fluid"
//                 // src="img/testimonial-3.jpg"
//                 style={{ width: "60px", height: "60px" }}
//               />
//               <div className="pl-3">
//                 <h5 className="text-primary m-0">Client Name</h5>
//                 <i>Profession</i>
//               </div>
//             </div>
//           </div>
//           {/* </div> */}
//           {/* </OwlCarousel> */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Testimonial;

// import { useState, useEffect } from "react";
// import "./Testimonial.css"; // Import your CSS file
// import Testimonial1 from "../assets/testimonial-1.jpg";
// import Testimonial2 from "../assets/testimonial-2.jpg";
// import Testimonial3 from "../assets/testimonial-3.jpg";

// const testimonials = [
//   {
//     text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore.",
//     name: "Client Name 1",
//     profession: "Profession 1",
//     imgSrc: Testimonial1, // Update with the actual image path
//   },
//   {
//     text: "Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam.",
//     name: "Client Name 2",
//     profession: "Profession 2",
//     imgSrc: Testimonial2, // Update with the actual image path
//   },
//   {
//     text: "Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed.",
//     name: "Client Name 3",
//     profession: "Profession 3",
//     imgSrc: Testimonial3, // Update with the actual image path
//   },
// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="carousel-container">
//       {testimonials.map((testimonial, index) => (
//         <div
//           key={index}
//           className={`carousel-item ${
//             index === currentIndex ? "active" : "inactive"
//           }`}
//         >
//           <i className="fa fa-3x fa-quote-left text-primary mb-4" />
//           <h4 className="text-body mb-4">{testimonial.text}</h4>
//           <div className="d-flex align-items-center">
//             <img
//               className="img-fluid rounded-circle"
//               src={testimonial.imgSrc}
//               // src={Testimonial1}
//               alt={testimonial.name}
//               style={{ width: "60px", height: "60px" }}
//             />
//             <div className="pl-3">
//               <h5 className="text-primary m-0">{testimonial.name}</h5>
//               <i>{testimonial.profession}</i>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Testimonial;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import client1 from "../assets/testimonial-1.jpg";
// import client2 from "../assets/testimonial-2.jpg";
// import client3 from "../assets/testimonial-3.jpg";

// const testimonials = [
//   {
//     text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore.",
//     name: "Client Name 1",
//     profession: "Profession 1",
//     imgSrc: client1,
//   },
//   {
//     text: "Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam.",
//     name: "Client Name 2",
//     profession: "Profession 2",
//     imgSrc: client2,
//   },
//   {
//     text: "Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed.",
//     name: "Client Name 3",
//     profession: "Profession 3",
//     imgSrc: client3,
//   },
// ];

// const TestimonialCarousel = () => {
//   const settings = {
//     autoplay: true,
//     autoplaySpeed: 5000,
//     dots: true,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="container bg-white py-5">
//       <div className="row px-3">
//         <div className="col-12">
//           <h2 className="title position-relative pb-2 mb-4">Testimonial</h2>
//         </div>
//         <div className="col-12">
//           <Slider {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="text-left">
//                 <i className="fa fa-3x fa-quote-left text-primary mb-4" />
//                 <h4 className="text-body mb-4">{testimonial.text}</h4>
//                 <div className="d-flex align-items-center">
//                   <img
//                     className="img-fluid rounded-circle"
//                     src={testimonial.imgSrc}
//                     alt={testimonial.name}
//                     style={{ width: "60px", height: "60px" }}
//                   />
//                   <div className="pl-3">
//                     <h5 className="text-primary m-0">{testimonial.name}</h5>
//                     <i>{testimonial.profession}</i>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/testimonial-1.jpg";
import client2 from "../assets/testimonial-2.jpg";
import client3 from "../assets/testimonial-3.jpg";
import "./Testimonial.css"; // Ensure to import your custom CSS file

const testimonials = [
  {
    text: `As a travel agency managing multiple corporate
     clients, efficiency and reliability are paramount for
     our business. The Airline Ticket Management System has
     been a game-changer for us. It seamlessly integrates
     with our existing workflows, allowing us to manage
     large volumes of bookings, changes, and cancellations
     with ease. The system’s B2B features, such as bulk
     booking and detailed client management, have
     significantly streamlined our operations.`,
    name: "Mr Mustafizur",
    profession: "Director of Flyutravels",
    imgSrc: client1,
  },
  {
    text: `I couldn’t be happier with the single page static 
    website that was created for my business. The design is 
    clean, modern, and perfectly captures the essence of my 
    brand. Despite being a simple, single-page layout, the 
    website is incredibly effective at conveying all the 
    important information without overwhelming visitors. 
    The loading speed is impressively fast, which has 
    improved the user experience and kept visitors engaged
    longer.`,
    name: "Mr Hussain",
    profession: "Angel Investor, Owner of EduConnect",
    imgSrc: client2,
  },
  {
    text: `I recently used their video editing service for
    a promotional campaign, and the results were beyond my
    expectations. The team took my raw footage and transformed it into a stunning, professional video that perfectly captured the message I wanted to convey. The attention to detail was incredible, from the seamless transitions to the perfect timing of the music and visuals.`,
    name: "Mr Hennry",
    profession: "Manager",
    imgSrc: client3,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Testimonial</h2>
        </div>
        <div className="col-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-left">
                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                <h4 className="text-body mb-4">{testimonial.text}</h4>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="pl-3">
                    <h5 className="text-primary m-0">{testimonial.name}</h5>
                    <i>{testimonial.profession}</i>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
