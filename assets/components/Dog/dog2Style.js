import styled from 'styled-components';


export const Dog2Styled = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
top: 120%;
display: none;
&.dogVisible {
  display: block;
}
.body {
  position: relative;
  background: #ffa500;
  border-radius: 300px 300px 200px 200px;
  height: 200px;
  width: 125px;
}

.ears {
  position: absolute;
  z-index: -1;
  top: -15px;
  &:after {
    content: '';
    display: inline-block;
    background: #ee6000;
    box-shadow: inset -5px -5px #e24b00;
    width: 40px;
    height: 70px;
    border-radius: 100% 100% 0 0;
    transform: translateX(40px);
    border: 10px solid #ffa500;
    box-sizing: border-box;
  }
  &:before {
    content: '';
    display: inline-block;
    background: #ee6000;
    box-shadow: inset -5px -5px #e24b00;
    width: 40px;
    height: 70px;
    border-radius: 100% 100% 0 0;
    transform: translateX(40px);
    border: 10px solid #ffa500;
    box-sizing: border-box;
    transform: translateX(5px);
  }
}

.eyebrows {
  .left {
    border-radius: 10px;
    position: absolute;
    background: #ffffff;
    top: 15px;
    left: 25px;
    width: 15px;
    height: 10px;
  }
  .right {
    border-radius: 10px;
    position: absolute;
    background: #ffffff;
    top: 15px;
    left: 80px;
    width: 15px;
    height: 10px;
  }
}

.eyes {
  .left {
    position: absolute;
    width: 20px;
    height: 10px;
    top: 10px;
    left: 150px;
    transform: translate(50%, -50%);
    z-index: 4;
    box-sizing: border-box;
    border-radius: 0 0 60px 60px;
    border: 4px solid black;
    border-top: 0;
    background: #ffa500;
    transform: rotate(180deg);
    left: 30px;
    top: 30px;
  }
  .right {
    position: absolute;
    width: 20px;
    height: 10px;
    top: 10px;
    left: 150px;
    transform: translate(50%, -50%);
    z-index: 4;
    box-sizing: border-box;
    border-radius: 0 0 60px 60px;
    border: 4px solid black;
    border-top: 0;
    background: #ffa500;
    transform: rotate(180deg);
    left: 75px;
    top: 30px;
  }
}

.mouth {
  width: 20px;
  height: 20px;
  background: #512e27;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 120px 120px 0 0;
  transform: rotate(180deg);
}

.tongue {
  width: 18px;
  height: 8px;
  background: #ff7977;
  position: absolute;
  z-index: 4;
  margin: auto;
  top: 70px;
  left: 0px;
  right: 0;
  border-radius: 120px 120px 0 0;
  transform: rotate(180deg);
}

.whiskers {
  .left {
    position: absolute;
    width: 20px;
    height: 10px;
    top: 10px;
    left: 150px;
    transform: translate(50%, -50%);
    box-sizing: border-box;
    border-radius: 0 0 60px 60px;
    border: 3px solid black;
    border-top: 0;
    background: #ffa500;
    left: 53px;
    top: 65px;
  }
  .right {
    position: absolute;
    width: 20px;
    height: 10px;
    top: 10px;
    left: 150px;
    transform: translate(50%, -50%);
    box-sizing: border-box;
    border-radius: 0 0 60px 60px;
    border: 3px solid black;
    border-top: 0;
    background: #ffa500;
    left: 33px;
    top: 65px;
  }
}

.nose {
  background: #512e27;
  width: 20px;
  height: 10px;
  border-radius: 0 0 30px 30px;
  position: relative;
  top: 40px;
  left: 53px;
  box-sizing: border-box;
}

.bandana {
  height: 10px;
  background: #00bcb8;
  position: relative;
  z-index: 4;
  top: 80px;
  box-shadow: inset -5px -5px #00a2a0;
  .top {
    position: relative;
    top: -20px;
    z-index: -4;
    left: 122px;
    width: 25px;
    height: 25px;
    background-color: #00bcb8;
    -moz-border-radius: 25px 0px;
    -webkit-border-radius: 25px 0px;
    border-radius: 25px 0px;
    box-shadow: inset -5px -5px #00a2a0;
  }
  .bottom {
    position: relative;
    top: -35px;
    z-index: -4;
    left: 122px;
    width: 25px;
    height: 25px;
    background-color: #00bcb8;
    -moz-border-radius: 25px 0px;
    -webkit-border-radius: 25px 0px;
    border-radius: 25px 0px;
    transform: rotate(40deg);
    box-shadow: inset -5px -5px #00a2a0;
  }
}

.stomach {
  width: 70px;
  height: 70px;
  background: #fff;
  position: absolute;
  top: 85px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 120px 120px 0 0;
  transform: rotate(180deg);
  box-shadow: inset -5px -5px #dedede;
}

.tail {
  background: #ffa500;
  width: 14px;
  height: 70px;
  position: absolute;
  z-index: -1;
  left: 15px;
  bottom: 25px;
  transform: rotate(-30deg);
  border-radius: 14px;
  transform-origin: bottom;
  transition: 300ms;
  animation: wag 0.2s infinite alternate;
}

.legs {
  .lfront {
    position: absolute;
    height: 20px;
    width: 40px;
    left: 20px;
    top: 180px;
    border-radius: 90px 90px 0 0;
    background: #ffffff;
    box-shadow: inset -5px -5px #dedede;
  }
  .lback {
    z-index: -1;
    position: absolute;
    height: 20px;
    width: 40px;
    top: 180px;
    left: -10px;
    border-radius: 90px 90px 0 0;
    background: #ffffff;
    box-shadow: inset -5px -5px #dedede;
  }
  .rfront {
    position: absolute;
    height: 20px;
    width: 40px;
    top: 180px;
    left: 70px;
    border-radius: 90px 90px 0 0;
    background: #ffffff;
    box-shadow: inset -5px -5px #dedede;
  }
  .rback {
    z-index: -1;
    position: absolute;
    height: 20px;
    width: 40px;
    top: 180px;
    right: -10px;
    border-radius: 90px 90px 0 0;
    background: #ffffff;
    box-shadow: inset -5px -5px #dedede;
  }
}

@keyframes wag {
  0% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(-40deg);
  }
}
`;
