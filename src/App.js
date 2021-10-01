import { useEffect } from "react";
import ReactGA from 'react-ga';
import CreditCardForm from "./components/CreditCardForm";

function App() {
  useEffect(() => {
    ReactGA.event({
      category: 'Conversions',
      action: 'PaymentsPageLoad',
      value: 1,
      nonInteraction: true
    });

    // Google ads onload event (coming from popup-form)
    window?.gtag?.(
      'event',
      'conversion',
      {'send_to': `${process.env.REACT_APP_GADS_ID}/3qfbCI6qvfgCEPT1q5Mo`}
    );
  }, [])
  return (
    <div className="App">
      <CreditCardForm />
    </div>
  );
}

export default App;
