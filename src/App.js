import { Fragment, useState } from 'react'
import TitleList from './components/TitleList'
import './App.css';


function App() {
  const [title, setTitle] = useState([])
  const [titleCount, setTitleCount] = useState(0)

  function handleInput(e) {
      setTitle([e.target.value])
  }
  return (
    <Fragment>
      <TitleList title={title} />
      <input type="text" title="title" onChange={handleInput}></input>
      
    </Fragment>
  );
}

export default App;
