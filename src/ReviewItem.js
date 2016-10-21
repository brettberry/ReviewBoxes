import React, { Component, PropTypes } from 'react';
import Reviews from './Reviews';
import Star from 'react-icons/lib/fa/star';
import times from 'lodash/times';

const styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: '33.333%',
    height: '500px',
    padding: '9px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  visibleBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '445px',
    minWidth: '100%',
    paddingRight: '18px',
    paddingLeft: '18px',
    paddingBottom: '6px',
    paddingTop: '50px',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginTop: '12px',
    marginBottom: '6px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12pt'
  },
  profilePic: {
    borderRadius: '50%',
    display: 'flex',
    maxHeight: '75px',
    maxWidth: '75px',
    marginBottom: '-37.5px',
    position: 'relative',
    zIndex: '1'
  },
  comment: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginTop: '12px',
    marginBottom: '24px',
    fontSize: '11pt',
    textAlign: 'center'
  },
  photo: {
    width: '250px',
    height: '250px',
    marginBottom: '6px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  description: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '9pt',
      textAlign: 'center'
  },
  greyText: {
    color: '#777'
  },
  star: {
    margin: '2px',
    color: 'rgb(255, 163, 0)'
  }
};

class ReviewItem extends Component {

  static propTypes = {
    review: PropTypes.instanceOf(Reviews)
  }

  render() {
    const { review } = this.props;
    const imageStyles = { backgroundImage: `url(${review.getPhoto()})` };
    const stars = times(5, () => <Star style={styles.star}/>);
    return (
      <div style={styles.container}>
        <img src={review.getProfilePic()} style={styles.profilePic}/>
        <div style={styles.visibleBox}>
          <span style={styles.title}>
            <strong>{review.getName()}</strong>
            <span style={styles.greyText}>&nbsp;wrote on {review.getDate()}</span>
          </span>
          <div>{stars}</div>
          <span style={styles.comment}>{review.getComment()}</span>
          <div style={{ ...styles.photo, ...imageStyles }}/>
          <a style={styles.description} href={review.getLink()}>{review.getDescription()}</a>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
