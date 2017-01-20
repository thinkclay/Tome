// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import Overlay from '../components/Overlay';
import * as overlayModel from '../models/overlayModel';

class App extends Component {
  props: {
    children: HTMLElement,
    overlay: overlayModel.schema
  };

  render() {
    const { overlay, children } = this.props;

    return (
      <div className="app">
        <main className={overlay.visible ? 'blur' : null}>
          <TopBar />
          {children}
        </main>

        {overlay.visible ? <Overlay /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
