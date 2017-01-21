
class Search extends React.Component{

  handleClick(){
    console.log("click")
  }

  render(){
    const RaisedButton = MaterialUi.RaisedButton;
    const TextField = MaterialUi.TextField

    return (
      <form>
        <TextField placeholder="Species Name"  />
        <RaisedButton label="Search" onClick={this.handleClick}/>
      </form>
    )
  }

}
