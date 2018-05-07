import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../Layout/Spinner';
import Slider from 'react-slick'
import Lightbox from 'react-images';
import $ from 'jquery'
import { SITE_ROOT, G_FORM } from '../../Inc/Inc'

class HeroCarousel extends  React.Component {
    constructor() {
        super();
        this.state = {

        }

    }

    componentDidMount() {



    }


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
         const gallery =  this.props.gallery
         let heroCarousel = Object.keys( gallery  ).map( igKey => {
             //console.log(gallery[igKey].image.url)
             const divStyle = {
                height: '90vh',
                 backgroundImage: 'url(' + gallery[igKey].image.url + ')',
             };
             //console.log(gallery[igKey].image.ID)
            return <div  className="block_hero-carousel_images" key={gallery[igKey].image.ID} style={divStyle}>
                            <div className="block_hero-carousel_images_slide" >
                                <div className="block_hero-carousel_images_slide_title block_small_container">
                                    <h1   dangerouslySetInnerHTML={{__html: gallery[igKey].text}}>
                                    </h1>
                                    <div className="title-separator hero-separator hideme visible animated addwidth full-visible">

                                    </div>
                                </div>
                            </div>

                    </div>
        })
        return (

            <div className="block_hero-carousel" >

                <div className="block_container">
                    <Slider className="hero-slider " {...settings}>

                            {heroCarousel}



                    </Slider>
                </div>
            </div>
        )
    }
}
export default HeroCarousel;

