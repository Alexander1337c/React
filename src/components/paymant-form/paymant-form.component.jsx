import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import { FormContainer, PaymantFormContainer } from './paymant-form.style';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectCartItems, selectCartPrice } from '../../store/cart/selectCart';
import { selectorCurrentUser } from '../../store/user/user.selector';
import { removeItems } from '../../store/cart/cart.action';

const PaymantForm = () => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const amount = useSelector(selectCartPrice);
  const currentUser = useSelector(selectorCurrentUser);
  const items = useSelector(selectCartItems);

  const [isLoadingPayment, setIsLoadingPayment] = useState(false);

  const paymantHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoadingPayment(true);
    const response = await fetch('/.netlify/functions/create-paymant-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    }).then((res) => res.json());

    const {
      paymantIntent: { client_secret },
    } = response;

    const paymantResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });
    if (paymantResult.error) {
      alert(paymantResult.error);
    } else {
      if (paymantResult.paymentIntent.status === 'succeeded') {
        setIsLoadingPayment(false);
        dispatch(removeItems(items));
        elements.getElement(CardElement).clear();
      }
    }
  };

  return (
    <PaymantFormContainer>
      <FormContainer onSubmit={paymantHandler}>
        <CardElement />
        <Button
          isLoading={isLoadingPayment}
          buttonTypes={BUTTON_TYPES_CLASSES.inverted}
          children={'Pay Now'}
        />
      </FormContainer>
    </PaymantFormContainer>
  );
};

export default PaymantForm;
