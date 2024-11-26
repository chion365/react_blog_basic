import './App.css';

function App() {
  let tit = "TITLE"
  let post = "Random Blog title";

  return (
    <div className="App">
      <div className="black-nav">
        <h1 id={ tit }>Hello</h1>
      </div>
      <h2 style={ {color: 'red'} }>{ post }</h2>
    </div>
  );
}

export default App;
