class Body extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
      orgs: [],
      displayAbout: false,
      displayOrgs: false
    }
  }

  handleAboutClick(){
    this.setState({displayAbout: true, results: [], displayOrgs: false})
  }

  handleOrgsClick(){
    $.ajax({
      url: '/api/v1/organizations.json',
      success: (response) => {
        this.setState({displayAbout: false, results: [], displayOrgs: true})
        this.setState({orgs: response});
      }
    });
  }

  handleChange(e) {
    if(e.target.value !== ''){
      this.setState({displayAbout: false, displayOrgs: false, results: []})
      $.ajax({
        url: '/api/v1/animals/find.json',
        data: {species: {name: e.target.value}},
        success: (response) => {
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
        />
        {this.state.displayAbout && <About/>}
        {this.state.displayOrgs && <Organizations orgs={this.state.orgs}/>}
        {this.state.results.length !== 0 && <SearchResults results={this.state.results}/>}
      </div>
    )
  }
};
