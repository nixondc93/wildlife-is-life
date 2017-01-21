
class Search extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      results: []
    };
  }






  render(){
    const RaisedButton = MaterialUi.RaisedButton;
    const TextField = MaterialUi.TextField

    return (
      <div>
        <h3>Search for Species</h3>
        <TextField placeholder="Species Name" ref="searchbar" onChange={this.props.handleChange.bind(this)}/>


      </div>
    )
  }

}
