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
            'message': ''
        }

    }

    componentDidMount() {
        this.setState({
            ...this.props.data.single[0]
        })
        // Make a request for a user with a given ID
        axios.get('http://localhost/silcoates/gravityformsapi/forms/1/?api_key=34fc94f44b&signature=OOzAoNBtJWxVlQpp%2Ffx01TE99Tw%3D&expires=1528090817')
            .then(res=>{
                let formsData         = res.data.response.fields;
                this.setState({
                    'form' : [
                        formsData
                        ],
                    'message': res.data.response.confirmations["5a180f30ca49b"].message
                })

               /* this.setState({
                    'title': res.data.response.title,
                    'name': res.data.response.fields[0].label,
                })*/
                this.setState({
                    'input': res.data.response

                })
                let xx = [formsData]
               // console.log(res)
                xx.map((post) => {
                    post.map((input) => {
                        this.setState({
                            'input_ids': {['input_'+input.id]: ''}
                        })

                    })
                })
            })
            .catch(error=> {
                console.log(error)
            })




    }

    submitHandler = (e) => {
        e.preventDefault()
        loader = <Spinner/>

        let url = 'http://localhost/silcoates/gravityformsapi/forms/1/submissions?api_key=34fc94f44b&signature=pETeCOX9TZL6vdivrDdLD6BNe%2B4%3D&expires=1525473999';
        let input_values= this.state.input_ids
        let values = {input_values }
        console.log(this.state.input_ids)
        /* let values = {input_values : {
                input_1 : this.state.input_1,
                input_2 : this.state.input_2,
            }
        }*/



        let values_json = JSON.stringify(values);
        if(this.state.input_1 === ''){
            loader = 'Name can\'t be empty'
            return;
        }

        axios.post(url, values_json)
            .then(response =>{
                this.setState({
                    'success': true
                })
                loader = '';
            })
            .catch(error => {
                console.log(error);
                loader = '';
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

        let form = this.state.form.map((post) => {
         return post.map((input) => {

                let field;
             switch(input.type) {
                 case 'text':
                     field = <TextField
                         label={input.label}
                         floatingLabelText={input.label}
                         margin="normal"
                         onChange={this.handleChange('input_'+input.id)}

                     />
                     break;
                 case 'textarea':
                     field = <TextField
                         id={input.id}
                         label={input.label}
                         floatingLabelText={input.label}
                         multiline
                         rows="4"
                         onChange={this.handleChange('input_'+input.id)}

                     />
                     break;
                 default:
                     field = <TextField
                         id={input.id}
                         label={input.label}
                         floatingLabelText={input.label}
                         margin="normal"
                         onChange={this.handleChange( 'input_'+input.id)}

                     />
             }
             return <MuiThemeProvider key={input.id}>

                        {field}
                         <br/>
                      </MuiThemeProvider>
          })

        });

        return (
            <div>
                <h2>Full width --Block</h2>
                <h3> {this.state.title}</h3>


                <MuiThemeProvider>
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
                {loader}
                <p>{this.state.success ? this.state.message : ''}</p>

            </div>
        )
    }
}
export default Single;

