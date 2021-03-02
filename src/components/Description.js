import '../input.css'

function Description(props) {
  return (
    <div className="container">
      <h2>Enter Your Description:</h2>
         <h4>Max 160 characters</h4>
      <div className="textRender">
        {props.description.length > 160 && <i style={{ color: 'red' }} className="fa fa-exclamation-triangle"></i>}
      </div>
      <div style={{
        color: props.description.length > 160 ? 'red' : 'black'
      }}>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Description                                                                                                                                                                                                                                                                                                      