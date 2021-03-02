import { Fragment, useState } from 'react'
import Title from './components/Title'
import Description from './components/Description'
import './App.css';


function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleTitleInput(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

  return (
    <Fragment>

      <Title title={title} />
      <input type="text" title="title" onChange={ handleTitleInput } ></input>
      {title.length > 60 && <div>error title too long</div>}
      <div>
        <h3>{ title.length }</h3>
      </div>

      <Description description={description} />
      <input type="text" description="description" onChange={ handleDescriptionInput } ></input>
      {title.length > 160 && <div>error description too long</div>}
      <div>
        <h3>{ description.length }</h3>
      </div>

    </Fragment>
  );
}

export default App;
