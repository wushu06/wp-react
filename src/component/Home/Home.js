import React, {Component} from 'react'
import Slick from '../Slick/Slick'
import WP from '../WP/Posts/Posts'
import Spinner from '../Layout/Spinner';
import $ from 'jquery'
import { SITE_ROOT } from '../Inc/Inc'
import Geocode from "react-geocode";
import HeroCarousel from '../WP/Blocks/HeroCarousel'
import SecondCarousel from '../WP/Blocks/SecondCarousel'



class Home extends Component
{
    constructor() {
        super();
        this.state = {
            home: [],
            id:'',
            title: '',
            content: '',
            gallery: '',
            secondCarousel:'',
            secTitle:'',
            image: '',
            loading: true

        }


    }

    componentDidMount =() => {
        const url      = window.location.href;
        const getID = this.props.match.params.id;
        //console.log(getID)

        let dataURL = SITE_ROOT+"/wp-json/wp/v2/pages/?slug=home&_embed";
        //let dataURL = "http://localhost/silcoates/wp-json/acf/v3/posts/36?_embed";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                // let img = res._embedded['wp:featuredmedia'] ? res._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                this.setState({
                    title: '',
                    content: '',
                    gallery: res[0].acf.blocks[0].gallery,
                    secondCarousel: res[0].acf.blocks[2].gallery,
                    secTitle: res[0].acf.blocks[2].title,
                    loading: false
                })


            })

    }
    render() {


        let home_content
        if(this.state.loading){
            home_content = <Spinner/>
        }else {
            home_content =
                <div>
                    <h2>{this.state.title}</h2>
                    <img src={this.state.image} alt=""/> <br/>
                    <div dangerouslySetInnerHTML={{__html: this.state.content}} />

                </div>
        }

        return(
            <section className="wrapper animsitionx" id="page">

                <HeroCarousel gallery={this.state.gallery} />
                <SecondCarousel sec={this.state.secondCarousel} secTitle={this.state.secTitle} />
                <WP/>

            </section>
        )
    }


};
export default Home;