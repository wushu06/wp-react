import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import styled from 'styled-components'
import {media} from '../../../container/Utils/Media'

const Media = styled.div`
	${media.handheld`
		margin-left: 40%;
	`}
	margin-left: 35%;
`

const nav = (props) => {

    return(

        <Media>
        <FloatingActionButton
            onTouchTap={props.toggle}

        >
            <Menu/>
        </FloatingActionButton>
        </Media>
    )

};
export default nav;