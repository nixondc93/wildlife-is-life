class Organizations extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    const Card = MaterialUi.Card
    const CardTitle = MaterialUi.CardTitle;
    const CardText = MaterialUi.CardText;

    let orgs = this.props.orgs.map((org)=>{
      return (
        //I guess it's alright, but styling maybe should be separate here in a css directory or file
        <Card style={{margin: "10px 0 10px 18%", backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
          <CardTitle title={org.name}/>
          <CardText>
            {org.description}
          </CardText>
        </Card>
      )
    })

    return (
      <div>
          {orgs}
      </div>

    )
  }
}
