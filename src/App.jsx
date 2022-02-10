import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NewsPage from "./page/NewsPage/index";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import NewsAbout from "./page/NewsAbout";
import LeaderShip from "./page/leaderShip";
import MediatekaOne from "./page/mediatekaOne";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/news/about" component={NewsAbout} />
        <Route exact path="/leadership" component={LeaderShip} />
        <Route exact path="/mediatekaOne" component={MediatekaOne} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
