import { useHistory } from "react-router-dom";

import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
  const history = useHistory();
  const addQuoreHandler = (quoteData) => {
    console.log(quoteData);

    history.replace('/quotes')
  };

  return <QuoteForm onAddQuote={addQuoreHandler} />;
};

export default NewQuotes;
