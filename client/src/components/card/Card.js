import React from "react";
import styles from "./Card.module.css";
import codeimage from "../../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import bookimg from "../../assets/dariusz-sankowski-ABAmxzlot8E-unsplash.jpg";
import computerimg from "../../assets/domenico-loia-EhTcC9sYXsw-unsplash.jpg";
import technologiimg from "../../assets/robynne-hu-HOrhCnQsxnQ-unsplash.jpg";

function Card() {
  const data = [
    {
      id: 1,
      img: codeimage,
      titel: "Technology Consulting",
      description:
        "This business model is based on consultancy when a client reaches out to us for setting up the development process, selecting technology, conducting audits and other assistance.",
    },
    {
      id: 2,
      img: computerimg,
      titel: "Time & Materials",
      description:
        "The most popular business model for mid-sized projects. It's based on Agile flexible methodologies such as Scrum or Kanban. All development tasks are dividing into 1 or 2 week long sprints with regular sessions to set tasks and review them at the end of each sprint.",
    },
    {
      id: 3,
      img: bookimg,
      titel: "24/7 Employment Law Advice",
      description:
        "Facing a looming legal crisis? Get unlimited calls to our UK-based employment law legal advice line and employment law resources to lead you safely through any workforce issue.",
    },
    {
      id: 4,
      img: technologiimg,
      titel: "Staff Augmentation / Dedicated Team",
      description:
        "In accordance with this business model, we build a team for the client e.g., we allocate the team in our office, provide them with a workplace, etc. But, the team is managed by the client directly. That's simply an analog of a remote office.",
    },
  ];

  return (
    <div className={styles.card_grid}>
      {data.map((Element) => (
        <div className={styles.card_container} key={Element.id}>
          <img src={Element.img} />
          <h4>{Element.titel}</h4>
          <p>{Element.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
