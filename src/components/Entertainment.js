import { useState } from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown
} from "react-icons/io";
import "./entertainment.css";

const contactList = [
  {
    id: 1,
    name: "JEOPARDY",
    pathway: "/home",
    call: "Watch Jeopardy?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 2,
    name: "SURPRISE ME",
    pathway: "/iotControls",
    call: "Watch something random?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 3,
    name: "HOLLYWOOD SQUARES",
    pathway: "/entertainment",
    call: "Watch Hollywood Squares?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 4,
    name: "IRON CHEF",
    pathway: "/calendar",
    call: "Watch Iron Chef?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 5,
    name: "WHEEL OF FORTUNE",
    pathway: "/calendar",
    call: "Watch Wheel Of Fortune?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
  {
    id: 6,
    name: "GOLDEN GIRLS",
    pathway: "/calendar",
    call: "Watch Golden Girls?",
    icon: <FaUserAlt size={230} className="nav-icon" />,
  },
];

//Create a useState for cycling names through the prompt div on the bottom

// Custom hook for handling the modal
const useContactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openModal = (contact) => {
    setSelectedContact(contact);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return {
    modalIsOpen,
    selectedContact,
    openModal,
    closeModal,
  };
};

function Entertainment() {
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

  const { modalIsOpen, selectedContact, openModal, closeModal } =
    useContactModal();
  const [cardIndex, setCardIndex] = useState(0);
  //call using window
  const contactCall = () => {
    if (selectedContact) {
      const phoneNumber = "+1234556778";
      window.location.href = `tel:${phoneNumber}`;
      closeModal(); // Close the modal after initiating the call
    }
  };
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

  return (
    <>
      <div id="entertainment" className="settings">
        <Link to="/" className="linkStyle">
        <div className="arrow-container">
        <div className="up-arrow">
            <IoIosArrowUp size={100} className="arrow-up" />
          </div>
          <div className="down-arrow">
            <IoIosArrowDown size={100} className="arrow-down" />
          </div>
          </div>
        </Link>
        <div className="slider-call-1">
          <div className="slider">
            <Slider className="linkStyle" {...slidesSettings}>
              {contactList.map((card, idx) => (
                <div
                  key={card.id}
                  onClick={() => openModal(card)}
                  className={idx === cardIndex ? "slide activeSlide" : "slide"}>
                  {card.icon}
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

      {/* Pop Up Window to verify call */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Call Modal"
        className="custom-modal centered-modal">
        {selectedContact && (
          <div>
            <h2>{`Do you want to call ${selectedContact.name}?`}</h2>
            <button onClick={contactCall}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Entertainment;
