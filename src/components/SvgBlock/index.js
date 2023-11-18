import React from "react";
import styled from "styled-components";
import tryed from '../../assets/try.svg'
import tryed1 from '../../assets/trysquare.svg'
import tryed2 from '../../assets/tri.svg'

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

export const SvgBlock = ({ svg }) => {
   const SvgIcon = `../../assets/${svg}`;
  console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img src={tryed} alt="Services" />
    </Rb>
  );
};
export const SvgBlock1 = ({ svg }) => {
   const SvgIcon = `../../assets/${svg}`;
  console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img src={tryed1} alt="Services" />
    </Rb>
  );
};
export const SvgBlock2 = ({ svg }) => {
   const SvgIcon = `../../assets/${svg}`;
  console.log(SvgIcon);
  return (
    <Rb id="svgBlock">
      <img src={tryed2} alt="Services" />
    </Rb>
  );
};

