import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <p>This is where you begin</p>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {}
}


export default connect(mapStateToProps)(App);
