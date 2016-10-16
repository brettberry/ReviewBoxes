import React, { Component } from 'react';

const styles = {
  container: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: 'rebeccapurple',
    border: 'none',
    color: 'white',
    padding: 20,
    marginBottom: 10,
    minWidth: 200,
    fontSize: 20,
    fontWeight: 'lighter',
    outline: 0
  },
  header: {
    fontSize: 100,
    fontWeight: 'lighter'
  }
};

class Timer extends Component {
  state = {
    elapsedTime: 0,
    timerIsRunning: false
  }

  startTimer() {
    const { timerIsRunning } = this.state;
    if (!timerIsRunning) {
      this.setState({
        timerIsRunning: true
      });
      this.interval = setInterval(() => {
        this.setState({
          elapsedTime: this.state.elapsedTime + 100
        });
      }, 100);
    }
  }

  stopTimer() {
    this.setState({
      timerIsRunning: false
    });
    clearInterval(this.interval);
  }

  render() {
    const { elapsedTime } = this.state;
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>
          {elapsedTime / 1000}
        </h1>
        <button onClick={this.startTimer.bind(this)} style={styles.button}>
          start
        </button>
        <button onClick={this.stopTimer.bind(this)} style={styles.button}>
          pause
        </button>
      </div>
    );
  }
}

export default Timer;
