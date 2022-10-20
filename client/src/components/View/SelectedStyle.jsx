import React, { useState, useEffect } from 'react';
import {RoundImage, ImageContainer, StyleDiv} from './Styled/SelectedStyleImage.styled.jsx';
import {FaCheckCircle} from 'react-icons/fa';


const SelectedStyle = ( {otherStyles, productId, changeDisplayedStyle, currentDisplayedStyle} ) => {

  return (
    <StyleDiv>
      {
        otherStyles.map((style, index) => {

          let imgSrc = style.photos[0].thumbnail_url;
          if (imgSrc === null) {
            return <></>;
          } else {
            return <ImageContainer><RoundImage key = {index} img={imgSrc} onClick ={(event) => {
              changeDisplayedStyle(index);
            }} >{currentDisplayedStyle.style_id === style.style_id && <FaCheckCircle style={{color: 'red'}}/>}</RoundImage>{style.name} </ImageContainer>;
          }
        })
      }
    </StyleDiv>
  );
};

export default SelectedStyle;
