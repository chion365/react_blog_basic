import './App.css';
import { useState } from 'react';

function App() {
  // variables
  let tit = "TITLE"
  let post = "Random Blog title";

  // state
  let [itemTitle, setTitle] = useState(["title1", "title2", "title3"])
  let [itemDate, setDate] = useState(['2024년 1월 1일', '2024년 1월 2일', '2024년 1월 3일'])

  return (
    <div className="App">
      <div className="black-nav">
        <h1 id={ tit }>Hello</h1>
      </div>
      <h2 style={ {color: 'red'} }>{ post }</h2>
      <ul className="list">
        <li className='item'>
          <h3 className='title'>{ itemTitle[0] }</h3>
          <div className='description'>{ itemDate[0] }</div>
        </li>
        <li className='item'>
          <h3 className='title'>{ itemTitle[1] }</h3>
          <div className='description'>{ itemDate[1] }</div>
        </li>
        <li className='item'>
          <h3 className='title'>{ itemTitle[2] }</h3>
          <div className='description'>{ itemDate[2] }</div>
        </li>
      </ul>
    </div>
  );
}

export default App;
