// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuActions from '../actions/menuActions';

class Navigation extends Component {
  props: {
    changeChapter: () => void,
    changeSection: () => void
  }

  render() {
    const { changeChapter, changeSection } = this.props;

    return (
      <header className="title-bar">
        <span className="site actions" />
        <nav className="content actions">
          <div className="section">
            <button className="zone" onClick={changeChapter}>
              <div className="current">
                <i className="fa fa-angle-down" />
                <span className="label">Chapter:</span>
                <strong>Building a RESTful API</strong>
              </div>
            </button>
          </div>

          <div className="topic">
            <button className="zone" onClick={changeSection}>
              <div className="current">
                <i className="fa fa-angle-down" />
                <span className="label">Section:</span>
                <strong>Building a RESTful API</strong>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
