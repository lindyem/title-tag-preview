import { Fragment, useState } from 'react'
import Title from './components/Title'
import Description from './components/Description'
import Input from './components/Input'
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
      <h1> PREVIEW YOUR TITLE TAG AND META DESCRIPTION </h1>
      

      <Title title={title} />
      <div>
        <h4>{ title.length } characters</h4>
        <Input showError={title.length > 60} changeHandler={handleTitleInput} label='title'/>
      </div>
     
      <Description description={description} />
      <div>
        <h3>{ description.length }</h3>
       <Input showError={description.length > 160} changeHandler={handleDescriptionInput} label='description'/>
      </div>
    </Fragment>
  );
}

export default App;
