class Body extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
      displayAbout: false,
      displayOrgs: false,
      query: ""
    }
  }


  handleAboutClick(){
    this.setState({displayAbout: true, results: [], displayOrgs: false})
  }

  handleOrgsClick(){
    this.setState({displayAbout: false, results: [], displayOrgs: true})
  }

  queryHandler(str){
    this.setState({
      query: str
    })
  }

  handleChange(e) {
    if(e.target.value !== ''){
      this.setState({displayAbout: false, displayOrgs: false, results: []})
      $.ajax({
        url: '/api/v1/animals/find.json',
        data: {species: {name: e.target.value}},
        success: (response) => {
          console.log(response);
          this.setState({results: response});
        },
        error: (response) => {
          console.log("search failed", response)
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Navigation
          handleAboutClick={this.handleAboutClick.bind(this)}
          handleOrgsClick={this.handleOrgsClick.bind(this)}
          handleChange={this.handleChange.bind(this)}
          queryHandler={this.queryHandler.bind(this)}
        />
        {this.state.displayAbout && <About/>}
        {this.state.displayOrgs && <Organizations/>}
        {this.state.results.length !== 0 && <SearchResults results={this.state.results}/>}
      </div>
    )
  }
};
