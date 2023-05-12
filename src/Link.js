const style={
    borderRadius:'5px',
    backgroundColor: '#f69302',
    fontWeight: 'bold',
    color: 'white',
    textDecoration:'none'
}
const Link=(props)=><a href={props.url} style={style}>{props.linkLabel}</a>
export default Link;