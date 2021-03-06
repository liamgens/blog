import React, { Component } from 'react';
import './sidebar.css';
import 'font-awesome/css/font-awesome.min.css';

const div_style = {
    backgroundColor: '#4a90e2',
    color: 'white',
    fontFamily: 'helvetica',
    padding: '10px',
    fontSize: '28px',
}

const span_style_1 = {
    float: 'right',
    width: '50%',
    textAlign: 'right'
}

const span_style_2 = {
    width: '50%'
}

class TopBar extends Component {
    render() {
        return (
            <div style={div_style}>
                <a href="/" className="links"><span style={span_style_2}>Liam Gensel</span></a>
                <span style={span_style_1}>
                    <a className="links" href="https://www.github.com/liamgens"><i class="fa fa-lg fa-github" aria-hidden="true"></i></a>
                    <a className="links" href="https://www.facebook.com/profile.php?id=100009767584462"><i class="fa fa-lg fa-facebook-official" aria-hidden="true"></i></a>
                    <a className="links" href="https://www.twitter.com/liamgens"><i class="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
                </span>
            </div>
        );
    }

}

export default TopBar