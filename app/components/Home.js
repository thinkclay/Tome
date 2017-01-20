// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tomeModel from '../models/tomeModel';
import Navigation from './Navigation';
import mascot from '../assets/images/Mascot.svg';

class Home extends Component {
  props: {
    tome: tomeModel.schema
  }

  render() {
    const { tome } = this.props;

    return (
      <div className="page">
        <aside className="navigation">
          <header>
            <img src={mascot} alt="Gopher" />
            <p>
              Become a member of <strong>unicorn.tv</strong> and get access
              to premium tutorials and screencasts like this!
            </p>
            <a href="https://unicorn.tv" target="_blank" className="cta orange button" rel="noopener noreferrer">
              <i className="fa fa-user-o" />
              Become a Member
            </a>
          </header>
          <Navigation />
        </aside>

        <section className={`${tome.topic.key} content`}>
          <div className="inner" dangerouslySetInnerHTML={{ __html: tome.topic.content }} />
        </section>

        <aside className="guide">
          <div className="inner">
            <p>
              This tutorial is more fun than most. My favorite use for Go is building API’s.
              It is lightweight, has a robust standard library
              that does all the work you need it to, and is extremely straightforward.
              Many times, API’s are more of an anti-pattern and as such,
              a large framework or pattern focus can get in the way.
            </p>
            <p>
              This tutorial is more fun than most. My favorite use for Go is building API’s.
              It is lightweight, has a robust standard library
              that does all the work you need it to, and is extremely straightforward.
              Many times, API’s are more of an anti-pattern and as such,
              a large framework or pattern focus can get in the way.
            </p>
            <p>
              This tutorial is more fun than most. My favorite use for Go is building API’s.
              It is lightweight, has a robust standard library
              that does all the work you need it to, and is extremely straightforward.
              Many times, API’s are more of an anti-pattern and as such,
              a large framework or pattern focus can get in the way.
            </p>
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tome: state.tome
});

export default connect(mapStateToProps)(Home);
