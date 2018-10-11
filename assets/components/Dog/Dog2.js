import React from 'react';
import { Dog2Styled } from './dog2Style';

const Dog2 = ({dogVisible}) => {
  return (
    <Dog2Styled className={dogVisible ? 'dogVisible' : 'd-none'}>
      <div className="body">
        <div className="ears" />
        <div className="eyebrows">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="eyes">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="nose" />
        <div className="mouth" />
        <div className="whiskers">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="tongue" />
        <div className="bandana">
          <div className="top" />
          <div className="bottom" />
        </div>
        <div className="stomach" />
      </div>
      <div className="legs">
        <div className="lfront" />
        <div className="lback" />
        <div className="rfront" />
        <div className="rback" />
      </div>
      <div className="tail" />
    </Dog2Styled>
  );
};

export default Dog2;
