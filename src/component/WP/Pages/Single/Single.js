import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';
import { SITE_ROOT } from '../../../Inc/Inc'
import FullWidth from '../../Blocks/FullWidth'
import HeroCarousel from '../../Blocks/HeroCarousel'
import SecondCarousel from '../../Blocks/SecondCarousel'
import TwoCol from '../../Blocks/TwoCol'
import axios from 'axios'

let spinner
let single_data
class Single extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            acf: [],
            slug:'',
            id:'',
            type: '',
            title: '',
            content: '',
            image: '',
            loading: true

        }


    }


    componentWillReceiveProps(nextProps)  {
        this.setState({
            loading: true
        })

        this.props = nextProps;

        this.handleData()
    }


    componentDidUpdate (prevProps, prevState) {
       // console.log(this.state.single.slug)
       // console.log(prevState.slug)

        if (prevState === this.state.single) {

            return false;
        }else {



        }
        //this.handleData()



    }

    componentDidMount () {
        this.handleData()

    }
    handleData =() => {

        const url      = window.location.href;
        const getID = this.props.match.params.id;


        let dataURL = SITE_ROOT+"/wp-json/wp/v2/pages?slug="+getID+"&_embed";
        axios.get(dataURL)
            .then(res => {

                let img = res.data[0]._embedded['wp:featuredmedia'] ? res.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';

                this.setState({
                    single: res.data[0],
                    acf: res.data[0].acf.blocks,
                    id: res.data[0].id,
                    type: res.data[0].type,
                    slug:   getID,
                    title: res.data[0].title.rendered === '' ?  res.data[0].acf.blocks[0].title : res.data[0].title.rendered,
                    content: res.data[0].content.rendered === '' ? res.data[0].acf.blocks[0].content:  res.data[0].content.rendered,
                    image: img,
                    loading: false
                })


            })
            .catch(error => {
            console.log(error)
        })

    }


    render() {
       // console.log(this.state.acf.blocks)
        const single = this.state.acf
         single_data = Object.keys( single ).map( igKey => {
          // console.log(single[igKey])
            let data

             console.log(single[igKey])
            switch(single[igKey].acf_fc_layout ) {
                case 'hero_carousel' :
                    data = <HeroCarousel gallery={single[igKey].gallery}/>





                    break;
                case 'contact':

                        data =
                            <div>
                                <FullWidth page={'contact_us'} data={single[igKey]}/>
                            </div>
                         break;

                case 'half_carousel':
                    //console.log(single[igKey])
                    data =
                        <div>
                            <TwoCol two={single[igKey]} twoC = {single[igKey].content} />
                        </div>

                    break;
                    case 'full_width':
                    //console.log(single[igKey])
                    data =
                        data =
                            <div>
                                <FullWidth page={'others'} data={single[igKey]}/>
                            </div>

                    break;
            }
            return (
                <div>
                    {data}
                </div>

            )


        })

        if(this.state.loading === true) {
             spinner = <Spinner/>
        }else {
            spinner = ''
        }

        return (
            <section className="wrapper animsitionx" id="page">
                {spinner}
                {single_data}

            </section>
        )
    }
}
export default Single;