import React, { Component } from 'react';
import classNames from 'classnames';
import { LocalJestText, StyledComplex, StyledCounter } from './styles';

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
        <LocalJestText className={classNames({ show: goLocal })}>Local Jest Project</LocalJestText>
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
