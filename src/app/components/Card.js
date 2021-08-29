import React from 'react';
import Icon from '@material-ui/core/Icon'


function Card({ count, icon, title }) {
    return (
        <div id='card'>
            <p id='cardTitle'>{title}</p>
            <div id='cardDetailWrap'>
                <p id='cardCount'>{count}</p>
                <div id='cardIconWrap'>
                    <Icon style={{ color: 'white', fontSize: 20 }}>{icon}</Icon>
                </div>
            </div>
        </div>
    );
}

export default Card;