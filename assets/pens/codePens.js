/* eslint-disable filenames/match-regex  */

export const codePen1 = `
// PLEASE VISIT GITHUB FOR THE TESTS + ACTUAL CODE

// Source Code: https://github.com/dankreiger/news-finder
// Live Site: https://news-finder.surge.sh (api key needed from newsAPI.org)
// Travis CI: https://travis-ci.org/dankreiger/news-finder

// source code will explain how to test async functions

// stateful component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }
  handleChange(e) {
    this.setState({ inputVal: e.target.value })
  }

  handleClick() {
    this.fetchArticles()
  }
  fetchArticles() {
    newsapi.v2.everything({
      q: this.state.inputVal,
    }).then(response => {
      console.log(response);
      this.setState({searchResults: response.articles});
    });    
  }
  render() {
    const { inputVal, searchResults } = this.state;
    const articles = _.take(searchResults, 4);
    return (    
      <Container fluid>
        <Row className="flex-column">
          <Col xs="12">
            <h6><a href="https://github.com/dankreiger/news-finder" target="_blank" rel="noopener noreferrer">Source</a><small> (much better than this mess)</small></h6>
            <h6><a href="https://news-finder.surge.sh/" target="_blank" rel="noopener noreferrer">Live</a><small> (api key needed)</small></h6>
            <h6><a href="https://travis-ci.org/dankreiger/news-finder" target="_blank" rel="noopener noreferrer">Travis CI</a></h6>
            <p>API attribution: <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a></p>          
          </Col>               
        </Row>
        <Row className="form-row">
          <Col xs="12" sm="9">
            <Input
              onChange={this.handleChange}
              value={inputVal}
              placeholder="Enter a search term"
            />
          </Col>
          <Col xs="12" sm="3">
            <SearchButton handleClick={this.handleClick} text="Click"/>
          </Col>
        </Row>
        {searchResults && 
          <Articles articles={articles} />
        }
      </Container>
    )
  }
}



// functional (stateless) component
const Articles = ({articles}) => (
  <Row noGutters style={{'marginTop': '10px'}}>
    { articles.map((a, i) => (
      <Col xs="6" key={i}>
        <a className="d-block" href={a.url} target="_blank">
        <Card inverse>
          <CardImg width="100%" src={a.urlToImage} alt={a.title} />
          <CardImgOverlay>
            <CardTitle>{a.title}</CardTitle>
            <CardText>{a.description}</CardText>
            <CardText>
              <small className="text-muted">{a.source.name}</small>
            </CardText>
          </CardImgOverlay>
        </Card> 
        </a>  
      </Col>
    ))}       
  </Row>
)


const SearchButton = ({text, handleClick}) =>
  <Button className="w-100" color="primary" onClick={handleClick}> 
    {text}
  </Button>
 
render(<App/>)`;

/* eslint-enable filenames/match-regex */
