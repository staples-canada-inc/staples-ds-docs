import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export class CodeBlock extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  }

  static defaultProps = {
    language: null,
  }

  render() {
    const { language, value } = this.props
    return (
      <SyntaxHighlighter language="html" style={darcula}>
        {this.props.children}
      </SyntaxHighlighter>
    )
  }
}

export default CodeBlock
