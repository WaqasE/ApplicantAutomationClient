import React from 'react';

import Icon from '@material-ui/core/Icon'

import colors from '../config/colors'


function ScriptCard({ title, category, date }) {
    return (
        <div id='scriptCard'>
            <div id='scriptDetailsWrap'>
                <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                    <div style={{ height: '100%', width: 3, background: colors['primary'], marginRight: 10 }} />
                    <div style={{ padding: '10px 0px' }}>
                        <div id='scriptWrap' style={{justifyContent:'space-between', width:160}}>
                            <p id='scriptDetailTitle'>{title}</p>
                            <div id='scriptBurgerBtn'>
                                <Icon style={{ color: 'grey', fontSize: 20, color: colors['primary'] }}>more_vert</Icon>
                            </div>
                        </div>
                        <div id='scriptWrap'>
                            <Icon style={{ color: 'grey', fontSize: 12, color: colors['primary'] }}>category</Icon>
                            <p id='scriptCategory'>{category}</p>
                        </div>
                        <div id='scriptWrap'>
                            <Icon style={{ color: 'grey', fontSize: 12, color: colors['primary'] }}>calendar_today</Icon>
                            <p id='scriptDate'>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScriptCard;