import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
import Nav from './Nav/Nav'
import styled from 'styled-components'
import WpMenu from '../../component/Header/Nav/Menu/Menu'

const visible = styled.div`
    display:  ${(props) => (props.open) ? `block` : 'none'};
`
const StayVisible = styled.div`
	margin-left: ${(props) => (props.open) ? `${props.width}` : '-300px'};
	transition: margin .2s;
`

injectTapEventPlugin();
class Header extends Component
{
    state = {
        open: false,
        text: 'CLOSE',
        width: 0,
        display: 'none'
    }
    toggle = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open,

            }
        })
        const getState = {
            ... this.state
        }

        if(getState.open === true) {

            this.setState({text: 'CLOSE'})
        }else {

            this.setState({text: 'open'})
        }
    }

    toggleText = () => {

    }

    render () {

        return (
            <MuiThemeProvider>
                <Drawer
                    open={this.state.open}
                >
                    <WpMenu/>
                    <ul>
                        <li>
                        <Link
                            to={'/profile'}
                        >
                            <RaisedButton
                                label={'Profile'}
                                primary={true}
                            />
                        </Link>
                        </li>
                        <li>
                        <Link
                            to={'/users'}
                        >
                            <RaisedButton
                                label={'Users'}
                                primary={true}
                            />
                        </Link>
                        </li>
                        <li>
                        <Link
                            to={'/'}
                        >
                            <RaisedButton
                                label={'Home'}
                                primary={true}
                            />
                        </Link>
                            <Link
                                to={'/pages'}
                            >
                                <RaisedButton
                                    label={'Pages'}

                                />
                            </Link>

                        </li>

                        <Divider/>



                    </ul>
                </Drawer>

                <div>
                    <h2>header</h2>
                </div>
            <StayVisible
                {...this.state}
            >
                <Nav toggle={this.toggle}/>
            </StayVisible>
            </MuiThemeProvider>

        )
    }

};
export default Header;