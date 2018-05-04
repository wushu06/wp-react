import React, { Component } from 'react';
import MenuItem from '../../Header/Nav/Menu/Menu'
import {Link} from 'react-router-dom'
import { SITE_ROOT } from '../../Inc/Inc'

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],

        }
    }
    componentDidMount() {
        let dataURL = SITE_ROOT+"/wp-json/wp/v2/posts?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })

    }

    render() {

      let posts = this.state.posts.map((post, index) => {


            return <div key={index}>

                <p><strong>Title:</strong> {post.title.rendered}</p>
                <Link to={'/post-single/'+post.slug}>find out more</Link>
                <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="" width="200"/>

            </div>
        });




        return (
            <div>
                <h2>Wordpress feed</h2>

                {posts}
            </div>
        )
    }
}
export default Posts;