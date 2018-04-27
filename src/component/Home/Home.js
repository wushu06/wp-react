import React, {Component} from 'react'
import Slick from '../Slick/Slick'
import WP from '../WP/Posts/Posts'

class Home extends Component
{


    render() {

        return(
            <div>
                <h2>Home</h2>
                <Slick/>
                <WP/>

            </div>
        )
    }


};
export default Home;