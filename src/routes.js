import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Reviews from "./pages/reviews";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reviews/:id" component={Reviews} />
      </Switch>
    </BrowserRouter>
  );
}
