import React, { Component } from 'react';
import ReviewGrid from './ReviewGrid';
import Reviews from './Reviews';
import map from 'lodash/map';
import data from './data.json';

const reviews = map(data.reviews, r => new Reviews(r));

const styles = {
  header: {
      fontFamily: '"Arial","Helvetica",sans-serif',
      fontWeight: 'lighter',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '30px'
    },
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Recent reviews from happy people</h2>
        <ReviewGrid reviews={reviews}/>
      </div>
    );
  }
}

export default Home;
