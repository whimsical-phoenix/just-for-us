import { useState, useEffect } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { GrYoga } from "react-icons/gr";
import { GiTeacher, GiRollingDices } from "react-icons/gi";

import "./activities.css";

const contactList = [
  {
    id: 1,
    name: "CHAIR YOGA 9:00AM TODAY",
    pathway: "/home",
    call: "JOIN NOW",
    icon: <GrYoga size={170} className="nav-icon" />,
  },
  {
    id: 2,
    name: "CHEESECAKE WITH COURTNEY 3:00PM TODAY",
    pathway: "/iotControls",
    call: "",
    icon: <GiTeacher size={170} className="nav-icon" />,
  },
  {
    id: 3,
    name: "SPOT THE DIFFERENCE 4:00PM TODAY ",
    pathway: "/entertainment",
    call: "",
    icon: <GiRollingDices size={170} className="nav-icon" />,
  },
  {
    id: 4,
    name: "TRAVEL STORY WITH JEN 5:00PM TODAY",
    pathway: "/calendar",
    call: "",
    icon: <GiTeacher size={170} className="nav-icon" />,
  },
  {
    id: 5,
    name: "FAMILY FEUD 6:00PM TODAY",
    pathway: "/calendar",
    call: "",
    icon: <GiRollingDices size={170} className="nav-icon" />,
  },
  {
    id: 6,
    name: "VIEW COMPLETED CLASSES",
    pathway: "/calendar",
    call: "",
    icon: "",
  },
];

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

const Activities = () => {
  const { modalIsOpen, selectedContact, openModal, closeModal } =
    useContactModal();
  const [cardIndex, setCardIndex] = useState(0);

  const contactCall = () => {
    if (selectedContact) {
      const phoneNumber = "+1234556778";
      window.location.href = `tel:${phoneNumber}`;
      closeModal();
    }
  };

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <div onClick={() => nextContact()}>
        {" "}
        <IoIosArrowForward size={170} />
      </div>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <div onClick={() => prevContact()}>
        <IoIosArrowBack size={170} />
      </div>
    </div>
  );

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextContact = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contactList.length);
  };

  const prevContact = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contactList.length) % contactList.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          prevContact();
          break;
        case "ArrowRight":
          nextContact();
          break;
        case "Enter":
          openModal(contactList[currentIndex]);
          break;
        default:
          break;
      }
    };

    // Add event listener for keyboard navigation
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cardIndex, modalIsOpen, currentIndex, openModal]);

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
};

export default Activities;
