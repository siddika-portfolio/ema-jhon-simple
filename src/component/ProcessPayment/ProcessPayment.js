import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51HZwmYCfvV6tDCvQ9Kyyo8zlJHmm8TqE99tp6t2CFPA358zk9ObRYUFGprG2otAq9QLFJEkSjadHIHisX28qsTzh00dbxxG1zF');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
          <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;