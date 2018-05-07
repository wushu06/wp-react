import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Geocode from "react-geocode";
import { withStyles } from 'material-ui/styles';
import Spinner from '../../Layout/Spinner';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import GoogleMapReact from 'google-map-react'
import Marker from 'google-map-react'
import MarkerSvg from '../../../assets/marker.svg'



const AnyReactComponent = ({ text }) => <div>{text}</div>
const MARKER_SIZE = 40;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
}
const styles = theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },

});

class GeoCode extends  React.Component {
    constructor() {
        super();
        this.state = {
            input: 'London',
            api: 'AIzaSyAOp9eWdBHhXmp5nIdi0L3aU7qYRLvHV4g',
            address: '',
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11,
            loading: false,
        }

    }

    componentDidMount() {



    }
    handleChange = input_1 => event => {
        this.setState({
             input: event.target.value,

        });
    };
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyAOp9eWdBHhXmp5nIdi0L3aU7qYRLvHV4g");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();


        Geocode.fromAddress(this.state.input).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;

                this.setState({
                    address: response.results[0].formatted_address,
                    center: {
                        lat: response.results[0].geometry.location.lat,
                        lng: response.results[0].geometry.location.lng,
                    },
                    loading: false
                })
                 console.log(response.results[0].geometry.location.lat)
                console.log(response.results[0].formatted_address )
            },
            error => {
                //console.error(error);
            }
        );
    }


    render() {


        let spinner
        if(this.state.loading === true ) {
            spinner = <Spinner />
        }else {
            spinner = ''
        }

        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <form className="form-inline">
                            <div className="row">
                                <div className="col-xs-8 col-sm-10">
                                    <MuiThemeProvider>
                                        <form  noValidate autoComplete="off" >

                                            <label className="sr-only" htmlFor="address">Address</label>
                                            <TextField

                                                label={'address'}
                                                floatingLabelText={'Enter postcode'}
                                                margin="normal"
                                                onChange={this.handleChange('input' )}

                                            />
                                            <br />
                                            <RaisedButton
                                                label={'Send'}
                                                value={'submit'}
                                                type="submit"
                                                onClick={this.submitHandler}
                                            />
                                        </form>
                                    </MuiThemeProvider>


                                </div>

                                <div className="col-xs-12 col-sm-12">
                                    {spinner}
                                    {this.state.address}
                                </div>
                                <div className="col-xs-12 col-sm-12" style={{ height: '100vh', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: this.state.api}}
                                        center={this.state.center}
                                        defaultZoom={this.state.zoom}

                                    >
                                        <AnyReactComponent
                                            lat={this.state.center.lat}
                                            lng={this.state.center.lng}

                                            text={'Nour'}
                                        />
                                                                               <img src={MarkerSvg} alt="" width="50"/>
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default GeoCode;

