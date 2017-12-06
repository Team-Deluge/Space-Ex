
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  username: 'ownerman'
});

const OwnerContainer = (props) => {
  console.log('inside owner container')
  console.log(props)
  return (
    <div>
      <h2>
        Welcome Owner {props.username} !!!
      </h2>
    </div>
  );
}

export default connect(mapStateToProps)(OwnerContainer);
