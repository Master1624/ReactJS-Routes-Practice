import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from '../quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun!" },
  { id: "q2", author: "Jhon", text: "Learning Node is Great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if(!quote){
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
