class Navigation extends React.Component{



  constructor(props){
    super(props);
  }



  render(){
    const RaisedButton = MaterialUi.RaisedButton;
    const Nav = MaterialUi.LeftNav;

    return (
      <div>
        <Nav>
          <Search handleChange={this.props.handleChange.bind(this)}/>

          <RaisedButton label="About" ref='about' onClick={this.props.handleAboutClick}/>
          <RaisedButton label="Organizations" ref='Orgs' onClick={this.props.handleOrgsClick}/>
        </Nav>
      </div>
    )
  }

}
