/* eslint-disable prettier/prettier */
import React, { Component } from 'react'

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.commentBox = React.createRef()
  }

  componentDidMount() {
    let scriptElement = document.createElement('script')
    scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
    scriptElement.setAttribute('crossorigin', 'anonymous')
    scriptElement.setAttribute('async', true)
    scriptElement.setAttribute('repo', 'https://github.com/apeli23/finblg.git')
    scriptElement.setAttribute('issue-term', 'url')
    scriptElement.setAttribute('theme', 'preferred-color-scheme"')
    this.commentBox.current.appendChild(scriptElement)
  }

  render() {
    return (
      <div style={{ width: '100%' }} id="comments">
        <div ref={this.commentBox}></div>
      </div>
    )
  }
}
