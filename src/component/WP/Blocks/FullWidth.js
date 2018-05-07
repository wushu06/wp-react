import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../Layout/Spinner';
import Lightbox from 'react-images';
import $ from 'jquery'
import { SITE_ROOT, G_FORM } from '../../Inc/Inc'
import axios from 'axios';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'



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
let loader ;
class Single extends  React.Component {
    constructor() {
        super();
        this.state = {
            'form': [],
            'input_ids': {},
            'title': '',
            'name': '',
            'email': '',
            'btn' : '',
            'success': false,
            'message': '',
            'page': '',
            'loading': false
        }

    }

    componentDidMount() {
        this.setState({
            ...this.props.data,
            ...this.props.page
        })
        //console.log(this.props.page)
        if(this.props.page === 'contact_us') {
            // Make a request for a user with a given ID
            let URL = 'https://www.checkfire.co.uk/gravityformsapi/forms/3/?api_key=c6be399bda&signature=KJ4zz5WxbCmRtFbEJLtxgtHisAk%3D&expires=1528338907'
            axios.get(URL)
                .then(res => {
                    let formsData = res.data.response.fields;
                    this.setState({
                        'form': [
                            formsData
                        ],
                        'message': res.data.response.confirmations["5af07fdc16e2a"] ? res.data.response.confirmations["5af07fdc16e2a"].message : 'Thank you for getting in touch!'
                    })

                    /* this.setState({
                     'title': res.data.response.title,
                     'name': res.data.response.fields[0].label,
                     })*/
                    //console.log(res.data.response.confirmations)
                    this.setState({
                        'title': res.data.response.title,
                        'input': res.data.response

                    })
                    let xx = [formsData]
                    // console.log(res)
                    xx.map((post) => {
                        post.map((input) => {
                            this.setState({
                                'input_ids': {['input_' + input.id]: ''}
                            })

                        })
                    })

                })
                .catch(error => {
                    console.log(error)
                })

        }


    }

    submitHandler = (e) => {
        e.preventDefault()
       this.setState ({
           'loading': true
       })

        let url = 'https://www.checkfire.co.uk/gravityformsapi/forms/3/?api_key=c6be399bda&signature=IcQ9khn2KIa9nufWaibHmw77wzo%3D&expires=1528338937';
        let input_values= this.state.input_ids
        let values = {input_values }

        /* let values = {input_values : {
         input_1 : this.state.input_1,
         input_2 : this.state.input_2,
         }
         }*/

        console.log(this.state.input_ids.input_1)

        let values_json = JSON.stringify(values);

        if( this.state.input_ids.input_1 === '' ){
            this.setState({
                'loading': false
            })
            loader = 'Name can\'t be empty'
            return;
        }

       axios.post(url, values_json)
            .then(response =>{
                this.setState({
                    'loading': false
                })

                console.log (response.data.status)
                if(response.data.status === 200) {
                    this.setState({
                        'success': true,
                    })
                }
            })
            .catch(error => {
                console.log('err');
                this.setState({

                    'loading': false
                })
            });

    }
    handleChange = input_1 => event => {
        this.setState({
            'input_ids': {
                ...this.state.input_ids,
                [input_1]: event.target.value,
            }
        });
    };

    render() {
      //  console.log(this.state)
        let spin
        if(this.state.loading === true) {
            spin = <Spinner/>
        }else {
            spin = ''
        }
        let form
        let content
        let contact_details
        if(this.props.page === 'contact_us') {
            form = this.state.form.map((post) => {
                return post.map((input) => {

                    let field;
                    switch (input.type) {
                        case 'text':
                            field = <TextField
                                label={input.label}
                                floatingLabelText={input.label}
                                margin="normal"
                                onChange={this.handleChange('input_' + input.id)}

                            />
                            break;
                        case 'textarea':
                            field = <TextField
                                id={input.id}
                                label={input.label}
                                floatingLabelText={input.label}
                                multiline
                                rows="4"
                                onChange={this.handleChange('input_' + input.id)}

                            />
                            break;
                        default:
                            field = <TextField
                                id={input.id}
                                label={input.label}
                                floatingLabelText={input.label}
                                margin="normal"
                                onChange={this.handleChange('input_' + input.id)}

                            />
                    }
                    return <MuiThemeProvider key={input.id}>

                        {field}
                        <br/>
                    </MuiThemeProvider>
                })

            });
             content =  <MuiThemeProvider>
                            <form  noValidate autoComplete="off" action="http://localhost/silcoates/gravityformsapi/forms/1/submissions?api_key=34fc94f44b&signature=rbzNe9W58IuxkUstNpJN0H4ZkJ8%3D&expires=1528095408">

                                {form}

                                <RaisedButton
                                    label={'Send'}
                                    value={'submit'}
                                    type="submit"
                                    onClick={this.submitHandler}
                                />
                            </form>
                        </MuiThemeProvider>
            contact_details = <div className="col-md-6 contact-details">
                                    <p ><strong></strong></p>
                                    <p ></p>
                                    <p ><strong></strong></p>
                                    <p ><strong>CheckFire Distribution Centre<br /></strong></p>
                                    <p ></p>
                                </div>
        }else {
            form = ''
            content = <p dangerouslySetInnerHTML={{__html: this.state.content}}></p>
            contact_details = ''
        }

        return (
            <div>

                <div className="block_full-width">
                    <div className="block_small_container">
                        <div className="row">
                            <div className=" col-md-6 ">
                                <h5 className="block_full-width_small-title"></h5>
                                <div className="block_full-width_title">
                                    <h1 className="animate-title sa-visible full-visible"
                                        dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
                                    <div className="title-separator"></div>
                                </div>
                                <div className="block_full-width_content">
                                    {content}
                                    {spin}
                                    <p>{this.state.success ? this.state.message : ''}</p>
                                </div>

                            </div>
                            {contact_details}
                        </div>
                    </div>
                    <div className="block_full-width_map">
                        <div id="map"></div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Single;
