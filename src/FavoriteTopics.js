function FavoriteTopics(props) {
  const style = {
    display:          'flex',
    flexDirection:    'row',
    fontWeight:       props.difficulty > 2 ? "bold"   : null,
    backgroundColor:  props.difficulty > 2 ? "white" : 'blue',
    color:            props.difficulty>2?'black':'white',
    height:           "100px",
    width:            "100px",
    margin:           '20px'
  };
  return (
    <div style={style} class='interest-box'>
      {props.topicName}, Difficulty: {props.difficulty}
    </div>
  );
}
export default FavoriteTopics;
