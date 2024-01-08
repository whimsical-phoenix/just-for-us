import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown
} from "react-icons/io";
import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import "./lights.css";

const contactList = [
  {
    id: 1,
    name: "LIVING ROOM LIGHTS",
    pathway: "/home",
    call: "Turn lights on?",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "KITCHEN LIGHTS",
    pathway: "/iotControls",
    call: "Turn lights on?",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 3,
    name: "BATHROOM LIGHTS",
    pathway: "/entertainment",
    call: "Turn lights off?",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
  {
    id: 4,
    name: "BATHROOM LIGHTS",
    pathway: "/calendar",
    call: "Turn lights off?",
    icon: <BsLightbulbFill size={230} className="nav-icon" />,
  },
];

function Lights() {
  const [cardIndex, setCardIndex] = useState(0);
  // handle Help Button
  // const handleHelpClick = () => {
  //   const phoneNumber = "+1234556778";
  //   const userChoice = window.confirm("Do you want to call or send an SMS?");

  //   if (userChoice) {
  //     window.location.href = `tel:${phoneNumber}`;
  //   } else {
  //     window.location.href = `sms:${phoneNumber}`;
  //   }
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.location.href = telUrl;
  // };
  //   const userChoice = window.confirm('Do you want to call or send an SMS?');

  // if (userChoice) {
  //   window.location.href = `tel:${phoneNumber}`;
  // } else {
  //   window.location.href = `sms:${phoneNumber}`;
  // }
  //   const telUrl = `tel:${phoneNumber}`;
  //   window.location.href = telUrl;
  // };

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

  // Makes lights turn yellow
  const [isYellow, setIsYellow] = useState(false);
  const toggleColor = () => {
    setIsYellow((prevIsYellow) => !prevIsYellow);
  };

  return (
    <>
      <div id="contacts" className="settings">
        <Link to="/" className="linkStyle">
          <div className="up-arrow">
            <IoIosArrowUp size={100} className="arrow-up" />
          </div>
          <div className="down-arrow">
            <IoIosArrowDown size={100} className="arrow-down" />
          </div>
        </Link>
        <div className="slider-call-1">
          <div className="slider">
            <Slider className="linkStyle" {...slidesSettings}>
              {contactList.map((card, idx) => (
                <div
                  key={card.id}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                  {/* {card.icon} */}
                  {isYellow ? (
                    <BsLightbulbFill
                      size={230}
                      color="yellow"
                      onClick={toggleColor}
                    />
                  ) : (
                    <BsLightbulb
                      size={230}
                      color="white"
                      onClick={toggleColor}
                    />
                  )}
                  <h1 className="card-name">{card.name}</h1>
                </div>
              ))}
            </Slider>
          </div>
          <div className="prompt">
            <h1>{contactList[currentIndex].call}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lights;
