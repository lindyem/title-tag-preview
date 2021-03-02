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

      <div className="container">
        <div className="containerLeft">
          <h2>Enter Your Title:</h2>
          <h4>Max 60 characters</h4>
            <h4>{ title.length } characters</h4>
              <Input showError={title.length > 60} changeHandler={handleTitleInput} label='title'/>
        
          <h2>Enter Your Description:</h2>
            <h4>Max 160 characters</h4>
              <h4>{ description.length} characters</h4>
                <Input showError={description.length > 160} changeHandler={handleDescriptionInput} label='description'/>
        </div>

        <div className="containerRight">
          <div className="displayBox">
            {(title || description) ? (
              <div className="text">
                  <Title title={title}  />
                  <Description description={description} />
                
              </div> ) : (
                <div className="placeholder">PREVIEW YOUR TITLE TAG AND META DESCRIPTION</div>
              )
              }
            </div>
           </div>
          </div>
    </Fragment>
  );
}

export default App;
