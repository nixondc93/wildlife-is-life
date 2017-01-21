class Result extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    const Card = MaterialUi.Card;

    return (
      <div>
        <Card>
          <h3><b>{this.props.taxonname}</b></h3>
          <h5>Scientific Name: {this.props.scientific_name}</h5>
          <p><b>Info:</b>{this.props.taxonomicnotes}</p>
          <p>{this.props.rationale}</p>
          <p><b></b></p>
          <p><b></b></p>
        </Card>

      </div>
    )
  }

}
