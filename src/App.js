import { Fragment, useState } from 'react'
import Title from './components/Title'
import './App.css';


function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleTitleInput(e) {
    setTitle(e.target.value);
  }

  return (
    <Fragment>

      <Title title={title} />
      <input type="text" title="title" onChange={ handleTitleInput } ></input>
      {title.length > 60 && <div>error title too long</div>}
      <div>
        <h3>{ title.length }</h3>
      </div>

    </Fragment>
  );
}

export default App;
