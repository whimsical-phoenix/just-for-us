// // Home.js
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ContactsIcon,
//   HealthIcon,
//   TvIcon,
//   ServicesIcon,
//   SettingsIcon,
//   ScheduleIcon,
//   ShortcutIcon,
//   GardenLoftIcon,
// } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import LocationIndicator from "../components/LocationIndicator";
// import BroadcastIcon from "../components/icons/BroadcastIcon";

// export const HomeContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   min-height: 100vh;
//   text-align: center;

//   div.slick-slide.slick-active.slick-center.slick-current {
//     .profile-card-div {
//       background: #f3b717;
//       transform: scale(1.2);
//       transition: transform 0.5s ease;
//       padding: 20px;
//     }
//     .icon-container {
//       svg {
//         fill: #e9ebf8;
//       }
//     }
//   }
// `;

// export const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2000px; /* Adjust the max-width as needed */
//   justify-content: space-around;

//   .slick-dots li {
//     margin: 0 15px;
//     button:before {
//       font-size: 35px;
//       position: absolute;
//       top: 0;
//       left: 0;
//       text-align: center;
//       color: #e8e8e4;
//       opacity: 1;
//       margin-top: 30px;
//     }
//   }

//   li.slick-active button:before {
//     opacity: 1;
//     color: #7f8181;
//   }
// `;

// export const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `;

// const CustomArrowButton = styled.div`
//   width: 80px;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 1;

//   &:active {
//     transform: translateY(-50%), scale(0.95); // Add a scaling effect for the pressed state
//     box-shadow: 0 0 0; // Remove box shadow for a pressed effect
//   }
// `;

// const StyledProfileCard = styled(ProfileCard)`
//   // Add any additional styles here
// `;

// export const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// export const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// const Home = () => {
//   const cardData = [
//     // {
//     //   link: "/garden-loft-app/shortcuts",
//     //   icon: <ShortcutIcon />,
//     //   title: "shortcuts",
//     // },

//     {
//       link: "/garden-loft-app/entertainment",
//       icon: <TvIcon />,
//       title: "entertainment",
//     },
//     { icon: <ScheduleIcon />, title: "activity" },
//     {
//       link: "/garden-loft-app/services",
//       icon: <ServicesIcon />,
//       title: "services",
//     },
//     { icon: <ContactsIcon />, title: "my contacts" },
//     // { icon: <HealthIcon />, title: "my health" },
//     // { icon: <SettingsIcon />, title: "settings" },
//     {
//       link: "/garden-loft-app/smart-loft",
//       icon: <BroadcastIcon />,
//       title: "loft controls",
//     },
//     // Add more cards here
//   ];

//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//   };

//   const sliderRef = React.createRef();
//   const [disableHover, setDisableHover] = useState(false);

//   return (
//     <>
//       {/* <GardenLoftIcon /> */}
//       <HomeContainer disableHover={disableHover}>
//         <CarouselWrapper>
//           <Slider ref={sliderRef} {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   link={card.link}
//                   icon={card.icon}
//                   backgroundColor={card.backgroundColor}
//                   disableHover={true}
//                 />
//                 <div className="profile-card-title">{card.title}</div>
//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </HomeContainer>
//       {/* <LocationIndicator currentPage={"home"} /> */}
//       <CallHelpButtonComponent />
//     </>
//   );
// };

// export default Home;

// Home.js
// Home.js
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ContactsIcon,
//   // HealthIcon,
//   TvIcon,
//   ServicesIcon,
//   // SettingsIcon,
//   ScheduleIcon,
//   // ShortcutIcon,
//   // GardenLoftIcon,
// } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import BroadcastIcon from "../components/icons/BroadcastIcon";
// import Contacts from "../components/Contacts";

// export const HomeContainer = styled.div`
//   position: relative;
//   top: 150px; /* Adjust the top value to position it below the "Call Help" button */
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 50vh; /* Adjust to ensure it takes the remaining height */
//   text-align: center;
// `;

// export const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2500px; /* Adjust the max-width as needed */
//   justify-content: center;
// `;

// export const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }
// `;

// const CustomArrowButton = styled.div`
//   width: 80px;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 1;

//   &:active {
//     transform: translateY(-50%), scale(0.95);
//   }
// `;

// const StyledProfileCard = styled(ProfileCard)`
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
//   display: flex;
//   color: black;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }

//   &.slick-center {
//     transform: scale(1.5); // Adjust the scale as needed for the center card
//     background: yellow; // Adjust the color as needed for the center card
//   }
// `;

// export const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// export const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// // const Home = () => {
// //   const cardData = [
// //     {
// //       link: "/garden-loft-app/entertainment",
// //       icon: <TvIcon />,
// //       title: "TV",
// //     },
// //     { icon: <ScheduleIcon />, title: "ACTIVITIES" },
// //     {
// //       link: "/garden-loft-app/services",
// //       icon: <ServicesIcon />,
// //       title: "ENTERTAINMENT",
// //     },
// //     { icon: <ContactsIcon />, title: "VIDEO CALL" },
// //     {
// //       link: "/garden-loft-app/smart-loft",
// //       icon: <BroadcastIcon />,
// //       title: "LIGHTS",
// //     },
// //     {
// //       link: "/garden-loft-app/services",
// //       icon: <ServicesIcon />,
// //       title: "SETTINGS",
// //     },
// //   ];

// //   const settings = {
// //     centerMode: true,
// //     centerPadding: "0",
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 5,
// //     slidesToScroll: 1,
// //     dots: true,
// //     nextArrow: <CustomNextArrow data-clickable="true" />,
// //     prevArrow: <CustomPrevArrow data-clickable="true" />,
// //   };

// //   const sliderRef = React.createRef();
// //   const [disableHover] = useState(false);

// //   return (
// //     <>
// //       {/* <GardenLoftIcon /> */}
// //       <HomeContainer disableHover={disableHover}>
// //         <CarouselWrapper>
// //           <CustomNextArrow />
// //           <CustomPrevArrow />
// //           <Slider ref={sliderRef} {...settings}>
// //             {cardData.map((card, index) => (
// //               <CardColumn key={index}>
// //                 <StyledProfileCard
// //                   link={card.link}
// //                   icon={card.icon}
// //                   backgroundColor={card.backgroundColor}
// //                   title={card.title} // Pass the title to the ProfileCard component
// //                   textBelowCard={card.textBelowCard} // Pass the text below the card
// //                 />
// //               </CardColumn>
// //             ))}
// //           </Slider>
// //         </CarouselWrapper>
// //       </HomeContainer>
// //       {/* <LocationIndicator currentPage={"home"} /> */}
// //       <CallHelpButtonComponent />
// //       <Contacts />
// //     </>
// //   );
// // };

// // export default Home;

// const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: true,
//     nextArrow: <CustomNextArrow data-clickable="true" />,
//     prevArrow: <CustomPrevArrow data-clickable="true" />,
//     afterChange: (current) => setCurrentIndex(current),
//   };

//   return (
//     <>
//       <HomeContainer>
//         <CarouselWrapper>
//           <CustomNextArrow />
//           <CustomPrevArrow />
//           <Slider {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   icon={card.icon}
//                   title={card.title}
//                   textBelowCard={card.textBelowCard}
//                   className={`${index === currentIndex ? "slick-center" : ""}`}
//                 />
//                 {index === currentIndex && (
//                   <TextBelowCard>{card.textBelowCard}</TextBelowCard>
//                 )}
//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//       </HomeContainer>
//       <CallHelpButtonComponent />
//       <Contacts />
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { ChevronLeftIcon, ChevronRightIcon, TvIcon } from "../components/icons";
import CallHelpButtonComponent from "../components/CallHelpButton";
import Contacts from "../components/Contacts";
import { GiFilmSpool } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
// import { GrYoga } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineSportsMartialArts } from "react-icons/md";

const HomeContainer = styled.div`
  position: relative;
  top: 150px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  margin: 0 auto;
  max-width: 2500px;
  justify-content: center;
  display: block;
`;

const CardColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
`;

const CustomArrowButton = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:active {
    transform: translateY(-50%), scale(0.95);
  }
`;

const StyledProfileCard = styled(ProfileCard)`
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
  display: flex;
  color: black;

  &:hover {
    transform: scale(1.1);
    .icon-container {
      svg {
        fill: black;
      }
    }
  }

  &.slick-center {
    transform: scale(1.5);
    background: yellow;
    .icon-container {
      svg {
        fill: #000; /* Change the icon color for the center card */
      }
    }
  }
`;

const CustomNextArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
    <ChevronRightIcon />
  </CustomArrowButton>
);

const CustomPrevArrow = ({ onClick }) => (
  <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
    <ChevronLeftIcon />
  </CustomArrowButton>
);

const TextBelowCard = styled.h1`
  margin: 10px;
  font-size: 46px;
  color: #2e3e5e;
  position: initial;
  display: flex;
`;

const cardData = [
  {
    link: "/garden-loft-app/entertainment",
    icon: <TvIcon />,
    title: "TV",
    textBelowCard: "Watch TV?",
  },
  {
    icon: <MdOutlineSportsMartialArts size={150} />,
    title: "ACTIVITIES",
    textBelowCard: "Join an Activity?",
  },
  {
    link: "/garden-loft-app/services",
    icon: <GiFilmSpool size={150} />,
    title: "ENTERTAINMENT",
    textBelowCard: "Watch Entertainment?",
  },
  {
    link: "/garden-loft-app/services",
    icon: <IoSettings size={150} />,
    title: "SETTINGS",
    textBelowCard: "Change Settings?",
  },
  {
    icon: <FaPhoneAlt size={150} />,
    title: "VIDEO CALL",
    textBelowCard: "Make a Video Call?",
    page: <Contacts />,
  },
  {
    link: "/garden-loft-app/smart-loft",
    icon: <FaLightbulb size={150} />,
    title: "LIGHTS",
    textBelowCard: "Change Lights?",
  },
];

const Home = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // dots: true,
    nextArrow: <CustomNextArrow data-clickable="true" />,
    prevArrow: <CustomPrevArrow data-clickable="true" />,
    beforeChange: (current, next) => {
      // Disable hover effect for all cards
      setDisableHover(true);
    },
    afterChange: (current) => {
      // Enable hover effect for the center card
      setDisableHover(false);
      // Update the index of the center card
      setCenterCardIndex(current);
    },
  };

  const [disableHover, setDisableHover] = useState(false);
  const [centerCardIndex, setCenterCardIndex] = useState(0);

  return (
    <>
      <HomeContainer disableHover={disableHover}>
        <CarouselWrapper>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <CardColumn key={index}>
                <StyledProfileCard
                  display={"block"}
                  link={card.link}
                  icon={card.icon}
                  title={card.title}
                  active={index === centerCardIndex}
                />
                {index === centerCardIndex && (
                  <TextBelowCard>{card.textBelowCard}</TextBelowCard>
                )}
              </CardColumn>
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
      {centerCardIndex === 4 && <Contacts />}
      <CallHelpButtonComponent />
    </>
  );
};

export default Home;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
// import ProfileCard from "../components/ProfileCard/ProfileCard";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ContactsIcon,
//   TvIcon,
//   ServicesIcon,
//   ScheduleIcon,
// } from "../components/icons";
// import CallHelpButtonComponent from "../components/CallHelpButton";
// import Contacts from "../components/Contacts";

// const HomeContainer = styled.div`
//   position: relative;
//   top: 150px;
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   min-height: 50vh;
//   text-align: center;
// `;

// const CarouselWrapper = styled.div`
//   margin: 0 auto;
//   max-width: 2500px;
//   justify-content: center;
// `;

// const CardColumn = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
// `;

// const CustomArrowButton = styled.div`
//   width: 80px;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 1;

//   &:active {
//     transform: translateY(-50%), scale(0.95);
//   }
// `;

// const StyledProfileCard = styled(ProfileCard)`
//   transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
//   display: flex;
//   color: black;

//   &:hover {
//     transform: scale(1.1);
//     .icon-container {
//       svg {
//         fill: black;
//       }
//     }
//   }

//   &.slick-center {
//     transform: scale(1.5);
//     background: yellow;
//     .icon-container {
//       svg {
//         fill: #000; /* Change the icon color for the center card */
//       }
//     }
//   }
// `;

// const CustomNextArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ right: -100 }}>
//     <ChevronRightIcon />
//   </CustomArrowButton>
// );

// const CustomPrevArrow = ({ onClick }) => (
//   <CustomArrowButton onClick={onClick} style={{ left: -100 }}>
//     <ChevronLeftIcon />
//   </CustomArrowButton>
// );

// const TextBelowCard = styled.h1`
//   margin: 10px;
//   font-size: 46px;
//   color: #2e3e5e;
//   position: initial;

//   display: flex;
// `;

// const CallHelpButtonContainer = styled.div`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   margin: 20px;
// `;

// const Home = () => {
//   const settings = {
//     centerMode: true,
//     centerPadding: "0",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: true,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     beforeChange: (current, next) => {
//       setDisableHover(true);
//     },
//     afterChange: (current) => {
//       setDisableHover(false);
//       setCenterCardIndex(current);
//     },
//   };

//   const [disableHover, setDisableHover] = useState(false);
//   const [centerCardIndex, setCenterCardIndex] = useState(0);

//   const cardData = [
//     {
//       link: "/garden-loft-app/entertainment",
//       icon: <TvIcon />,
//       title: "TV",
//       textBelowCard: "Watch TV?",
//     },
//     {
//       icon: <ScheduleIcon />,
//       title: "ACTIVITIES",
//       textBelowCard: "Join an Activity?",
//     },
//     {
//       link: "/garden-loft-app/services",
//       icon: <ServicesIcon />,
//       title: "ENTERTAINMENT",
//       textBelowCard: "Watch Entertainment?",
//     },
//     {
//       link: "/garden-loft-app/services",
//       icon: <ServicesIcon />,
//       title: "SETTINGS",
//       textBelowCard: "Change Settings?",
//     },
//     {
//       icon: <ContactsIcon />,
//       title: "VIDEO CALL",
//       textBelowCard: "Make a Video Call?",
//     },
//     {
//       link: "/garden-loft-app/smart-loft",
//       icon: <ContactsIcon />,
//       title: "LIGHTS",
//       textBelowCard: "Change Lights?",
//     },
//   ];

//   return (
//     <>
//       <HomeContainer disableHover={disableHover}>
//         <CarouselWrapper>
//           <Slider {...settings}>
//             {cardData.map((card, index) => (
//               <CardColumn key={index}>
//                 <StyledProfileCard
//                   link={card.link}
//                   icon={card.icon}
//                   title={card.title}
//                   textBelowCard={card.textBelowCard}
//                   active={index === centerCardIndex}
//                   disableHover={disableHover}
//                 />
//                 {index === centerCardIndex && card.title === "VIDEO CALL" && (
//                   <Contacts />
//                 )}
//                 {index === centerCardIndex && (
//                   <TextBelowCard>{card.textBelowCard}</TextBelowCard>
//                 )}
//               </CardColumn>
//             ))}
//           </Slider>
//         </CarouselWrapper>
//         <CallHelpButtonContainer>
//           <CallHelpButtonComponent />
//         </CallHelpButtonContainer>
//       </HomeContainer>
//     </>
//   );
// };

// export default Home;
