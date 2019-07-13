import React from 'react';
import { connect } from 'react-redux';

import {selectCollectionsForPreview}  from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
        collections.map(({id, ...collection}) => (
            <PreviewCollection 
            key={id} {...collection}/> 
        ))}
    </div>
);

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)