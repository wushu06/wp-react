import React, {Component} from 'react';
import Slider from 'react-slick'
import styled from 'styled-components'

const Container = styled.div`
	margin: 0 auto;
	padding: 40px; width: 80%; color: #333; background: #419be0;
`

class Slick extends Component
{


    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <Container>
                <Slider {...settings}>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                </Slider>
            </Container>


        )
    }


};
export default Slick;