import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../Layout/Spinner';
import Lightbox from 'react-images';
import $ from 'jquery'


class Single extends  React.Component {
    constructor() {
        super();
        this.state = {}

    }

    componentDidMount() {
        this.setState({
            ...this.props.data.single[0]
        })    
    }
    
    render() {
       
        return (
            <div>
                <h2>Full width --Block</h2>
              {}
            </div>
        )
    }
}
export default Single;

