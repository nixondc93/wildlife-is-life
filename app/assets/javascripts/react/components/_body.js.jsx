class Body extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
      displayAbout: false,
      displayOrgs: false
    }
  }


  handleAboutClick(){
    console.log('about')
    this.setState({displayAbout: true, results: [], displayOrgs: true})
    console.log(this.state)
  }

  handleOrgsClick(){
    console.log("Orgs")
    this.setState({displayAbout: false, results: [], displayOrgs: true})
    console.log(this.state)
  }

  handleChange(e) {
    this.setState({displayAbout: false, displayOrgs: false})
    $.getJSON('/api/v1/animals.json', (response) => {
      this.setState({results: response});
    }).then((res) => { console.log('state  ', this.state.results)});
  }

  render() {

    return (
      <div>
        <Navigation handleAboutClick={this.handleAboutClick.bind(this)}  handleOrgsClick={this.handleOrgsClick.bind(this)} handleChange={this.handleChange.bind(this)}/>
        {this.state.displayAbout && <About/>}
        {this.state.displayOrgs && <Organizations/>}
        {this.state.results.length !== 0 && <SearchResults results={this.state.results}/>}
      </div>
    )
  }
};
