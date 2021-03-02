import { Fragment, useState } from 'react'
import Title from './components/Title'
import Description from './components/Description'
import Input from './components/Input'
import './App.css';
import './index.css'


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
      <header>
        <h1>SERP Preview Tool</h1>
        <h3> PREVIEW YOUR TITLE TAG AND META DESCRIPTION </h3>
      </header>

      <div className="container">
        <div className="containerLeft">
          <h2>Enter Your Title:</h2>
          <h4>Max 60 characters</h4>
            <h4>{ title.length } characters</h4>
              <Input showError={title.length > 60} changeHandler={handleTitleInput} label='title'/>
        
          <h2>Enter Your Description:</h2>
            <h4>Max 160 characters</h4>
              <h3>{ description.length} characters</h3>
                <Input showError={description.length > 160} changeHandler={handleDescriptionInput} label='description'/>
        </div>

        <div className="containerRight">
          <div className="displayBox">
            <div className="text">
              <div id="resultTitle">
                <Title title={title}  />
              </div>
              <div id="resultDescription">
                <Description description={description} />
              </div>
              
              </div>
            </div>
           </div>
          </div>
    </Fragment>
  );
}

export default App;
