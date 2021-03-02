import '../input.css'

function Description(props) {
  return (
    <div className="container">
      <div className="textRender">
        {props.description.length > 160 && <i style={{ color: 'red' }} className="fa fa-exclamation-triangle"></i>}
        <div className="resultsDescription" style={{
          color: props.description.length > 160 && 'red' }}>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default Description                                                                                                                                                                                                                                                                                                      