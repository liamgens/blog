import React, { Component } from 'react';
import './sidebar.css'
const ReactMarkdown = require('react-markdown')



class PostView extends Component {
  constructor(props) {
    super(props);

    this.state = {
        post: [],
    };
}

  componentDidMount(){
    const { match: { params } } = this.props;
    const url = "http://localhost:5000/posts/" + params.id;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ post: data }));
  }

  render() {

    var m_title = "# " + this.state.post.title;

    return (
        <div id="posts">
            <ReactMarkdown class="noPadding" source={m_title}></ReactMarkdown>
            <ReactMarkdown class="noPadding" source={this.state.post.content}></ReactMarkdown>
        </div> 
    );
  }
}

export default PostView;
