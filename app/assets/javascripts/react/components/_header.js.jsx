class Header extends React.Component {
  render() {
    const font = MyRawTheme.fontFamily
    let styles = {
      marginLeft: "41%",
      fontFamily: font,
      color: "rgba(255, 255, 255, .8)",
      letterSpacing: "0.3em",
      fontSize: "2em"
    }

    return (
      <div
        style={styles}
      >
        <h1>Wildlife is Life</h1>
      </div>
    )
  }
};
