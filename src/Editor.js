import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import {EditorState, RichUtils} from 'draft-js';
import './Editor.css';
import Editor from 'draft-js-plugins-editor';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        }

    componentDidMount() {
        this.focus();
    }
    onChange = (editorState) => {
        this.setState({ editorState });
    };


     focus = () => {this.editor.focus();
    }

    _onBoldClick (e) {
        e.preventDefault()
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState, 'BOLD'))
    }
    _onItalicClick (e) {
        e.preventDefault()
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState, 'ITALIC'))
    }

    render() {
    return (
        <div className="editor" onClick={this.focus}>
            <button className='button' onMouseDown={this._onBoldClick.bind(this)}>Tučné</button>
            <button className='button' onMouseDown={this._onItalicClick.bind(this)}>Šikmé</button>
       <Editor
    editorState={this.state.editorState}
    onChange={this.onChange}
    ref={(element) => { this.editor = element; }}
    placeholder="Zadaj text..."
    spellCheck
    />
    </div>
);
}
}

export default MyEditor;