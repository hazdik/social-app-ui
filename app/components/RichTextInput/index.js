/**
*
* RichTextInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';

import Options from './options';
import Wrapper from './Wrapper';

export default class RichTextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(props.value),
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(editorState) {
    this.setState({
      editorState,
    });

    this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }

  render() {
    const { editorState } = this.state;

    return (
      <div className="c-rich-text-input">
        <Wrapper>
          { !this.props.noLabel ?
            <label htmlFor={this.props.name}>
              {this.props.placeholder}
            </label>
            : false
          }
          <Editor
            editorState={editorState}
            wrapperClassName="rich-text-input-wrapper"
            editorClassName="rich-text-input-editor"
            onEditorStateChange={this.handleChange}
            toolbar={Options}
            className={this.props.className}
            placeholder={this.props.placeholder}
          />
        </Wrapper>
      </div>
    );
  }
}

RichTextInput.propTypes = {
  noLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
