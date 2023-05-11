import logo from './logo.svg';
import './App.css';
import Header from './Header'
import FavoriteTopics from './FavoriteTopics';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <body id='main-content'>
        <FavoriteTopics/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
