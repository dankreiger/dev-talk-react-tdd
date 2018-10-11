/* eslint-disable filenames/match-regex, quotes, arrow-parens, react/jsx-boolean-value  */
import React, { Component } from 'react';
import classNames from 'classnames';
import { GitCloneText, LocalJestText, LocalTextStyled, StyledComplex, StyledCounter } from './styles';

class ComplexExample extends Component {
  constructor() {
    super();
    this.state = { count: 10, goLocal: false };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count - 1 }));
    }, 1000);
  }

  componentDidUpdate(props, state) {
    if (state.count === -5) {
      clearInterval(this.interval);
      this.setState(state => ({ goLocal: !state.goLocal }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { count, goLocal } = this.state;
    return (
      <div style={{'backgroundColor': goLocal ? '#333' : '#fff', 'color': goLocal ? '#fff' : 'inherit'}}>
        <LocalTextStyled className={classNames({ show: goLocal })}>
          <LocalJestText>
            Local Jest Project
          </LocalJestText>
          <div className="d-flex flex-column align-items-start">
            <GitCloneText>Source:  <a href="https://github.com/dankreiger/jest-time-complexity.git">https://github.com/dankreiger/jest-time-complexity.git</a></GitCloneText>
            <GitCloneText>Travis CI:  <a href="https://github.com/dankreiger/jest-time-complexity.git">https://travis-ci.org/dankreiger/click-counter</a></GitCloneText>
          </div> 
        </LocalTextStyled>
        <StyledComplex className={classNames({ hidden: goLocal })}>
          <StyledCounter className={classNames({ small: count <= 0 })}>
            {count > 0 ? count : 'We should do this locally'}
          </StyledCounter>
          <iframe
            height="700px"
            width="100%"
            src="https://repl.it/@dankreiger/jest-runner?lite=true"
            scrolling="no"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </StyledComplex>
      </div>
    );
  }
}

export default ComplexExample;
/* eslint-enable filenames/match-regex, quotes, arrow-parens, react/jsx-boolean-value */
