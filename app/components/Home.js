// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tomeModel from '../models/tomeModel';
import TableOfContents from './TableOfContents';
import MarkdownPreview from './MarkdownPreview';
import mascot from '../assets/images/Mascot.svg';

class Home extends Component {
  props: {
    tome: tomeModel.schema
  }

  render() {
    const { tome } = this.props;

    return (
      <div className="page">
        <aside className="toc">
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
          <TableOfContents />
        </aside>

        <section className={`${tome.topic.key} content`}>
          <article>
            <MarkdownPreview source={tome.topic.content} />
          </article>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tome: state.tome
});

export default connect(mapStateToProps)(Home);
