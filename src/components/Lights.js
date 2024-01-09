import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
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

const Lights = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isYellow, setIsYellow] = useState(false);

  const toggleColor = () => {
    setIsYellow((prevIsYellow) => !prevIsYellow);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <div
          onClick={() =>
            setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length)
          }>
          <IoIosArrowForward size={170} />
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <div
          onClick={() =>
            setCardIndex(
              (prevIndex) =>
                (prevIndex - 1 + contactList.length) % contactList.length
            )
          }>
          <IoIosArrowBack size={170} />
        </div>
      </div>
    );
  };

  const slidesSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setCardIndex(
        (prevIndex) => (prevIndex - 1 + contactList.length) % contactList.length
      );
    } else if (event.key === "ArrowRight") {
      setCardIndex((prevIndex) => (prevIndex + 1) % contactList.length);
    } else if (event.key === "Enter") {
      // Handle the logic to toggle light on or off for the selected card
      console.log(
        "Toggle light for card:",
        contactList[selectedCardIndex].name
      );
    }
  };

  useEffect(() => {
    setSelectedCardIndex(cardIndex);
  }, [cardIndex]);

  return (
    <div
      id="contacts"
      className="settings"
      onKeyDown={handleKeyDown}
      tabIndex="0">
      <Link to="/" className="linkStyle">
        <div className="up-arrow">
          <IoIosArrowUp size={90} className="arrow-up" />
        </div>
        <div className="down-arrow">
          <IoIosArrowDown size={90} className="arrow-down" />
        </div>
      </Link>
      <div className="slider-call-1">
        <div className="slider">
          <Slider className="linkStyle" {...slidesSettings}>
            {contactList.map((card, idx) => (
              <div
                key={card.id}
                className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                {isYellow ? (
                  <BsLightbulbFill
                    size={230}
                    color="yellow"
                    onClick={toggleColor}
                  />
                ) : (
                  <BsLightbulb size={230} color="white" onClick={toggleColor} />
                )}
                <h1 className="card-name">{card.name}</h1>
              </div>
            ))}
          </Slider>
        </div>
        <div className="prompt">
          <h1>{contactList[cardIndex].call}</h1>
        </div>
      </div>
    </div>
  );
};

export default Lights;
