import React, {Component} from 'react'
import Slick from '../Slick/Slick'
import WP from '../WP/Posts/Posts'
import Geocode from "react-geocode";



class Home extends Component
{
    constructor() {
        super();
        this.state = {           
            'address': '',
        }


    }

    componentDidMount =() => {
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyAOp9eWdBHhXmp5nIdi0L3aU7qYRLvHV4g");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();


        Geocode.fromAddress("wf12 9es").then(
        response => {
        const { lat, lng } = response.results[0].geometry.location;
            
             this.setState({
                 'address': response.results[0].formatted_address
             })
       
        },
        error => {
        //console.error(error);
        }
        );
    }
    render() {

        return(
            <div>
                <h2>Home</h2>
                <form className="form-inline">

  {/* ... */}

  <label className="sr-only" htmlFor="address">Address</label>
  <input type="text" 
                    className="form-control input-lg" 
                    id="address" 
                    placeholder="London" 
                    required />

  {/* ... */}

  <button type="submit" className="btn btn-default btn-lg">
    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
  </button>

  {/* ... */}

</form>
                {this.state.address}
                <Slick/>
                <WP/>

            </div>
        )
    }


};
export default Home;