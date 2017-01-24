class SearchResults extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    const Card = MaterialUi.Card;
    const CardTitle = MaterialUi.CardTitle;
    const CardText = MaterialUi.CardText;
    let result = this.props.results.map((result) => {
      let expandable = result.taxonomicnotes !== null

      return (
        <div key={result.id}>
          <Card style={{margin: "10px 0 10px 18%", backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <CardTitle
              showExpandableButton={expandable}
              actAsExpander={expandable}
              title={result.taxonname}
              subtitle={`Scientific Name: ${result.scientific_name}`}
            />
            <CardText>
              <span
                dangerouslySetInnerHTML=
                {{__html:  result.taxonomicnotes == null ?
                  "No info yet" : `<h3><b>Info:</b></h3>  ${result.taxonomicnotes}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>
              <span dangerouslySetInnerHTML={{__html:
                  result.geographicrange == null ?  "" : `<h3><b>Geographic Range: </b></h3><br/> ${result.geographicrange}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>
              <span dangerouslySetInnerHTML={{__html:
                  result.habitat == null ?  "" : `<h3><b>Habitat: </b> </h3><br/>  ${result.habitat}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>

              <span dangerouslySetInnerHTML={{__html:
                  result.population == null ?  "" : `<h3><b>Population:</b></h3> <b>Trend: ${result.populationtrend}</b><br/><br/>  ${result.population}`}}
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
