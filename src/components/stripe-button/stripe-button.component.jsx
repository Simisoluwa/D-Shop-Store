import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_kjpzMcFqarCtD2t1NUJFsAwD00ipwTWAeB';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }


    return(
        <StripeCheckout 
        label='Pay Now'
        name='UC-CLOTHING'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} 
        />
    )
};

export default StripeCheckoutButton;