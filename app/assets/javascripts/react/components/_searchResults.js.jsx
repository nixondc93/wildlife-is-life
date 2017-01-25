class SearchResults extends React.Component{

  constructor(props){
    super(props);

  }

  speciesImages

  render(){
    const Card = MaterialUi.Card;
    const CardTitle = MaterialUi.CardTitle;
    const CardText = MaterialUi.CardText;
    let result = this.props.results.map((result) => {
      let expandable = result.taxonomicnotes !== null

      return (
        <div key={result.id}>
          <Card style={{margin: "10px 0 10px 18%", backgroundColor: "rgba(255, 255, 255, 0.85)"}}>
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
                  "No information yet" : `<h3><b>Description:</b></h3>  ${result.taxonomicnotes}`}}
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
                  result.habitat == null ?  "" : `<h3><b>Habitat: </b> </h3>  ${result.habitat}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>
              <span dangerouslySetInnerHTML={{__html:
                  result.population == null ?  "" : `<h3><b>Population:</b></h3> <b>Trend: ${result.populationtrend}</b><br/><br/>  ${result.population}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>
              <span dangerouslySetInnerHTML={{__html:
                  result.assesments == null ?  "" : `${result.assesments}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>
              <span dangerouslySetInnerHTML={{__html:
                  result.conservationmeasures == null ?  "" : `<h3><b>Conservation Measures:</b></h3> ${result.conservationmeasures}`}}
              >
              </span>
            </CardText>
            <CardText expandable={true}>
              <span dangerouslySetInnerHTML={{__html:
                  result.threats == null ?  "" : `<h3><b>Threats:</b></h3> ${result.threats}`}}
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
