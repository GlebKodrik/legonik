import { Route, Switch } from "react-router-dom";
import { Main } from "./Main";
import Location from "./Map/Map";
import Delivery from "./Delivery/Delivery";
import About from "./About/About";
import Feedback from "./Feedback/Feedback";
import { Subcategory } from "./Categories/Subcategory/Subcategory";

export const MainRouter = () => {
  return (
    <>
      <div className="container">
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/feedback" render={() => <Feedback />} />
          <Route path="/location" render={() => <Location />} />
          <Route path="/delivery" render={() => <Delivery />} />
          <Route path="/category/:url" render={() => <Subcategory />} />
          {/*<PrivateRouter path="/profile" component={ProfileRoute} />*/}
          <Route exact path="/" render={() => <Main />} />
        </Switch>
      </div>
    </>
  );
};
