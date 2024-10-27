class Slot extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    //prettier-ignore
    const winner = (s1 === s2) && (s2 === s3);
    const resultStyle = {
      color: winner ? "green" : "red",
    };
    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        <p style={resultStyle}>{winner ? "Winner!" : "Loser!"}</p>
      </div>
    );
  }
}

window.Slot = Slot; // Make Slot available globally
