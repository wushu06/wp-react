import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../Layout/Spinner';
import { SITE_ROOT } from '../../Inc/Inc'
class Pages extends Component {
    constructor() {
        super();
        this.state = {
            pages: [],
            loading: true


        }
    }

    componentDidMount() {
        let dataURL = SITE_ROOT+"/wp-json/wp/v2/pages?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
              //  let img = res._embedded['wp:featuredmedia'] ? res._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                this.setState({
                    pages: res,
                    loading: false

                })

             //console.log(res)
             
            })
          

    }





    render() {

        let pages

        if(this.state.loading){
            pages = <Spinner/>
        }else{
            pages =  this.state.pages.map( (page, key)=> {

                return (
                    <div>
                        <Link to={'/page-single/'+page.slug}> <h2>{page.title.rendered}</h2></Link>
                    </div>
                )
            })
        }

        return (
            <div>


                {pages}


            </div>
        )
    }
}
export default Pages;