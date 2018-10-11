import styled from 'styled-components';

export const Dog1Styled = styled.div`
  transform: scale(0.5);
  position: absolute;
  z-index: -1;
  top: 15%;
  left: 8%;
  @keyframes head {
    0% {
      transform: rotate(0);
    }
    6.66667% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(-14deg);
    }
    40% {
      transform: rotate(-7deg);
    }
    46.66667% {
      transform: rotate(-14deg);
    }
    60% {
      transform: rotate(-7deg);
    }
    73.33333% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(0);
    }
  }

  @keyframes mouth {
    0% {
      transform: translateX(0);
    }
    6.66667% {
      transform: translateX(0);
    }
    13.33333% {
      transform: translateX(35%);
    }
    20% {
      transform: translateX(35%);
    }
    26.66667% {
      transform: translateX(35%);
    }
    33.33333% {
      transform: translateX(0) translateY(-5%);
    }
  }

  @keyframes nose {
    0% {
      transform: translate(0);
    }
    6.66667% {
      transform: translate(0);
    }
    13.33333% {
      transform: translateX(100%);
    }
    26.66667% {
      transform: translateX(100%);
    }
    33.33333% {
      transform: translateX(0) translateY(-15%);
    }
  }

  @keyframes body {
    0% {
      transform: translate(0);
    }
    6.66667% {
      transform: translateY(3%);
    }
    13.33333% {
      transform: translate(0);
    }
    20% {
      transform: translate(0);
    }
    26.66667% {
      transform: translateY(2%);
    }
    33.33333% {
      transform: translateY(0);
    }
  }

  @keyframes mane {
    0% {
      transform: translate(0);
    }
    6.66667% {
      transform: translateY(5%);
    }
    13.33333% {
      transform: translate(0);
    }
    20% {
      transform: translate(0);
    }
    26.66667% {
      transform: translateY(3%);
    }
    33.33333% {
      transform: translateY(0);
    }
  }

  @keyframes face {
    0% {
      transform: translate(0);
    }
    6.66667% {
      transform: translate(0);
    }
    13.33333% {
      transform: translateX(15%);
    }
    20% {
      transform: translateX(15%) translateY(0);
    }
    26.66667% {
      transform: translateX(15%) translateY(0);
    }
    33.33333% {
      transform: translateX(0) translateY(-15%);
    }
    40% {
      transform: translateX(0) translateY(-15%);
    }
    46.66667% {
      transform: translateX(0) translateY(0);
    }
  }

  @keyframes left-eye {
    2.66667% {
      transform: scaleY(1);
    }
    3.33333% {
      transform: scaleY(0.3);
    }
    4% {
      transform: scaleY(1);
    }
    6.66667% {
      transform: translateX(0);
    }
    9.33333% {
      transform: scaleY(1) translateX(75%);
    }
    10% {
      transform: scaleY(0.3) translateX(75%);
    }
    10.66667% {
      transform: scaleY(1) translateX(75%);
    }
    13.33333% {
      transform: translateX(150%);
    }
    22% {
      transform: scaleY(1) translateX(150%);
    }
    22.66667% {
      transform: scaleY(0.3) translateX(150%);
    }
    23.33333% {
      transform: scaleY(1) translateX(150%);
    }
    25.33333% {
      transform: scaleY(1) translateX(150%);
    }
    26% {
      transform: scaleY(0.3) translateX(150%);
    }
    26.66667% {
      transform: scaleY(1) translateX(150%);
    }
    33.33333% {
      transform: translateX(0) translateY(-170%);
    }
    36% {
      transform: scaleY(1) translateY(-170%);
    }
    36.66667% {
      transform: scaleY(0.3) translateY(-170%);
    }
    37.33333% {
      transform: scaleY(1) translateY(-170%);
    }
    38% {
      transform: scaleY(1) translateY(-170%);
    }
    38.66667% {
      transform: scaleY(0.3) translateY(-170%);
    }
    39.33333% {
      transform: scaleY(1) translateY(-170%);
    }
    53.33333% {
      transform: translateY(0);
    }
    65.33333% {
      transform: scaleY(1) translateY(0);
    }
    66% {
      transform: scaleY(0.3) translateY(0);
    }
    66.66667% {
      transform: scaleY(1) translateY(0);
    }
    70% {
      transform: scaleY(1) translateY(0);
    }
    70.66667% {
      transform: scaleY(0.3) translateY(0);
    }
    71.33333% {
      transform: scaleY(1) translateY(0);
    }
  }

  @keyframes right-eye {
    2.66667% {
      transform: scaleY(1);
    }
    3.33333% {
      transform: scaleY(0.3);
    }
    4% {
      transform: scaleY(1);
    }
    6.66667% {
      transform: translateX(0);
    }
    9.33333% {
      transform: scaleY(1) translateX(75%);
    }
    10% {
      transform: scaleY(0.3) translateX(75%);
    }
    10.66667% {
      transform: scaleY(1) translateX(75%);
    }
    13.33333% {
      transform: translateX(150%);
    }
    22% {
      transform: scaleY(1) translateX(150%);
    }
    22.66667% {
      transform: scaleY(0.3) translateX(150%);
    }
    23.33333% {
      transform: scaleY(1) translateX(150%);
    }
    25.33333% {
      transform: scaleY(1) translateX(150%);
    }
    26% {
      transform: scaleY(0.3) translateX(150%);
    }
    26.66667% {
      transform: scaleY(1) translateX(150%);
    }
    33.33333% {
      transform: translateX(0) translateY(-170%);
    }
    36% {
      transform: scaleY(1) translateY(-170%);
    }
    36.66667% {
      transform: scaleY(0.3) translateY(-170%);
    }
    37.33333% {
      transform: scaleY(1) translateY(-170%);
    }
    38% {
      transform: scaleY(1) translateY(-170%);
    }
    38.66667% {
      transform: scaleY(0.3) translateY(-170%);
    }
    39.33333% {
      transform: scaleY(1) translateY(-170%);
    }
    53.33333% {
      transform: translateY(0);
    }
    65.33333% {
      transform: scaleY(1) translateY(0);
    }
    66% {
      transform: scaleY(0.3) translateY(0);
    }
    66.66667% {
      transform: scaleY(1) translateY(0);
    }
    70% {
      transform: scaleY(1) translateY(0);
    }
    70.66667% {
      transform: scaleY(0.3) translateY(0);
    }
    71.33333% {
      transform: scaleY(1) translateY(0);
    }
  }

  @keyframes tongue {
    46.66667% {
      transform: translateY(0);
    }
    53.33333% {
      transform: translateY(100%) rotate(10deg);
    }
    73.33333% {
      transform: translateY(100%) rotate(10deg);
    }
    80% {
      transform: translateY(0);
    }
  }

  @keyframes mouth-cover-left {
    40% {
      transform: rotate(0);
    }
    60% {
      transform: rotate(90deg);
    }
    73.33333% {
      transform: rotate(90deg);
    }
    86.66667% {
      transform: rotate(0);
    }
  }

  @keyframes mouth-cover-right {
    40% {
      transform: rotate(0);
    }
    60% {
      transform: rotate(-90deg);
    }
    73.33333% {
      transform: rotate(-90deg);
    }
    86.66667% {
      transform: rotate(0);
    }
  }

  @keyframes tail {
    6.66667% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(30deg);
    }
    13.33333% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(0);
    }
    26.66667% {
      transform: rotate(30deg);
    }
    46.66667% {
      transform: rotate(30deg);
    }
    48.33333% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(28deg);
    }
    50.83333% {
      transform: rotate(0);
    }
    51.66667% {
      transform: rotate(28deg);
    }
    52.5% {
      transform: rotate(0);
    }
    53.33333% {
      transform: rotate(28deg);
    }
    54.16667% {
      transform: rotate(0);
    }
    55% {
      transform: rotate(28deg);
    }
    55.83333% {
      transform: rotate(0);
    }
    56.66667% {
      transform: rotate(28deg);
    }
    57.5% {
      transform: rotate(0);
    }
    58.33333% {
      transform: rotate(28deg);
    }
    59.16667% {
      transform: rotate(0);
    }
    60% {
      transform: rotate(28deg);
    }
    60.83333% {
      transform: rotate(0);
    }
    61.66667% {
      transform: rotate(28deg);
    }
    62.5% {
      transform: rotate(0);
    }
    63.33333% {
      transform: rotate(28deg);
    }
    64.16667% {
      transform: rotate(0);
    }
    65% {
      transform: rotate(28deg);
    }
    65.83333% {
      transform: rotate(0);
    }
    66.66667% {
      transform: rotate(28deg);
    }
    67.5% {
      transform: rotate(0);
    }
    68.33333% {
      transform: rotate(28deg);
    }
    69.16667% {
      transform: rotate(0);
    }
    70% {
      transform: rotate(28deg);
    }
    70.83333% {
      transform: rotate(0);
    }
    71.66667% {
      transform: rotate(28deg);
    }
    72.5% {
      transform: rotate(0);
    }
  }

  @keyframes left-ear {
    0% {
      transform: rotate(6deg);
    }
    6.66667% {
      transform: rotate(6deg);
    }
    13.33333% {
      transform: rotate(15deg);
    }
    26.66667% {
      transform: rotate(15deg);
    }
    33.33333% {
      transform: rotate(30deg);
    }
    40% {
      transform: rotate(30deg);
    }
    46.66667% {
      transform: rotate(0deg);
    }
    53.33333% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(15deg);
    }
    80% {
      transform: rotate(15deg);
    }
    93.33333% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotateZ(6deg);
    }
  }

  @keyframes right-ear {
    0% {
      transform: rotateZ(-16deg) rotateY(180deg);
    }
    6.66667% {
      transform: rotateZ(-16deg) rotateY(180deg);
    }
    13.33333% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    26.66667% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    33.33333% {
      transform: rotateZ(-30deg) rotateY(180deg);
    }
    36.66667% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    37.33333% {
      transform: rotateZ(-30deg) rotateY(180deg);
    }
    38% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    40% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    40.66667% {
      transform: rotateZ(-30deg) rotateY(180deg);
    }
    41.33333% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    46.66667% {
      transform: rotateZ(-9deg) rotateY(180deg);
    }
    53.33333% {
      transform: rotateZ(-9deg) rotateY(180deg);
    }
    60% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    60.66667% {
      transform: rotateZ(-30deg) rotateY(180deg);
    }
    61.33333% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    62.66667% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    63.33333% {
      transform: rotateZ(-30deg) rotateY(180deg);
    }
    64% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    80% {
      transform: rotateZ(-19deg) rotateY(180deg);
    }
    93.33333% {
      transform: rotateZ(-16deg) rotateY(180deg);
    }
    100% {
      transform: rotateZ(-16deg) rotateY(180deg);
    }
  }

  *,
  *:before,
  *:after {
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }

  .husky {
    animation: squiggly-anim 0.3s infinite;
    height: 60vmin;
    width: 84vmin;
  }

  @media screen and (max-width: 400px) {
    .husky {
      animation: none;
    }
  }

  .husky:before {
    width: 90%;
    height: 0.5vmin;
    background: #30508f;
    border-radius: 0.5vmin;
    top: 100%;
    left: 5%;
    z-index: 2;
  }

  .husky:after {
    width: 100%;
    height: 10%;
    top: calc(100% + 0.5vmin);
    z-index: 3;
    background: #4f8edb;
  }

  div:before,
  div:after {
    content: '';
    display: block;
    position: absolute;
  }

  .head {
    animation: head 12s none infinite;
    position: absolute;
    height: 45%;
    width: 58%;
    left: 34%;
    top: 5%;
    transform-origin: bottom center;
  }

  .head:before {
    background: #30508f;
    border-top-left-radius: 50% 40%;
    border-top-right-radius: 50% 40%;
    border-bottom-right-radius: 10% 60%;
    height: 100%;
    width: 100%;
  }

  .face {
    animation: face 12s none infinite;
    position: absolute;
    width: 98%;
    height: 62%;
    top: 15%;
    left: 2%;
  }

  .face:before {
    z-index: 1;
    width: 94%;
    height: 70%;
    left: 3%;
    background-color: white;
    bottom: 5%;
    border-top-left-radius: 40% 50%;
    border-top-right-radius: 40% 50%;
    border-bottom-left-radius: 30% 50%;
    border-bottom-right-radius: 30% 40%;
  }

  .eye {
    animation: eyes 12s none infinite;
    position: absolute;
    width: 30%;
    height: 40%;
    background-color: white;
    right: 45%;
    border-top-left-radius: 55% 50%;
    border-top-right-radius: 45% 50%;
    z-index: 2;
  }

  .eye:before {
    animation: left-eye 12s none infinite;
    height: 15%;
    width: 15%;
    border-radius: 100%;
    background: #343c60;
    top: 45%;
    left: 45%;
    transform-origin: center center;
  }

  .eye + .eye {
    z-index: 1;
    right: initial;
    left: 48%;
    border-top-right-radius: 55% 50%;
    border-top-left-radius: 45% 50%;
  }

  .nose {
    animation: nose 12s none infinite;
    z-index: 2;
    position: absolute;
    width: 20%;
    height: 20%;
    top: 29%;
    left: 42%;
  }

  .nose:after {
    background: #30508f;
    height: 100%;
    width: 100%;
    border-top-left-radius: 20% 20%;
    border-top-right-radius: 30% 20%;
    border-bottom-right-radius: 55% 80%;
    border-bottom-left-radius: 50% 80%;
  }

  .nose:before {
    height: 100%;
    width: 200%;
    background: white;
    top: 50%;
    left: -50%;
    z-index: -1;
    border-radius: 50%;
  }

  .ear {
    animation: left-ear 12s both infinite;
    position: absolute;
    top: 3%;
    left: -10%;
    width: 48%;
    height: 30%;
    border-bottom-left-radius: 100% 90%;
    border-top-left-radius: 10%;
    transform-origin: 80% center;
    overflow: hidden;
    background: #30508f;
  }

  .ear:before {
    width: 70%;
    height: 55%;
    border: 2px solid #30508f;
    background: #de6465;
    top: 20%;
    left: 15%;
    transform-origin: top left;
    transform: skewX(30deg) rotate(-5deg);
  }

  .ear:after {
    width: 70%;
    height: 100%;
    border-top-left-radius: 100%;
    background: #30508f;
    left: 32%;
    transform-origin: top left;
    transform: rotate(-5deg);
  }

  .ear + .ear {
    animation: right-ear 12s both infinite;
    background-color: #343c60;
    left: 15%;
    top: 5%;
    z-index: -1;
    transform-origin: right center;
  }

  .ear + .ear:before {
    border-color: #343c60;
  }

  .ear + .ear:after {
    background: #343c60;
  }

  .mouth {
    z-index: 1;
    animation: mouth 12s none infinite;
    position: absolute;
    width: 48%;
    height: 55%;
    bottom: -5%;
    left: 28%;
    overflow: hidden;
  }

  .mouth:before,
  .mouth:after {
    animation: mouth-cover-left 12s none infinite;
    width: 28%;
    height: 100%;
    background: white;
    top: -50%;
    left: 0;
    z-index: 3;
    transform-origin: right top;
  }

  .mouth:after {
    animation: mouth-cover-right 12s none infinite;
    left: initial;
    right: 0;
    transform-origin: left top;
  }

  .lips {
    z-index: 2;
    height: 35%;
    width: 100%;
  }

  .lips:before,
  .lips:after {
    background: white;
    width: calc(50% + 1.5px);
    border-color: #9eb6d7;
    border-width: 3px;
    border-style: solid;
    height: 100%;
    border-bottom-left-radius: 65% 100%;
    border-bottom-right-radius: 35% 50%;
    border-top-right-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
  }

  .lips:after {
    transform: rotateY(180deg);
    left: initial;
    right: 0;
  }

  .tongue {
    animation: tongue 12s none infinite;
    position: absolute;
    height: 100%;
    width: 44%;
    background: #de6465;
    left: 25%;
    bottom: 100%;
    z-index: 1;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
  }

  .body {
    animation: body 12s none infinite;
    width: 45%;
    height: 100%;
    position: absolute;
    left: 25%;
  }

  .torso {
    position: absolute;
    height: 55%;
    width: 100%;
    bottom: 0;
  }

  .torso:before {
    background: #30508f;
    height: 100%;
    width: 50%;
    transform: translateX(-20%) skewX(-30deg);
    transform-origin: left bottom;
    border-radius: 0 30% 0 60%;
  }

  .torso:after {
    background: #30508f;
    height: 100%;
    width: 60%;
    top: 0;
    right: 0;
    border-radius: 10% 40% 60% 0;
  }

  .mane {
    animation: mane 12s none infinite;
    z-index: 2;
    position: absolute;
    width: 31.5%;
    height: 30%;
    top: 44%;
    left: 37%;
  }

  .mane:before {
    background: white;
    height: 40%;
    width: 100%;
    border-top-left-radius: 10% 50%;
    border-top-right-radius: 20% 100%;
    border-bottom-left-radius: 10% 50%;
  }

  .mane:after {
    background: white;
    top: 25%;
    height: 76%;
    width: 30%;
    right: 23%;
    border-top-right-radius: 100% 80%;
    transform: rotate(47deg);
    transform-origin: bottom right;
  }

  .coat {
    position: absolute;
    width: 50%;
    height: 50%;
    background: white;
    transform-origin: bottom right;
    left: 10%;
    top: 21%;
    transform: rotate(25deg) skewX(-30deg);
  }

  .legs {
    background-color: #30508f;
    position: absolute;
    height: 30%;
    width: 42%;
    left: 23%;
    bottom: 0;
    border-top-left-radius: 20% 37%;
    border-bottom-left-radius: 10% 37%;
    border-top-right-radius: 50%;
    z-index: 1;
  }

  .front-legs {
    position: absolute;
    width: 55%;
    height: 117%;
    bottom: 0;
    right: -12%;
  }

  .front-legs:before {
    width: 4%;
    height: 6%;
    background: transparent;
    bottom: 0;
    left: 47%;
    box-shadow: -1.3vmin 0 0 #9eb6d7, -2.8vmin 0 0 #9eb6d7, 1.3vmin 0 0 #4f8edb,
      2.8vmin 0 0 #4f8edb;
    z-index: 2;
  }

  .front-legs > .leg {
    width: 51%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 50%;
    overflow: hidden;
  }

  .front-legs > .leg:before {
    background: #c8daf2;
    height: 100%;
    width: 100%;
    transform: skewY(-30deg) skewX(10deg);
    transform-origin: top right;
  }

  .front-legs > .leg + .leg {
    right: 0;
    transform: rotateY(180deg);
  }

  .front-legs > .leg + .leg:before {
    background: #9eb6d7;
  }

  .hind-leg {
    position: absolute;
    background: #9eb6d7;
    width: 35%;
    height: 25%;
    border-top-left-radius: 35% 100%;
    border-top-right-radius: 40% 100%;
    bottom: 0%;
    right: 45%;
  }

  .hind-leg:before {
    width: 6%;
    height: 20%;
    background: transparent;
    bottom: 0;
    left: 70%;
    box-shadow: -0.8vmin 0 0 #4f8edb, 0.8vmin 0 0 #4f8edb;
  }

  .tail {
    position: absolute;
    width: 15%;
    height: 6%;
    bottom: 0;
    right: 72%;
    background: #343c60;
    z-index: 0;
  }

  .tail > .tail {
    animation: tail 12s none infinite;
    height: 100%;
    width: 4vmin;
    right: 26%;
    transform-origin: center right;
    border-top-left-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
    transform: rotate(26deg);
    transform: rotate(0deg);
  }

  .husky > .tail {
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
  }

  .husky > .tail > .tail {
    right: 88%;
  }

  @keyframes squiggly-anim {
    0% {
      filter: url('#squiggly-0');
    }
    25% {
      filter: url('#squiggly-1');
    }
    50% {
      filter: url('#squiggly-2');
    }
    75% {
      filter: url('#squiggly-3');
    }
    100% {
      filter: url('#squiggly-4');
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    position: relative;
  }
  .wau {
    border-radius: 0.4em;
    padding: 10px;
    color: #fff;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-left-color: #00aabb;
      border-right: 0;
      border-bottom: 0;
      margin-top: -10px;
      margin-right: -20px;
    }
  }
`;
