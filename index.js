class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: this.getRandomSymbol(),
      s2: this.getRandomSymbol(),
      s3: this.getRandomSymbol(),
    };
    this.rerollSlots = this.rerollSlots.bind(this);
  }

  getRandomSymbol() {
    const symbols = ["🍒", "🍊", "🍑", "🍇", "🍋"];
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  rerollSlots() {
    this.setState({
      s1: this.getRandomSymbol(),
      s2: this.getRandomSymbol(),
      s3: this.getRandomSymbol(),
    });
  }

  render() {
    return (
      <div>
        <h1>Slot Machine</h1>
        <Slot s1={this.state.s1} s2={this.state.s2} s3={this.state.s3} />
        <Rerollbtn onReroll={this.rerollSlots} />
      </div>
    );
  }
}

// Use createRoot since render is deprecated in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
