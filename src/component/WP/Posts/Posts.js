import React, { Component } from 'react';
import MenuItem from '../../Header/Nav/Menu/Menu'
import {Link} from 'react-router-dom'
import { SITE_ROOT } from '../../Inc/Inc'
import { withStyles } from 'material-ui/styles';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            spacing: '16',
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
        const { classes } = this.props;
        const { spacing } = this.state;
      let posts = this.state.posts.map((post, index) => {


            return <div className="col-md-4 col-xs-12 block_blog_content" key={index}>
                    <Link to={'/post-single/'+post.slug} >
                        <div className="block_blog_wrapper_image">
                                <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="" width="200"/>

                                <div className="block_blog_wrapper_image_overlay">
                                    <span>Read the full article</span>
                                </div>
                        </div>
                    </Link>
                    <Link to={'/post-single/'+post.slug} >
                            <h2 className="title-bog height-fix">{post.title.rendered}</h2>
                    </Link>
                    <div className="row block_blog_meta">
                        <div className="col-md-4 col-xs-2">

                        </div>
                        <div className="col-md-8 col-xs-8">
                            <p>POSTED <strong>

                            </strong><br/>
                                BY <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>

        });




        return (
            <div>

                <div className="block_blog">
                    <div className="block_small_container">
                        <div className="row block_blog_title">
                            <div className="col-xs-12 col-md-12 break-mobile">
                                <h1>Latest Articles</h1>
                                <div className="title-separator">

                                </div>
                            </div>
                        </div>
                        <div className="clearfix">

                        </div>
                        <div id="lazyload">
                            <div className=" row">
                                {posts}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Posts;