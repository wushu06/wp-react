import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { SITE_ROOT } from '../../Inc/Inc'
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
       // const getID = window.location.search.slice(1);
        const getID = this.props.match.params.id;


        let dataURL = SITE_ROOT+"/wp-json/wp/v2/posts?slug="+getID;
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res,
                    id: res[0].id,
                    title: res[0].title.rendered,
                    content: res[0].content.rendered,                   
                })
                
            })


    }
    c  (){
       
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