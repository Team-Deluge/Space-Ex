
import React from 'react';
import { connect } from 'react-redux';
import OwnerRes from '../components/OwnerRes';
// import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  username: 'ownerman',
  reservationList: [],
  spaces: [],
  pending: [],
});

const OwnerContainer = (props) => {
  console.log('inside owner container')
  return (
    <div>
      <h2>
        Welcome Owner {props.username} !!!
      </h2>
      <OwnerRes
        // put in props here
        reservationList={props.reservationList}
      />
    </div>
  );
}

export default connect(mapStateToProps)(OwnerContainer);
