import React, {Component} from 'react';
import './App.css';
import HeaderBar from'./markdown-editor/HeaderBar';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { defaultText } from './markdown-editor/defaultText';
marked.setOptions({
  breaks: true
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        text: defaultText
    }
}

handleChange = event => {
  const text = event.target.value
  this.setState({ text })
}

renderText = text => {
  const __html = DOMPurify.sanitize(marked(text), {breaks: true})

  return { __html }
}

componentDidMount() {
  const text = localStorage.getItem('stockText')
  if (text) {
    this.setState({ text })
  }
  else {
    this.setState({ text: defaultText })
  }
}

componentDidUpdate() {
  const { text } = this.state
  localStorage.setItem('stockText', text)
}


  render() {
    return (
      <div className="App">
        
        <div className="editor-wrap">
          <HeaderBar titleDisplay="Saisir le texte en MarkDown :" />
          <textarea value={this.state.text} onChange={this.handleChange} name="text" cols="70" rows="40" id="editor">truc</textarea>
        </div>

        <div className="preview-wrap">
          <HeaderBar titleDisplay="Rendu HTML :" />
          <div id="preview" dangerouslySetInnerHTML={this.renderText(this.state.text)} />
        </div>
      </div>
    );
  }

}

export default App;