import '../input.css'

function Title(props) {
  return (

      <div className="textRender">
            <div className="faIcon">{props.title.length > 60 && <i style={{ color: 'red' }} className="fa fa-exclamation-triangle"></i>}
            </div>
            <div className="resultsTitle" style={{
                color: props.title.length > 60 && 'red'}}>
              {props.title}
            </div>
          </div>
  )
}

export default Title