import React, { Component } from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'


class SecondCarousel extends  React.Component {
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
            slidesToShow: 3,
            slidesToScroll: 1
        };
        const gallery =  this.props.sec

        let secondCarousel = Object.keys( gallery  ).map( igKey => {

            console.log(gallery[igKey].link)
            //console.log(gallery[igKey].image.ID)
            return (
            <div className="col-md-4 col-sm-6 col-xs-12"  key={gallery[igKey].image.ID}>
                <Link to={'/page-single'+gallery[igKey].link}>
                    <div className="block_three-col_wrapper">
                        <div className="block_three-col_wrapper_image">
                            <img alt="" className="img-responsive" src={gallery[igKey].image.url} />
                            <div className="background-overlay"></div>
                        </div>
                        <div className="block_three-col_wrapper_content">
                            <div className="content_image" id="over-image">
                                <img alt="" className="img-responsive" src="" width="200" />
                                <h2  dangerouslySetInnerHTML={{__html: gallery[igKey].title}}>
                                </h2>
                                <div className="content_btn">

                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            )
        })
        return (

            <div className="block_three-col" id="threeColumns">
                <div className="block_small_container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 dangerouslySetInnerHTML={{__html: this.props.secTitle}}></h1>
                            <div className="title-separator"></div>
                        </div>

                        <Slider {...settings} className="row mobile-wrapper-slick">

                            {secondCarousel}

                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
export default SecondCarousel;

