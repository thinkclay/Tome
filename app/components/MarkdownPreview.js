// @flow
import React, { Component } from 'react';
import marked from 'marked';
import uuid from 'uuid/v4';
// import hljs from 'highlight.js';

type tokenType = {
  depth?: number,
  text?: string,
  ordered?: boolean,
  type: string
};

type lexemesType = Array<tokenType>;

const parseInline = (raw: string) => {
  const tokens = marked.lexer(raw);
  const parsed = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const tok = tokens[i];
    const text = tok.text || '';

    switch (tok.type) {
      case 'strong' :
        console.log('strong');
        parsed.push(<strong>{text}</strong>);
        break;
      case 'em' :
        console.log('em');
        parsed.push(<em>{text}</em>);
        break;
      default :
        console.log(tok);
        parsed.push(text);
        break;
    }
  }

  return parsed.filter(lexeme => lexeme != null);
};

const customParser = (tokens: lexemesType) => {
  const parsed = [];

  for (let i = 0; i < tokens.length; i += 1) {
    console.log(tokens[i]);

    const tok = tokens[i];
    let ref = `child${i}`;
    let text = tok.text || '';

    if (tok.text) {
      const match = tok.text.match(/(?!\s*\|).*(?=\|)/);

      if (match && match.length > 0) {
        ref = match[0];
        text = text.replace(/(\s*\|).*(\|)/, '');
      }
    }

    switch (tok.type) {
      case 'heading':
        switch (tok.depth) {
          case 1 :
            parsed.push(<h1 id={ref} ref={ref} key={uuid()}>{text}</h1>);
            break;
          case 2 :
            parsed.push(<h2 id={ref} ref={ref} key={uuid()}>{text}</h2>);
            break;
          case 3 :
            parsed.push(<h3 id={ref} ref={ref} key={uuid()}>{text}</h3>);
            break;
          case 4 :
            parsed.push(<h4 id={ref} ref={ref} key={uuid()}>{text}</h4>);
            break;
          case 5 :
            parsed.push(<h5 id={ref} ref={ref} key={uuid()}>{text}</h5>);
            break;
          case 6 :
            parsed.push(<h6 id={ref} ref={ref} key={uuid()}>{text}</h6>);
            break;
          default :
            break;
        }
        break;
      case 'paragraph' :
        parsed.push(<p id={ref} ref={ref} key={uuid()}>{parseInline(text)}</p>);
        break;
      case 'list_start' :
        console.log('<ul>');
        // const start = i;
        // let end = start;
        //
        // do { end += 1; } while (tokens[end].type !== 'list_end');

        // let iter = i + 1;
        // const start = tokens[iter];
        //
        // do {
        //   switch (start[iter].type) {
        //     case 'list_item_start' :
        //       console.log('<li>');
        //       break;
        //     case 'list_item_end' :
        //       console.log('</li>');
        //       break;
        //     default :
        //       console.log('Inner:', start[iter].type);
        //       break;
        //   }
        //
        //   iter += 1;
        // } while (start[iter].type !== 'list_end');
        //
        // parsed.push(<ul />);
        break;
      case 'list_end' :
        console.log('</ul>');
        break;
      default:
        console.log('TOKEN', tok);
        break;
    }
  }

  // const parsed = lexemes.map((lexeme, index) => parseToken(lexeme, index));
  console.log('PARSED:', parsed.filter(lexeme => lexeme != null));

  return parsed.filter(lexeme => lexeme != null);
};

class MarkdownPreview extends Component {
  props: {
    source: string
  }

  render() {
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => (
      `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${title}">${text}</a>`
    );
    // const html = marked(this.props.source || '', { renderer });

    const tokens = marked.lexer(this.props.source);

    return (
      <div>
        {customParser(tokens)}
      </div>
    );
  }
}

export default MarkdownPreview;


// import React from 'react';
// import marked from 'marked';
// import hljs from 'highlight.js';
//
// export default class MarkdownPreview extends React.Component {
//   constructor(props) {
//     super(props);
//
//     let options = {};
//     if (this.props.markedOptions) {
//       options = this.props.markedOptions;
//     }
//
//     options = {
//       gfm: true,
//       tables: true,
//       breaks: false,
//       pedantic: false,
//       sanitize: true,
//       smartLists: true,
//       smartypants: false,
//       langPrefix: 'hljs ',
//       ...options,
//     };
//
//     if (typeof hljs !== 'undefined') {
//       options = {
//         ...options,
//         highlight: (code, lang) => {
//           console.log(code);
//           if (lang && hljs.getLanguage(lang)) {
//             return hljs.highlight(lang, code).value;
//           }
//
//           return code;
//         },
//       };
//     }
//
//     marked.setOptions(options);
//   }
//
//   render() {
//     const { value, className } = this.props;
//     const renderer = new marked.Renderer();
//     renderer.link = (href, title, text) => (
//       `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${title}">${text}</a>`
//     );
//     const html = marked(value || '', { renderer });
//
//     return (
//       <div
//         dangerouslySetInnerHTML={{ __html: html }}
//         className={className}
//       />
//     );
//   }
// }
//
// MarkdownPreview.propTypes = {
//   value: React.PropTypes.string.isRequired,
//   className: React.PropTypes.string,
//   markedOptions: React.PropTypes.object,
// };
//
// MarkdownPreview.defaultProps = {
//   value: '',
// };
