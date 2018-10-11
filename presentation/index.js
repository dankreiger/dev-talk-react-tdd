/* eslint-disable quotes */
import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import reactLogo from '../assets/images/logo.svg';
import {
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Form,
  FormGroup,
  Row,
  Col,
  Container
} from 'reactstrap';
// Import Spectacle Core tags
import {
  Code,
  Deck,
  Heading,
  List,
  ListItem,
  Image,
  Slide,
  Text,
  Appear,
  Link
} from 'spectacle';

import './syntaxHighlight.css';
import './index.css';

import CodeSlide from 'spectacle-code-slide';
import ButtonExample from '../assets/components/ButtonExample/ButtonExample';
import { codePen1 } from '../assets/pens/codePens';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { theme } from './theme.js';
import ComplexExample from '../assets/components/ComplexExample/ComplexExample';

// Require CSS
require('normalize.css');

let newsApiKey = '';
if (!newsApiKey) {
  newsApiKey = alert('Please enter your newsApiKey in presentation/index.js'); // eslint-disable-line no-alert
}

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(newsApiKey);

const defaultBtnText = `dieser Button sieht 2-way-gebindet aus, aber es ist nicht so`;

export default class Presentation extends Component {
  render() {
    const styledScope = {
      styled,
      Form,
      FormGroup,
      Button,
      Input,
      ListGroup,
      Row,
      Col,
      Container,
      ListGroupItem,
      Card,
      CardTitle,
      CardText,
      CardImg,
      CardImgOverlay,
      defaultBtnText,
      newsapi,
      _
    };
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TDD in React
          </Heading>
          <List style={{ listStyle: 'none' }}>
            <Appear>
              <Text className="flex w-100 justify-content-center align-items-center">
                We will focus on:
              </Text>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  href="https://en.wikipedia.org/wiki/Test-driven_development"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: '40px' }}
                  className="flex w-100 justify-content-between align-items-center"
                >
                  <div>Test-driven Development (TDD)</div>
                  <Image
                    style={{ width: '50px', margin: '0' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg"
                  />
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  href="https://jestjs.io/"
                  target="_blank"
                  style={{ marginTop: '40px' }}
                  className="flex w-100 justify-content-between align-items-center"
                >
                  <div>Jest</div>
                  <Image
                    style={{ width: '50px', margin: '0' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                  />
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link
                  href="http://airbnb.io/enzyme/"
                  target="_blank"
                  style={{ marginTop: '40px' }}
                  className="flex w-100 justify-content-between align-items-center"
                >
                  <div>Enzyme</div>
                  <Image
                    style={{ width: '50px', margin: '0' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
                  />
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            What is TDD?
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit textColor="primary">
            Write tests first.
          </Text>
          <Text margin="10px 0 0" fit textColor="primary">
            Then write the code to make the tests pass.
          </Text>
        </Slide>
        <Slide>
          <Heading margin="0 0 20px 0">TDD Steps</Heading>
          <List ordered className="tdd-steps">
            <Appear>
              <ListItem>Write a test</ListItem>
            </Appear>
            <Appear>
              <ListItem>Run the test and make sure it fails</ListItem>
            </Appear>
            <Appear>
              <ListItem>Write code to make the test pass</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Run test suite and make sure this test (and all other tests)
                pass
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Refactor code if necessary</ListItem>
            </Appear>
            <Appear>
              <ListItem>Repeat these steps</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text style={{ color: '#333' }}>Simplified</Text>
          <List ordered>
            <Appear>
              <ListItem className="red">RED</ListItem>
            </Appear>
            <Appear>
              <ListItem className="green">GREEN</ListItem>
            </Appear>
            <Appear>
              <ListItem className="refactor">REFACTOR</ListItem>
            </Appear>
            <Appear>
              <ListItem className="repeat">REPEAT</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text>Simple Example</Text>
          <List>
            <ListItem margin="10px 0 0 0">
              Write a pure function that return the sum of two inputs.
            </ListItem>
            <ListItem margin="30px 0 0 0" textSize="24px">
              For brevity, we won't check for input data types.
            </ListItem>
          </List>
        </Slide>
        <Slide className="redTest">
          <Heading className="red codeText" textSize="80px" margin="0 0 20px 0">
            Red
          </Heading>
          <Text>Write a failing test</Text>
          <iframe
            height="80%"
            width="100%"
            src="https://repl.it/@dankreiger/jest-runner-simple-red?lite=true"
            scrolling="no"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </Slide>
        <Slide className="greenTest">
          <Heading
            className="green codeText"
            textSize="80px"
            margin="0 0 20px 0"
          >
            Green
          </Heading>
          <iframe
            height="80%"
            width="100%"
            src="https://repl.it/@dankreiger/jest-runner-simple-green?lite=true"
            scrolling="no"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </Slide>
        <Slide>
          <Text>
            The test could be improved, but for the purpose of simplicity, we
            will not refactor this one.
          </Text>
        </Slide>
        <Slide>
          <Text>A slightly more interesting example</Text>
          <List>
            <ListItem margin="10px 0 0 0">
              Write a pure function that checks two string inputs
            </ListItem>
            <ListItem margin="10px 0 0 0">
              The function should test if the two strings are shuffled
            </ListItem>
            <ListItem margin="10px 0 0 0">
              The function should return <Code>true</Code> or <Code>false</Code>{' '}
              depending on whether or not the two strings are valid shuffles
              (anagrams)
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          className="jestExample"
          code={require('raw-loader!../assets/examples/validShuffleTest.example')}
          ranges={[
            { loc: [0, 270], title: 'Our test code' },
            { loc: [0, 1], note: 'Describe what we are testing' },
            { loc: [1, 6], note: 'Test for true cases' },
            { loc: [6, 11], note: 'Test for false cases' }
          ]}
        />
        <Slide className="redTest">
          <Heading className="red codeText" textSize="80px" margin="0 0 20px 0">
            Red
          </Heading>
          <Text>Write a failing test</Text>
          <iframe
            height="80%"
            width="100%"
            src="https://repl.it/@dankreiger/jest-runner-red?lite=true"
            scrolling="no"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </Slide>
        <Slide className="greenTest">
          <Heading
            className="green codeText"
            textSize="80px"
            margin="0 0 20px 0"
          >
            Green
          </Heading>
          <iframe
            height="80%"
            width="100%"
            src="https://repl.it/@dankreiger/jest-runner-green?lite=true"
            scrolling="no"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </Slide>
        {/* <Slide>
          <Heading style={{ fontSize: '6rem' }}>So why refactor?</Heading>
        </Slide>
        <Slide>
          <Text style={{ fontSize: '20px' }}>
            It's not always necessary, but...
          </Text>
          <Appear>
            <Text margin="10px 0 0">You probably won't have time later.</Text>
          </Appear>
          <Appear>
            <Text margin="20px 0 0" style={{ fontSize: '30px' }}>
              More importantly:
            </Text>
          </Appear>
          <Appear>
            <Text margin="20px 0 0" style={{ fontSize: '30px' }}>
              Optimization
              <sup>*</sup> is done when the code is initially written
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" style={{ fontSize: '20px' }}>
              <sup>*</sup> Speed, memory usage, code readability, etc.
            </Text>
          </Appear>
        </Slide> */}
        <Slide>
          <Text margin="30px 0 0" style={{ fontSize: '40px' }}>
            We need to go back to <span className="red">red</span> again.
          </Text>
          <Appear>
            <Text margin="30px 0 0" style={{ fontSize: '30px' }}>
              Our function is not optimized for long inputs.
            </Text>
          </Appear>
        </Slide>
        <CodeSlide
          lang="js"
          className="jestExample"
          code={require('raw-loader!../assets/examples/validShuffleTestComplex.example')}
          ranges={[
            { loc: [0, 270], title: 'Our new test code' },
            { loc: [13, 14], note: 'Test long inputs' },
            { loc: [14, 18], note: 'Test for true cases' },
            { loc: [18, 23], note: 'Test for false cases' },
            {
              loc: [25, 33],
              note: 'Benchmark performance for pw1 / shuffledPw1'
            },
            {
              loc: [34, 42],
              note: 'Benchmark performance for pw2 / shuffledPw2'
            }
          ]}
        />
        <Slide>
          <Text>What do pw1, pw2, etc. look like?</Text>
        </Slide>
        <CodeSlide
          lang="js"
          className="jestExample"
          code={require('raw-loader!../assets/examples/passwords.example')}
          ranges={[
            { loc: [0, 270], title: 'Very long' },
            { loc: [4, 5], note: 'pw1: 2048 characters' },
            { loc: [6, 7], note: 'shuffledPw1: 2048 characters' },
            { loc: [8, 9], note: 'pw2: 3482000 characters' },
            { loc: [10, 11], note: 'shuffledPw2: 3482000 characters' }
          ]}
        />
        <Slide className="tinypuppywoof">
          <ComplexExample />
          {/* <LiveProvider className="jestRunner" code={jestPen}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider> */}
        </Slide>
        <Slide>
          <Text>We just wrote a unit test.</Text>
          <Appear>
            <Text margin="20px 0">
              Usually we'd say there are 3 types of tests.
            </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>
                Unit Tests
                <List>
                  <ListItem padding="0 0 0 40px" textSize="24px">
                    Tests one piece (usually one function)
                  </ListItem>
                  <ListItem padding="0 0 0 40px" textSize="24px">
                    Tested in isolation
                  </ListItem>
                  <ListItem padding="0 0 0 40px" textSize="24px">
                    Typically small and fast
                  </ListItem>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="30px 0 0">
                Integration Tests
                <List>
                  <ListItem style={{ paddingLeft: '40px', fontSize: '24px' }}>
                    How multiple units work together
                  </ListItem>
                  <ListItem style={{ paddingLeft: '40px', fontSize: '24px' }}>
                    For example testing database access code against a test
                    database
                  </ListItem>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="30px 0 0">
                e2e Tests{' '}
                <span style={{ fontSize: '20px' }}>
                  aka acceptance / functional tests
                </span>
                <List>
                  <ListItem padding="0 0 0 40px" textSize="24px">
                    How user would interact with the app
                  </ListItem>
                  <ListItem padding="0 0 0 40px" textSize="24px">
                    Automatic testing of the entire application
                  </ListItem>
                  <ListItem padding="0 0 0 40px" textSize="24px">
                    Sometimes a tool like Selenium will be used to run a browser
                  </ListItem>
                </List>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide className="align-self-start">
          <Text> A side note:</Text>
          <Appear>
            <Text margin="10px 0 0 0" textSize="24px">
              In my experience these definitions haven't always been so clear.
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0 0" textSize="24px">
              For example: In Ruby on Rails we see a lot of hybrid tests, and
              the difference between e2e tests and integration tests is blurred.
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 20px 0" textSize="24px">
              Also, MVC tests tend to overlap.
            </Text>
          </Appear>
          <Appear>
            <Image src="https://images.thoughtbot.com/rails-test-types-and-the-testing-pyramid/JH3Bd0ZOQaWZllZcE1Mg_rails-test-types.png" />
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="24px">
            Testing on the frontend doesn't have to be so complex.
          </Text>
          <Appear>
            <div>
              <Text textSize="24px">
                Additionally, as an app scales, it pays off to incorporate e2e
                tests sparingly.
              </Text>
              <Image
                width="600px"
                src="https://cdn-images-1.medium.com/max/1600/0*8Uapgla-XhuHS6ph.png"
              />
            </div>
          </Appear>
          <Appear>
            <Text margin="30px 0 0 0" textSize="24px">
              Luckily we can build robust unit tests for our UI components.
            </Text>
          </Appear>
          <Appear>
            <Text textSize="24px">
              We can also build some pretty quick integration tests.
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0 0">Which finally brings me to...</Text>
          </Appear>
        </Slide>
        <Slide className="reactSlide" bgColor="#282c34">
          <Heading textColor="#61dafb">React</Heading>
          <Image className="react-logo" src={reactLogo} />
          <Text textSize="30px" textColor="white">
            <code style={{ color: '#fff' }}>
              A JavaScript library for building user interfaces
            </code>
          </Text>
          <Text textSize="20px" textColor="white" margin="40px 0 0 0">
            <code style={{ color: '#fff' }}>
              Removing the MC from MVC since whenever Zuckerberg or whoever
              decided...
            </code>
          </Text>
        </Slide>
        <Slide bgColor="#282c34">
          <Text textSize="26px" textColor="white">
            I won't spend too much time here discussing React because many of
            you already know it.
          </Text>
          <Appear>
            <Text textSize="26px" textColor="white">
              Just a few basic concepts.
            </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem textSize="26px" textColor="white">
                React is a library for the view layer.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="26px" textColor="white">
                React works with a virtual DOM (not to be confused with Shadow
                DOM) where a virtual representation of the UI is kept in memory.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="26px" textColor="white">
                Because a virtual DOM object is a representation of a real DOM
                object, it can be manipulated much faster.
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Text textSize="72px">&#128564;</Text>
          </Appear>
        </Slide>
        <Slide className="align-self-start">
          <LiveProvider
            className="littlewoof"
            noInline={true}
            scope={styledScope}
            code={require('raw-loader!./../assets/examples/props_and_state.example')}
          >
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </Slide>
        <Slide bgColor="#282c34">
          <Text textAlign="left" textColor="#fff">
            Props
          </Text>
          <Appear>
            <List>
              <ListItem textSize="20px" textColor="#fff">
                are received from a parent component
              </ListItem>
              <ListItem textSize="20px" textColor="#fff">
                are simply arbitrary inputs being passed into a js class or
                function (our component)
              </ListItem>
              <ListItem textSize="20px" textColor="#fff">
                represent a component's configuration (properties)
              </ListItem>
              <ListItem textSize="20px" textColor="#fff">
                in projects we would normally do static type checking on{' '}
                <code>Props</code> using the <em>PropTypes</em> library
                (included in React, but still needs to be imported). On larger
                projects we can integrate either <em>Flow</em> or{' '}
                <em>TypeScript</em> for type checking.
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <Text textAlign="left" textColor="#fff">
              State
            </Text>
          </Appear>
          <Appear>
            <List>
              <ListItem textSize="20px" textColor="#fff">
                similar to props, but is private and fully controlled by the
                component
              </ListItem>
              <ListItem textSize="20px" textColor="#fff">
                can be indirectly manipulated by any of its descendants
              </ListItem>
              <ListItem textSize="20px" textColor="#fff">
                state (aka component state or local state) is not to be confused
                with global state, which depends on an outside library like{' '}
                <em>Redux</em>, <em>MobX</em>, or <em>Flux</em>
              </ListItem>
              <ListItem textSize="20px" textColor="#fff">
                static type checking state requires type checkers like{' '}
                <em>Flow</em> or <em>Typescript</em>, both of which play nicely
                with React (I lean toward TypeScript these days)
              </ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Text>One last concept before going back to TDD</Text>
        </Slide>
        <Slide bgColor="#282c34">
          <Heading textColor="#fff" textSize="55px" margin="-30px 0 30px 0">
            Components
          </Heading>
          <Appear>
            <Text margin="0 0 20px 0" textColor="#fff">
              There are 2 types of components in React
            </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem margin="0 0 10px 0" textColor="#fff" textSize="30px">
                Stateful (aka <em>class</em> or <em>smart</em>) components
              </ListItem>
            </Appear>
            <Appear>
              <List margin="0 0 10px 0" textColor="#fff" textSize="20px">
                these have <em>props</em> and <em>state</em>
              </List>
            </Appear>
            <Appear>
              <ListItem margin="0 0 10px 0" textColor="#fff" textSize="30px">
                Stateless (aka <em>functional</em> or <em>dumb</em>) components
              </ListItem>
            </Appear>
            <Appear>
              <List textColor="#fff" textSize="20px">
                these only have <em>props</em>
              </List>
            </Appear>
          </List>
          <Appear>
            <Text textSize="30px" textColor="#fff">
              So let's test these
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <List>
            <ListItem textSize="28px">
              We'll start with a simple example
            </ListItem>
            <Appear>
              <ListItem textSize="28px">
                We will use Enzyme's component rendering functions for testing:{' '}
                <a href="https://airbnb.io/enzyme/docs/api/" target="_blank">
                  https://airbnb.io/enzyme/docs/api
                </a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="28px">
                Some of these tests may seem unnecessary when writing them
                (especially for functional components).
              </ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textSize="28px">
                But the tests keep us safe while simultaneously providing
                documentation for our app's functionality.
              </ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textSize="28px">
                Developing an app is like driving on a mountain road.
              </ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textSize="28px">
                And the tests are the guard rails.
              </ListItem>
            </Appear>
          </List>
          <List>
            <Appear>
              <ListItem textSize="28px">
                You don't need the guard rails to drive, but you'll be happy
                they are there if you fall asleep (or if anything else goes
                wrong).
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text margin="0 0 20px 0">
            In the following example we will do unit tests on one stateful
            component
          </Text>
          <List>
            <Appear>
              <ListItem textSize="24px">
                Since we are only testing one component in isolation, we will
                render it with Enzyme's <code>Shallow</code> function
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="24px">
                If there's time, we can write a small functional child component
                and use Enzyme's <code>Mount</code> function to test the child
                component from the parent
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="#000" notes="open click-counter repo">
          <ButtonExample />
        </Slide>
        <Slide>
          <Text margin="0 0 20px 0">In the next example we will discuss:</Text>
          <List>
            <Appear>
              <ListItem textSize="24px">
                unit testing on functional and stateful components
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="24px">
                snapshot testing, which is a unique feature in Jest
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="24px">
                integration testing by mocking an external api and testing async
                functions
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide className="tinypuppywoof" notes="open news-finder example">
          <LiveProvider
            className="tinypuppy"
            code={codePen1}
            scope={styledScope}
            noInline={true}
          >
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </Slide>
        <Slide>
          <Text textSize="36px" textAlign="left">
            We are most likely out of time.
          </Text>
          <Appear>
            <Text textSize="36px" textAlign="left">
              If you are interested in testing with React and Redux, you can
              checkout my repo:
            </Text>
          </Appear>
          <List margin="20px 0 20px 0">
            <Appear>
              <ListItem textSize="28px">
                React-Redux Testing:{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  textSize="20px"
                  href="https://github.com/dankreiger/react-redux-testing/"
                >
                  https://github.com/dankreiger/react-redux-testing/
                </Link>
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Text textSize="28px" textAlign="left">
              You will find there a small app i.e. boilerplate Redux code with
              testing on components, actions, reducers, and async integrations.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="28px" margin="15px 0">
            React is still enormously popular today.
          </Text>
          <Appear>
            <Text textSize="28px" margin="15px 0">
              Check out{' '}
              <Link
                href="https://www.npmtrends.com/react-vs-@angular/core-vs-vue"
                target="_blank"
                rel="noopener noreferrer"
              >
                this graph
              </Link>{' '}
              comparing the "3 Kings"
            </Text>
          </Appear>
          <Appear>
            <Text textSize="20px" margin="15px 0">
              ... well this is what I call them
            </Text>
          </Appear>
          <Appear>
            <Text textSize="28px" margin="15px 0">
              The truth is that it is a joy to develop with.
            </Text>
          </Appear>
          <Appear>
            <Text textSize="28px" margin="15px 0">
              I think if you try it yourself, you will see why it is more than
              just a hype.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="30px" textAlign="left">
            More Links
          </Text>
          <Appear>
            <List>
              <ListItem textSize="20px">
                Official Docs:{' '}
                <Link
                  textSize="14px"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://reactjs.org
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Redux (JS global state management):{' '}
                <Link
                  textSize="14px"
                  href="https://redux.js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://redux.js.org
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Jest (delightful JS testing):{' '}
                <Link
                  textSize="14px"
                  href="https://jestjs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jestjs.io
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Enzyme (JS testing utilities for React):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/airbnb/enzyme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/airbnb/enzyme
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                React Router (declarative routing):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/ReactTraining/react-router"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/ReactTraining/react-router
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Create React App (no build
                config):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/facebook/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/facebook/create-react-app
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Create React Native App (no build
                config):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/react-community/create-react-native-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/react-community/create-react-native-app
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Bit (easily share code between projects):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/teambit/bit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/teambit/bit
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Reactstrap (Bootstrap 4 React components):{' '}
                <Link
                  textSize="14px"
                  href="https://reactstrap.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://reactstrap.github.io
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Redux Form (form state management in Redux):{' '}
                <Link
                  textSize="14px"
                  href="https://redux-form.com/7.4.2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://redux-form.com/7.4.2
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                React Native (iOS, Android, and Windows Phone apps):{' '}
                <Link textSize="14px" href="https://facebook.github.io/react-native">
                  https://facebook.github.io/react-native
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Typescript React Starter (maintained by Microsoft):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/Microsoft/TypeScript-React-Starter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Microsoft/TypeScript-React-Starter
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                React 360 (for VR):{' '}
                <Link
                  textSize="14px"
                  href="https://facebook.github.io/react-360"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://facebook.github.io/react-360
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                React Spring (animation):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/drcmda/react-spring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/drcmda/react-spring
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                React Loadable (promise based component loading):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/jamiebuilds/react-loadable"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/jamiebuilds/react-loadable
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Storybook (Interactive UI component dev & test):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/storybooks/storybook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/storybooks/storybook
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Styled Components (JS component styling):{' '}
                <Link
                  textSize="14px"
                  href="https://www.styled-components.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.styled-components.com
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                Cypress (Fast and easy E2E testing):{' '}
                <Link
                  textSize="14px"
                  href="https://github.com/cypress-io/cypress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/cypress-io/cypress
                </Link>
              </ListItem>
              <ListItem textSize="20px">
                React for your mom:{' '}
                <Link
                  textSize="14px"
                  href="https://medium.com/@dankreiger/a-non-coders-introduction-to-facebook-s-react-js-javascript-library-f1a22bea92f6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://medium.com/@dankreiger/a-non-coders-introduction-to-facebook-s-react-js-javascript-library-f1a22bea92f6
                </Link>
              </ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide>
          <LiveProvider
            className="puppy"
            code={require('raw-loader!./../assets/examples/vielenDank.example')}
          >
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </Slide>
      </Deck>
    );
  }
}

/* eslint-enable quotes */
