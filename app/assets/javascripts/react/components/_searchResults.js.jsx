class SearchResults extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      results: this.props.results
    }

  }

  xmlToJson(xml){

  	// Create the return object
  	var obj = {};

  	if (xml.nodeType == 1) { // element
  		// do attributes
  		if (xml.attributes.length > 0) {
  		obj["@attributes"] = {};
  			for (var j = 0; j < xml.attributes.length; j++) {
  				var attribute = xml.attributes.item(j);
  				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
  			}
  		}
  	} else if (xml.nodeType == 3) { // text
  		obj = xml.nodeValue;
  	}

  	// do children
  	if (xml.hasChildNodes()) {
  		for(var i = 0; i < xml.childNodes.length; i++) {
  			var item = xml.childNodes.item(i);
  			var nodeName = item.nodeName;
  			if (typeof(obj[nodeName]) == "undefined") {
  				obj[nodeName] = this.xmlToJson(item);
  			} else {
  				if (typeof(obj[nodeName].push) == "undefined") {
  					var old = obj[nodeName];
  					obj[nodeName] = [];
  					obj[nodeName].push(old);
  				}
  				obj[nodeName].push(this.xmlToJson(item));
  			}
  		}
  	}
  	return obj;
  }

  componentWillMount(){
    this.state.results.map((result, idx) => {
      let nameArr = result.scientific_name.split(' ')
      result.image = undefined;
      $.ajax({
        url: `https://services.natureserve.org/idd/rest/ns/v1/globalSpecies/images?scientificName=${nameArr[0]}%20${nameArr[1]}`,
        dataType: "xml",
        success: (response) => {
          result.image = this.xmlToJson(response).images.image[0]["dc:identifier"]["#text"]
          this.setState({results: this.state.results})
        },
        error: (err) => {
          console.log("fetching images failed");
        }
      });
    });
    ;

  }

  render(){
    const Card = MaterialUi.Card;
    const CardTitle = MaterialUi.CardTitle;
    const CardText = MaterialUi.CardText;
    const CardMedia = MaterialUi.CardMedia;

    let result = this.state.results.map((result, idx) => {
      let expandable = result.taxonomicnotes !== null || result.habitat !== null || result.population !== null

      return (
        <div key={result.id}>
          <Card style={{margin: "10px 0 10px 18%", backgroundColor: "rgba(255, 255, 255, 0.85)"}}>

            <CardTitle
              showExpandableButton={expandable}
              actAsExpander={expandable}
              title={result.taxonname}
              subtitle={`Endangered Status: ${result.assesments[0].split('\"')[5]}`}
            >
            {result.image !== undefined &&
            <CardMedia expandable={true} style={{float: "right"}}>
              <image src={result.image} style={{height: "200px", width: "200px", marginRight: "20px"}}/>
            </CardMedia>}
            </CardTitle>
            <CardText>
              <span
                dangerouslySetInnerHTML=
                {{__html:  result.taxonomicnotes == null ?
                  `<b>Scientific Name:</b> ${result.scientific_name} <br><br> No description yet`: `<b>Scientific Name:</b> ${result.scientific_name} <br><br> <h3><b>Description:</b></h3>  ${result.taxonomicnotes}`}}
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
