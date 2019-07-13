import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as LikeIcon } from '../../assets/like.svg';

import './likes-icon.styles.scss';

const LikesIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='like-icon' onClick={toggleCartHidden}>
        <LikeIcon className='shopping-icon'/>
        <span className='item-count'>{ itemCount }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(LikesIcon);