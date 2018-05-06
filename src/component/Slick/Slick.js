import React, {Component} from 'react';
import Slider from 'react-slick'
import styled from 'styled-components'

const Container = styled.div`

`

class Slick extends Component
{


    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return(
            <Container>


                    <div className="block_three-col" id="threeColumns">
                        <div className="block_small_container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>three column</h1>
                                    <div className="title-separator">

                                    </div>
                                </div>
                                <div className="mobile-wrapper-slick">

                                    <Slider {...settings}>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <a href="">
                                                <div className="block_three-col_wrapper">
                                                    <div className="block_three-col_wrapper_image">
                                                        <img src="http://placekitten.com/g/400/200" />
                                                            <div className="background-overlay">
                                                            </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <a href="">
                                                <div className="block_three-col_wrapper">
                                                    <div className="block_three-col_wrapper_image">
                                                        <img src="http://placekitten.com/g/400/200" />
                                                        <div className="background-overlay">
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <a href="">
                                                <div className="block_three-col_wrapper">
                                                    <div className="block_three-col_wrapper_image">
                                                        <img src="http://placekitten.com/g/400/200" />
                                                        <div className="background-overlay">
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <a href="">
                                                <div className="block_three-col_wrapper">
                                                    <div className="block_three-col_wrapper_image">
                                                        <img src="http://placekitten.com/g/400/200" />
                                                        <div className="background-overlay">
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>


            </Container>


        )
    }


};
export default Slick;