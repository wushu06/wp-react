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
import WpMenu from '../../component/Header/Nav/Menu/Menu_2'
import Logo from '../../assets/logo.svg'
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


            <div>




                <header id="mainHeader" className="p-fixed ">


                    <nav className="navbar navbar-default ">
                        <div className="container-fluid">
                            <div className="navbar-header">

                                <Link className="navbar-brand" to={"/"}>
                                    <img src={Logo} alt="" width="260" />
                                </Link>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse wp-navbar">

                                        <WpMenu/>

                            </div>
                        </div>
                    </nav>




                </header>

                <div className="header-mobile">

                    <div className="mobile-logo">
                        <a className="navbar-brand" href="">
                            <img className="img-responsive" src="" alt="" width="260" />

                        </a>
                    </div>



                    <div className="woo-nav-mobile">
                        <ul className="nav navbar-nav" id="menu-woo-menu">


                            <li  className="woo-basket">
                                <a  href=""><img src="" width="35" />
                                </a>
                                <span className="woo-basket_count">
                                    <a className="woo-basket_count_a" href=""
                                       title="">
                                    </a>
                                </span>
                            </li>
                            <li>
                                <a href="/" ><img src="" width="35"/></a>
                            </li>
                            <li className="mobile-search">
                                <a href="#" ><img id="wooShowBarMobile" src="" width="35"/></a>

                            </li>
                            <li className="mobile-humburger-wrapper">

                                <a href="#menu" className="mobile-menu-btn">
                                    <div className="hamburger hamburger--spring js-hamburger">
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner">

                                            </div>
                                            <span className="extra-bar">

                                            </span>
                                        </div>
                                    </div>

                                </a>

                            </li>


                        </ul>
                    </div>










                </div>

                <div className="clearfix">

                </div>


                <nav id="menu">

                </nav>

            </div>

        )
    }

};
export default Header;