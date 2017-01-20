// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuActions from '../actions/menuActions';

class TopBar extends Component {
  props: {
    changeSection: () => void,
    changeTopic: () => void
  }

  render() {
    const { changeSection, changeTopic } = this.props;

    return (
      <header className="title-bar">
        <span className="site actions" />
        <nav className="content actions">
          <div className="section">
            <button className="zone" onClick={changeSection}>
              <div className="current">
                <i className="fa fa-angle-down" />
                <span className="label">Course:</span>
                <strong>Building a RESTful API</strong>
              </div>
              <ul>
                <li>Section A</li>
                <li>Section B</li>
                <li>Section C</li>
              </ul>
            </button>
          </div>

          <div className="topic">
            <button className="zone" onClick={changeTopic}>
              <div className="current">
                <i className="fa fa-angle-down" />
                <span className="label">Topic:</span>
                <strong>Building a RESTful API</strong>
              </div>
              <ul>
                <li>Topic A</li>
                <li>Topic B</li>
                <li>Topic C</li>
              </ul>
            </button>
          </div>
        </nav>
        <span className="guide actions" />
      </header>
    );
  }
}


function mapStateToProps(state) {
  return {
    overlay: state.overlay
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(menuActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
