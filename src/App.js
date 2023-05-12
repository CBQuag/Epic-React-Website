import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import FavoriteTopics from "./FavoriteTopics";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-content">
        <div id="interests">
          <FavoriteTopics topicName="Dom Manipulation"          difficulty={2} />
          <FavoriteTopics topicName="Rick Dom II Manipulation"  difficulty={3} />
          <FavoriteTopics topicName="Rick Dias Manipulation"    difficulty={3} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
