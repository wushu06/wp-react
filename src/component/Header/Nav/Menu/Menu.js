import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
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
        let menuURL = "http://localhost/silcoates/wp-json/wp-api-menus/v2/menus/2/";

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

        const menu = Object.keys( stateMenu ).map( igKey => {
            //console.log(stateMenu[igKey])
            const children = stateMenu[igKey].children

            let childItem  = ''
            if(children ){
                childItem = Object.keys( children ).map( child => {
                   // console.log(children[child])
                    return (
                        <MenuItem  primaryText={children[child].title} />
                    )
                } );

            }
            let item = stateMenu[igKey]
            let NavLink_page = '/post-single/'
            if(item.object === 'post') {
                NavLink_page = '/post-single/'+item.object_id

            }else {
                 NavLink_page = '/page-single/'+item.object_id

            }
            //console.log(children)
            let menuContent
            if(childItem === '') {
                menuContent =
                    <NavLink
                        to={NavLink_page}
                    >
                    <MenuItem  primaryText={item.title} insetChildren={true} />
                    </NavLink>
            }else {
                menuContent =
                    <NavLink
                        to={NavLink_page}
                    >
                    <MenuItem
                        primaryText={item.title}

                        rightIcon={<ArrowDropRight />}
                        menuItems={childItem}
                    />
                    </NavLink>

            }

            return (
                <div className="dropdown" key={igKey}>
                    <Menu desktop={true} >
                        {menuContent}
                    </Menu>
                </div>

            )
        } );

        return (
            <div>
                {menu}
            </div>


        )
    }
}
export default WpMenu;