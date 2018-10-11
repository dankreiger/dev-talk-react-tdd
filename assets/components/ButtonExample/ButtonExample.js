import React, { Component } from 'react';
import { Heading } from 'spectacle';
import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import { StyledButton, StyledSelect } from './styles';

import Dog from '../Dog/Dog';
import Dog2 from '../Dog/Dog2';
import { veryLongConditional } from './veryLongConditional';

export default class ButtonExample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      lang: 'en'
    };
  }

  handleClick = () => {
    if (this.state.count < 300) {
      this.setState({
        count: this.state.count + 1,
        dogVisible: false,
      });
    }
  };
  handleSelect = e => this.setState({ lang: e.target.value });

  render() {
    const { count, lang } = this.state;
    const dog1Visible = count >= 25 && count < 45;
    const dog2Visible = count >= 100 && count < 130;
    return (
      <Container>
        <Row style={{'position': 'absolute', 'top': '-74%', 'color': 'white'}}>
          <Col>Open <a target="_blank" rel="noopener noreferrer" href="https://click-counter.surge.sh/">https://click-counter.surge.sh/</a></Col>
        </Row>
        <Row>
          <Col xs={{ size:6, offset: 3 }}>
            <StyledSelect type="select" onChange={this.handleSelect} value={lang}>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </StyledSelect>          
          </Col>     
        </Row>
        <Row>
          <Col>
            <Heading fit size={5} textColor="white">
              {count < 300 && lang === 'de'
                ? `Dieser Button wurde ${count} mal geklickt.`
                : count < 300 && lang === 'en'
                ? `This button has been clicked ${count} ${
                  count === 1 ? 'time' : 'times'
                }`
                : `Ain't nothing gonna happen here dawg.`}
            </Heading>

            <StyledButton
              className={classNames('interactiveBtn ripple', {
                disabledBtn: count >= 300
              })}
              type="button"
              onClick={this.handleClick}
            >
              {veryLongConditional(count)}
            </StyledButton>
            <Dog dogVisible={dog1Visible} lang={lang} />
            <Dog2 dogVisible={dog2Visible} />          
          </Col>
        </Row>
      </Container>
    );
  }
}
