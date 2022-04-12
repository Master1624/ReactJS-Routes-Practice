import { Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuotes from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
