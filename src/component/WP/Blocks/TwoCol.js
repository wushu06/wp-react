import React, { Component } from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'


class TwoCol extends  React.Component {
    constructor() {
        super();
        this.state = {

        }

    }

    componentDidMount() {
        this.setState({
            ...this.props.two
        })


    }


    render() {


        const con = this.props.twoC
        //console.log(con)
        const single_data = Object.keys( con ).map( igKey => {
            // console.log(con[igKey])


            return (
               <div>
                   <img src={con[igKey].content_image.url} alt=""/>
               </div>

            )
        })
        return (

            <div className="block_two-col">
                <div className="block_small_container">
                    <div className="row">
                        <h5 className="block_two-col_small-title"></h5>
                        <div className="col-md-6 block_two-col_content">
                            <div className="block_two-col_title">
                                <h1 className="js-fadeUp"  dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
                                <div className="title-separator"></div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="block_two-col_image">
                                    {single_data}
                                </div>
                            </div>
                            <div className="block_two-col_content">

                            </div>
                            <div className="block_two-col_button">
                                <a className="hvr-sweep-to-right red-button" href=""></a>
                            </div>
                        </div>
                        <div className="col-md-6 mobile-only">
                            <div className="block_two-col_image"><img alt="" className="home-image img-responsive" src="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TwoCol;

