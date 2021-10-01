import { useState } from 'react'
import ReactGA from 'react-ga';
import validateInfo from './validateInfo';
import {Firebase} from './firebase'

const api = new Firebase();

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  // Google ads conversion event (i.e. they paid)
  window?.gtag?.('event', 'conversion', {
      'send_to': `${process.env.REACT_APP_GADS_ID}/WSFbCLT74vYCEPT1q5Mo`,
      'transaction_id': '',
      'event_callback': callback
  });
  return false;
}




const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        // cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const errors = validateInfo(values)
        if(errors.variant === "warning") {
          ReactGA.event({
            category: 'Conversions',
            action: 'CreditCard',
            value: 1,
            nonInteraction: false
          });

          gtag_report_conversion();

          api.firebase.firestore().collection('app').doc('payments').set({
            [`${values.cardName}-${new Date().getTime()}`]: {
              validCC: true,
              date: new Date().toGMTString()
            },
          }, { merge: true })
        }

        setErrors(validateInfo(values))
    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 