import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';
import { SITE_ROOT } from '../../../Inc/Inc'
import FullWidth from '../../Blocks/FullWidth'


class Single extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            slug:'',
            id:'',
            title: '',
            content: '',
            image: '',
            loading: true

        }


    }

    SOMEFUN() {
        const url      = window.location.href;
        const getID = this.props.match.params.id;


        let dataURL = SITE_ROOT+"/wp-json/wp/v2/pages?slug="+getID+"&_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
             
                let img = res[0]._embedded['wp:featuredmedia'] ? res[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';

                this.setState({
                    single: res[0],
                    id: res[0].id,
                    slug:   getID,
                    title: res[0].title.rendered === '' ?  res[0].acf.blocks[0].title : res[0].title.rendered,
                    content: res[0].content.rendered === '' ? res[0].acf.blocks[0].content:  res[0].content.rendered,
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
           if(this.state.slug === 'contact') {
            single_content = <FullWidth data={this.state}/>
           }else {
            single_content =
            <div>
                <h2>{this.state.title} {this.state.id}</h2>
                <img src={this.state.image} alt=""/> <br/>
                <div dangerouslySetInnerHTML={{__html: this.state.content}} />
            </div>
           }
           
        }


        return (
            <div>
                <h2>Single{this.props.match.params.id}</h2>
                {this.SOMEFUN()}
                {single_content}
                

            </div>
        )
    }
}
export default Single;