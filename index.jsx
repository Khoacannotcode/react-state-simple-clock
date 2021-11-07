class Clock extends React.Component {
  // Define the state of the component
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  // Define the method that change state
  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  // Define setTimer method
  componentDidMount() {
    this.setTimer();
  }
  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  // Define getTime method
  getTime() {
    const current_time = new Date();
    return {
      hour: current_time.getHours(),
      minute: current_time.getMinutes(),
      second: current_time.getSeconds(),
      ampm: current_time.getHours() >= 12 ? "pm" : "am"
    }
  }

  // FINALLY: RENDER FUNCTION
  render()
  {
    const {hour, minute, second, ampm } = this.state;
    return (
      <div className = "clock">
        {hour === 0 ? 12 : hour > 12 ? hour-12 : hour}:
        {/* padding for minute */}
        {minute > 9 ? minute : '0${minute}'}:
        {/* padidng for second */}
        {second > 9 ? second : '0${second}'} {ampm}
      </div>
    );
  }

}

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Clock />, rootElement
)