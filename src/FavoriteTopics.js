// function FavoriteTopics(props) {
//   const style = {
//     display:          'flex',
//     flexDirection:    'row',
//     fontWeight:       props.difficulty > 2 ? "bold"   : null,
//     backgroundColor:  props.difficulty > 2 ? "white" : 'blue',
//     color:            props.difficulty>2?'black':'white',
//     height:           "100px",
//     width:            "100px",
//     margin:           '20px'
//   };
//   return (
//     <div style={style} class='interest-box'>
//       {props.topicName}, Difficulty: {props.difficulty}
//     </div>
//   );
// }
// export default FavoriteTopics;


import React from 'react'
import styles from './FavoriteTopics.module.css';

class FavoriteTopics extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
          display:          'flex',
          flexDirection:    'row',
          fontWeight:       this.props.difficulty > 2 ? "bold"   : null,
          backgroundColor:  this.props.difficulty > 2 ? "white" : 'blue',
          color:            this.props.difficulty>2?'black':'white',
          height:           "100px",
          width:            "100px",
          margin:           '20px'
        };
    return (
      <div style={style} class='interest-box'>
        {this.props.topicName}, Difficulty: {this.props.difficulty}
      </div>
    )
  }
}
export default FavoriteTopics
