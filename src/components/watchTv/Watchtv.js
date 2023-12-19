import { useState } from "react";
import Slider from "react-slick";
import { FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../watchTv/Watchtv";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

const contactList = [
  {
    id: 1,
    name: "CBC News Network",
    pathway: "/home",
    icon: <FaTv size={230} className="nav-icon" />,
    URL: "https://www.cbc.ca/mediacentre/program/cbc-news-network" ,
  },
  {
    id: 2,
    name: "CTV News Channel",
    pathway: "/iotControls",
    icon: <FaTv size={230} className="nav-icon" />,
    URL: "https://calgary.ctvnews." ,
  },
  {
    id: 3,
    name: "GLOBAL",
    pathway: "/entertainment",
    icon: <FaTv size={230} className="nav-icon" />,
    URL: "https://globalnews.ca/",
  },
  {
    id: 4,
    name: "Citytv",
    pathway: "/calendar",
    icon: <FaTv size={230} className="nav-icon" />,
    URL: "https://www.citytv.com/" ,
  },
 
];

//Create a useState for cycling names through the prompt div on the bottom




function Watchtv() {

  const redirectToURL = (url) => {
    window.location.href = url; // Navigate to the specified URL in the same tab
  };
 
  // Arrow Functions
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <div onClick={() => nextContact()}>
          {" "}
          <IoIosArrowForward size={170} />
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <div onClick={() => prevContact()}>
          <IoIosArrowBack size={170} />
        </div>
      </div>
    );
  };
  //slides effect
  const slidesSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next),
  };

  // Use State to set prompt name under contact cards
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardIndex,setCardIndex] = useState();


  // Function to handle cycling through the array
  const nextContact = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contactList.length);
  };
  // Function to handle cycling through the array
  const prevContact = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contactList.length) % contactList.length
    );
  };

  return (
    <>
      <div id="contacts" className="settings">
        <Link to="/" className="linkStyle">
          <div className="up-arrow">
            <IoIosArrowUp size={90} className="arrow-up" />
          </div>
        </Link>
        <div className="slider-call-1">
          <div className="slider">
            <Slider className="linkStyle" {...slidesSettings}>
              {contactList.map((card, idx) => (
                 <a
                 key={card.id}
                 onClick={() => redirectToURL(card.URL)}
                 className="card-link"
               >
                <div
                    className={idx === cardIndex ? "slide activeSlide" : "slide"}
                  >
                    {card.icon}
                    <h1>{card.name}</h1>
                  </div>
                </a>
/*             
                // <a>
                //   key={card.id}
                //   className={idx === cardIndex ? "slide activeSlide" : "slide" }>
                //   {card.icon}
                //   href={card.link} </a>
                //   <h1>{card.name}</h1>
                // </div> */
              ))}
            </Slider>
          </div>
         
        </div>
      </div>
      </>
  );
}

export default Watchtv;
