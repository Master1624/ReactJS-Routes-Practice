import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
  const addQuoreHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoreHandler} />;
};

export default NewQuotes;
