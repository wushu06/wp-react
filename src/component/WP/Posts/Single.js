import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Single extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            id:'',
            title: '',
            content: '',
            image: '',

        }
    }
    componentDidMount() {
        const url      = window.location.href;
        const getID = window.location.search.slice(1);


        let dataURL = "http://localhost/silcoates/wp-json/wp/v2/posts/"+getID+"?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                let img = res._embedded['wp:featuredmedia'] ? res._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                this.setState({
                    posts: res,
                    id: res.id,
                    title: res.title.rendered,
                    content: res.content.rendered,
                    image: img
                })
              console.log(res);

            })


    }
    c  (){
        console.log(this.state.content  )
        return(
            <div>
                {   this.state.content        }
            </div>
        )


    }


    render() {



       let m =  this.state.content



        return (
            <div>
                <h2>Single Posts</h2>
                <h4 id={this.state.title+this.state.id}>{this.state.title}</h4>
                <img src={this.state.image} alt=""/>

                <div dangerouslySetInnerHTML={{__html: m}} />

            </div>
        )
    }
}
export default Single;