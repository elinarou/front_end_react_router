import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  function Home() {
    return (<h1>This is home page</h1>);
  };

  function About() {
    return (<h1>This is about page</h1>);
  };

  function Contact() {
    return (<h1>This is contact page</h1>);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to React Router</h1>
      </header>
      <body>
        <BrowserRouter>
          <Link to="/">Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
