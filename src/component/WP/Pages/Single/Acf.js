import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';
import $ from 'jquery'



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
        const getID = this.props.match.params.id;
        //console.log(getID)

        let dataURL = "http://localhost/silcoates/wp-json/wp/v2/pages/"+getID+"?_embed";
        //let dataURL = "http://localhost/silcoates/wp-json/acf/v3/posts/36?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                // let img = res._embedded['wp:featuredmedia'] ? res._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                this.setState({


                    title: res.acf.blocks[0].title,
                    content: res.acf.blocks[0].content,
                    loading: false
                })

               // console.log(res);
                $('#gform_2').attr('action', 'http://localhost/silcoates/contact/');
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
                    <div dangerouslySetInnerHTML={{__html: this.state.content}} />

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

