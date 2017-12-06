
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import OwnerRes from '../components/OwnerRes'
import OwnerSpaces from '../components/OwnerSpaces'
// import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  // hard coded state !! remove !!
  username: 'ownerman',
  reservationList: 'reslist'.split(''),
  pending: 'pendinglist'.split(''),
  spaces: [{
    _id: 1,
    name: 'codesmath',
    location: 'player a vister',
    description: 'ver noice',
    rating: '42',
    picture: 'https://memegenerator.net/img/instances/500x/62087528/pls-hurry.jpg',
    tags: { wifi: true, noiseTolerance: 'high' },
  },
  {
    _id: 2,
    name: 'denksmith',
    location: 'a pimp named slickback',
    description: 'sikkkk',
    rating: '69',
    picture: 'http://i0.kym-cdn.com/photos/images/masonry/001/217/695/0fb.jpg',
    tags: { wifi: false, noiseTolerance: 'low' },
  }],
});

// const mapDispatchToProps = dispatch => ({
//
// });

const OwnerContainer = (props) => {
  console.log(props)
  return (
    <div className='owner-container'>
      {props.username} Container
      <OwnerRes
        reservationList={props.reservationList}
        pending={props.pending}
      />
      <OwnerSpaces
        spaces={props.spaces}
      />
      <Link to='/createspace'>Create a Space!</Link>
    </div>
  );
}

// add mapDispatchToProps
export default connect(mapStateToProps)(OwnerContainer);
