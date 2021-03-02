import '../input.css'

function Title(props) {
  return (
      <div className="container">
        <h2>Enter Your Title:</h2>
         <h4>Max 60 characters</h4>
            <div className="textRender">
            <div className="faIcon">{props.title.length > 60 && <i style={{ color: 'red' }} className="fa fa-exclamation-triangle"></i>}
            </div>
            <div style={{
              color: props.title.length > 60 ? 'red' : 'black'
            }}> { props.title}
            </div>
          </div>
      </div>
  )
}

export default Title