export const codePen1 = `// stateful component
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
      <div>
        {searchResults && 
          <Articles articles={articles} />
        }
        <h5><a href="https://news-finder.surge.sh/" target="_blank" rel="noopener noreferrer">Please open this on surge</a></h5>
        <p>NewsAPI.org</p>
        <Input
          onChange={this.handleChange}
          value={inputVal}
          placeholder="Enter a search term"
        />
        <SearchButton handleClick={this.handleClick} text="Click"/>
      </div>
    )
  }
}



// functional (stateless) component
const Articles = ({articles}) => (
  <div className="resultsWrapper">
    { articles.map((a, i) => (
      <a key={i} className="d-block" href={a.url} target="_blank">
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
    ))}   
  </div>  
)


const SearchButton = ({text, handleClick}) =>
  <Button color="primary" onClick={handleClick}> 
    {text}
  </Button>
 
render(<App/>)`;

