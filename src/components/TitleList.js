
function TitleList(props) {
  return (
    <div>
        {props.title.map(title => {
          return (<h2>{ title }</h2>)
        })}

    </div>
  )
}

export default TitleList