import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { SITE_ROOT } from '../../../Inc/Inc'
import {NavLink} from 'react-router-dom'


const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    width: '200px'
};

class WpMenu extends Component {
    constructor() {
        super();
        this.state = {
            menus:[],
        }
    }
    componentDidMount() {
        let menuURL = SITE_ROOT+"/wp-json/wp-api-menus/v2/menus/2/";

        fetch(menuURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    menus: res.items
                })

            })

    }



    render() {




        const stateMenu = this.state.menus
       // console.log(stateMenu)
        const menu = Object.keys( stateMenu ).map( igKey => {
            //console.log(stateMenu[igKey])
            let item = stateMenu[igKey]
            let NavLink_page = '/post-single/'
            if(item.object === 'post') {
                NavLink_page = '/post-single/'+item.object_slug

            }else {
                NavLink_page = '/page-single/'+item.object_slug

            }

            const children = stateMenu[igKey].children

            let childItem  = ''
            if(children ){
                childItem = Object.keys( children ).map( child => {
                     //console.log(children[child])
                    return (
                    <li key={children[child].id}>
                        <NavLink to={NavLink_page}>
                        {children[child].title}
                        </NavLink>
                    </li>
                    )
                } );

            }

            //console.log(item)
            let menuContent
            if(childItem === '') {
                menuContent =
                    <NavLink
                        to={NavLink_page}
                    >
                        <li >
                          {item.title}
                        </li>
                    </NavLink>


            }else {
                menuContent =
                    <NavLink
                        to={NavLink_page}
                    >
                        <li className=" dropdown" >
                                {item.title} <span className="caret"></span>
                            <ul className="dropdown-menu" role="menu">
                                {childItem}
                            </ul>
                        </li>

                    </NavLink>

            }


            return (


                    <li key={igKey}>
                        {menuContent}

                    </li>
            )
        } );

        return (
            <div className="nav navbar-nav navbar-right" id="main-menu">
                <ul className="nav navbar-nav navbar-right" id="menu-primary-menu" >

                {menu}
                </ul>
            </div>


        )
    }
}
export default WpMenu;