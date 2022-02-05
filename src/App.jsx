import News from "./page/home/components/news";
import "./assets/styles/main.scss";
import Laboratory from "./page/home/components/laboratory/index";
import Questions from "./page/home/components/questions";
function App() {
  return (
    <div className="container">
      <News />
      <Laboratory name="Laboratory" />
      <Questions />
    </div>
  );
}

export default App;
