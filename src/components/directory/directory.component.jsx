import React from 'react';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';

const Directory = ({ sections }) => (
        <div className='directory-menu'>
            {
                sections.map(({id, ...section}) => (
                    <MenuItem key={id} {...section}/>
                ))
            }
        </div>
        );

 
const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
