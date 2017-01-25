

class Navigation extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const RaisedButton = MaterialUi.RaisedButton;
    const Nav = MaterialUi.LeftNav;
    const MenuItem = MaterialUi.MenuItem;

    return (
      <div>
        <Nav
          style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}
        >
          <Search
            handleChange={this.props.handleChange}
          />
          <MenuItem
            style={{ position: "absolute", bottom: 5, left: 10}}
            label="About Us"
            ref='about'
            onClick={this.props.handleAboutClick}
          >
            About Us
          </MenuItem>
          <MenuItem
            label="Organizations"
            ref='Orgs'
            onClick={this.props.handleOrgsClick}
          >
            Organizations
          </MenuItem>
        </Nav>
      </div>
    )
  }
}
