import React, { useRef, useEffect, useMemo } from "react";
import "./card.css";

export default function Card() {
  const cardData = useMemo(() => ([
    {
      title: "🌟 360-Degree Digital Presence",
      description: "We don't just create product solutions; we curate digital realms. Qubic ensures your brand's presence is not just seen but experienced across every digital touchpoint."
    },
    {
      title: "🌟 Luxurious Strategies",
      description: "We believe in the art of exclusivity, making your digital presence not just accessible but aspirational."
    },
    {
      title: "🌟 Slogan that Speaks",
      description: `Our motto, "If We Didn't Build It, Then Question It," reflects our commitment to perfection. We challenge the status quo, questioning the ordinary to create the extraordinary.`,
    },
  ]), []);

  const titleRefs = useRef([]);
  const descRefs = useRef([]);

  useEffect(() => {
    titleRefs.current = titleRefs.current.slice(0, cardData.length);
    descRefs.current = descRefs.current.slice(0, cardData.length);
}, [cardData.length]);

  function handleMouseEnter(index) {
    const title = titleRefs.current[index];
    const desc = descRefs.current[index];

    title.style.transform = "translateZ(150px)";
    desc.style.transform = "translateZ(75px)";
  }

  function handleMouseLeave(index) {
    const title = titleRefs.current[index];

    title.style.transform = "translateZ(0px)";
  }

  return (
    <>
    <h2 className="card_hi">Why Choose Us</h2>
      <section className="cardo">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="card"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <h1 className="title" ref={(el) => (titleRefs.current[index] = el)}>
            {data.title}
          </h1>
          <p ref={(el) => (descRefs.current[index] = el)}>{data.description}</p>
        </div>
      ))}
      </section>
    </>
  );
}
