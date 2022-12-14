import React, { useEffect, useCallback, useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";

import ProductCard from "../Cards/ProductCard";

import HeadsetImg from "../../../../../Assets/LearnKraftCarosel1.svg";
import LaptopImg from "../../image/2.png";
import PhoneImg from "../../image/3.png";
import { Image } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const defaultCardItems = [
  <Image key={"child1"} src={HeadsetImg} />,
  <Image key={"child2"} src={LaptopImg} />,
  <Image key={"child3"} src={PhoneImg} />,
];

const details = [
  {
    title: "Cutting EDGE",
    sub: "We offer highly advanced solution to implement our client's ideas that require innovative technology such as proximity sensors, pressure sensors, augmented reality and some others.",
  },
  {
    title: "Mobile apps",
    sub: "We develop amazing iOS and Android apps, every app we work on is visual stunning, easy to use and can be utilized by a broad range of audiences.",
  },
  {
    title: "Web development",
    sub: "We build first-rate web application and portals with complex and rich functionality that can cope with heavy loads adquately.",
  },
];
const cardDetails = [
  {
    ArtName: "Cutting EDGE",
    price: "1.9 ETH",
    likes: "31",
    heart: false,
  },
  {
    ArtName: "Cutting EDGE",
    price: "1.3 ETH",
    likes: "38",
    heart: true,
  },
  {
    ArtName: "Cutting EDGE",
    price: "1.1 ETH",
    likes: "11",
    heart: false,
  },
];

const setCardStatus = (indexes, cardIndex) => {
  if (indexes.currentIndex === cardIndex) {
    return styles.active;
  } else if (indexes.nextIndex === cardIndex) {
    return styles.next;
  } else if (indexes.previousIndex === cardIndex) {
    return styles.prev;
  }
  return styles.inactive;
};

const CardWrapper = ({
  style,
  onCardChange,
  containerClassName,
  cardClassName,
  leftButton,
  rightButton,
  autoRotate = true,
  rotationInterval = 6000,
  children,
}) => {
  const cardItems = children || defaultCardItems;
  const [indexes, setIndexes] = useState({
    previousIndex: cardItems.length - 1,
    currentIndex: 0,
    nextIndex: 1,
  });

  const classes = useStyles();

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  const handleLeftButton = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex <= 0) {
      setIndexes({
        previousIndex: cardItems.length - 2,
        currentIndex: cardItems.length - 1,
        nextIndex: 0,
      });
    } else {
      setIndexes((prevState) => ({
        nextIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1,
        previousIndex:
          prevState.currentIndex - 1 <= 0
            ? cardItems.length - 1
            : prevState.currentIndex - 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    onCardChange && onCardChange(indexes);
    const transitionInterval = setInterval(() => {
      autoRotate && handleCardTransition();
    }, rotationInterval);
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, autoRotate]);

  return (
    <div className={`${styles.container} ${classes.container}`}>
      {leftButton ? (
        <span
          style={{ display: "flex", alignSelf: "baseline" }}
          onClick={handleLeftButton}
        >
          {leftButton}
        </span>
      ) : (
        <span
          style={{ display: "flex", alignSelf: "baseline" }}
          className="btn"
          onClick={handleLeftButton}
        >
          <ArrowBack style={{ fontSize: 20 }} />
        </span>
      )}
      <ul
        style={{ ...style }}
        className={`${styles.cardCarousel} ${
          containerClassName ? containerClassName : styles.carouselDefault
        }`}
      >
        <li
          key="child1"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 0)}`}
        >
          <Image key={"child1"} src={HeadsetImg} />,
        </li>
        <li
          key="child2"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 1)}`}
        >
          <Image key={"child2"} src={HeadsetImg} />,
        </li>
        <li
          key="child3"
          className={`${cardClassName ? cardClassName : ""} ${
            styles.card
          } ${setCardStatus(indexes, 2)}`}
        >
          <Image key={"child3"} src={HeadsetImg} />,
        </li>
      </ul>
      {rightButton ? (
        <span
          style={{ display: "flex", alignSelf: "baseline" }}
          onClick={handleCardTransition}
        >
          {rightButton}
        </span>
      ) : (
        <span
          style={{ display: "flex", alignSelf: "baseline" }}
          className="btn"
          onClick={handleCardTransition}
        >
          <ArrowForward style={{ fontSize: 20 }} />
        </span>
      )}
    </div>
  );
};

export default CardWrapper;
