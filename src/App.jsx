import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NewsPage from "./page/NewsPage/index";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import LeaderShip from "./page/leaderShip";
import NewsAbout from "./page/NewsAbout";
import Books from "./page/Books";
import DevSkills from "./page/developmentSkills";
import Projects from "./page/projects";
import MediatekaOne from "./page/mediatekaOne";
import Bukletlar from "./page/bukletlar";
import Regulation from "./page/regulation";
import Structure from "./page/structure";
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
        <Route exact path="/books" component={Books} />
        <Route exact path="/devskills" component={DevSkills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/news/about" component={NewsAbout} />
        <Route exact path="/leadership" component={LeaderShip} />
        <Route exact path="/mediatekaOne" component={MediatekaOne} />
        <Route exact path="/bukletlar" component={Bukletlar} />
        <Route exact path="/regulation" component={Regulation} />
        <Route exact path="/structure" component={Structure} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
