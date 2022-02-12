import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NewsPage from "./page/NewsPage";
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
import Vacancy from "./page/vacancy";
// import Contact from './page/'

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
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={LeaderShip} />
        <Route path="/books" component={Books} />
        <Route path="/devskills" component={DevSkills} />
        <Route path="/news" component={NewsPage} />
        <Route path="/about" component={NewsAbout} />
        <Route path="/leadership" component={LeaderShip} />
        <Route path="/mediatekaOne" component={MediatekaOne} />
        <Route path="/bukletlar" component={Bukletlar} />
        <Route path="/regulation" component={Regulation} />
        <Route path="/structure" component={Structure} />
        <Route path="/vacancy" component={Vacancy} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
