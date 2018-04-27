import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';



class Single extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            id:'',
            title: '',
            content: '',
            image: '',
            loading: true

        }


    }

    componentDidMount() {
        const url      = window.location.href;
        const getID = window.location.search.slice(1);


        let dataURL = "http://localhost/silcoates/wp-json/wp/v2/pages/"+getID+"?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                let img = res._embedded['wp:featuredmedia'] ? res._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                this.setState({
                    single: res,
                    id: res.id,
                    title: res.title.rendered,
                    content: res.content.rendered,
                    image: img,
                    loading: false
                })


            })


    }

  render() {
        let single_content
        if(this.state.loading){
            single_content = <Spinner/>
        }else {
            single_content =
                <div>
                    <h2>{this.state.title}</h2>
                    <img src={this.state.image} alt=""/> <br/>
                    {this.state.content}
                </div>
        }


        return (
            <div>
                <h2>Single</h2>

                {single_content}

            </div>
        )
    }
}
export default Single;