


class Navigation extends React.Component{



  handleAboutClick(){

  }

  handleOrgsClick(){

  }



  render(){
    const RaisedButton = MaterialUi.RaisedButton;
    const Nav = MaterialUi.LeftNav;

    return (
      <div>
        <Nav>
          <Search/>

          <RaisedButton label="About" ref='about' value="hello" onClick={this.handleAboutClick}/>
          <RaisedButton label="Organizations" ref='Orgs' onClick={this.handleOrgsClick}/>
        </Nav>
      </div>
    )
  }

}
