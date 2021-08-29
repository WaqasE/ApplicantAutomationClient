import React from 'react';
import Icon from '@material-ui/core/Icon'

function SearchField() {
    return (
        <div id='searchField'>
            <Icon id='searchFieldIcon'>search_icon</Icon>
            <input
                id='search'
                type='text'
                placeholder='Search script'
            />
        </div>
    );
}

export default SearchField;