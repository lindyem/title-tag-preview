import '../input.css'

function Description(props) {
  return (
    <div>
      <div className="textRender">{props.description.length > 160 && <i style={{ color: 'red' }} className="fa fa-exclamation-triangle"></i>}
      </div>
      <div style={{
        color: props.description.length > 160 ? 'red' : 'black'
      }}> {props.description}
      </div>
    </div>
  )
}

export default Description                                                                                                                                                                                                                                                                                                      