class About extends React.Component {



  render(){
  const Card = MaterialUi.Card;
  const CardTitle = MaterialUi.CardTitle;
  const CardText = MaterialUi.CardText;
    return (
      <Card style={{marginLeft: "18%", backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
        <CardTitle title="Mission"/>
        <CardText>
          <p>
            My goal when developing Wildlife is life was to create a search engine for endangered species all over the globe. Currently there are over 4,000 species you can search for. On this site you can read about species habitats, conservation measures, and threats. You may also visit the organizations tab to see nonprofits who work to rehabilitate wildlife populations.
          </p>
        </CardText>

      </Card>
    );
  }
}
