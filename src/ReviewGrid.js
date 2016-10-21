import React, { Component, PropTypes } from 'react';
import Reviews from './Reviews';
import map from 'lodash/map';
import ReviewItem from './ReviewItem';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    height: '500px',
    margin: '0'
  },
  item: {
    backgroundColor: 'white',
    minWidth: '33.333%',
    height: '500px',
    display: 'flex',
    flexDirection: 'row',
    flex: '1'
  }
};

class ReviewGrid extends Component {

static propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.instanceOf(Reviews))
}

render() {
    const { reviews } = this.props;
    const reviewItems = map(reviews, (r, i) => <ReviewItem review={r} key={i} style={styles.item}/>);
    return (
      <div style={styles.container}>
          {reviewItems}
      </div>
    );
  }
}

export default ReviewGrid;
