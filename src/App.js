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
  }, [])
  return (
    <div className="App">
      <CreditCardForm />
    </div>
  );
}

export default App;
