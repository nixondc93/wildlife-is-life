
class Search extends React.Component{

  constructor(props){
    super(props);
  }

  handleClick(e){
    e.target.value = ''
  }

  render(){
    const TextField = MaterialUi.TextField;
    const CardTitle = MaterialUi.CardTitle;

    return (
      <div>
        <CardTitle>Search for Species</CardTitle>
        <TextField placeholder="Species Name" onChange={this.props.handleChange} onClick={this.handleClick}/>
      </div>
    )
  }

}
