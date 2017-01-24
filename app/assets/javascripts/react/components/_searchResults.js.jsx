class SearchResults extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const Card = MaterialUi.Card;
    const CardTitle = MaterialUi.CardTitle;
    const CardText = MaterialUi.CardText;
    let result = this.props.results.map((result) => {
      return (
        <div key={result.id}>
          <Card style={{marginLeft: "18%", backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <CardTitle
              showExpandableButton={true}
              actAsExpander={true}
              title={result.taxonname}
              subtitle={`Scientific Name: ${result.scientific_name}`}
            />
            <CardText>
              <span
                dangerouslySetInnerHTML=
                {{__html:  result.taxonomicnotes == null ?
                  "No info yet" : `<b>Info: </b>  ${result.taxonomicnotes}`}}
              >
              </span>
            </CardText>
          </Card>

        </div>
      )
    })
    return (
      <div>
        <h2> Search Results </h2>
        {this.props.results.length === 0 ? <CardTitle title="Search Again"/> : result}
      </div>
    )
  }

}
