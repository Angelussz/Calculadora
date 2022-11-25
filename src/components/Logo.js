function Logo(props){
    return(
        <div className="freecodecamp-logo-contenedor">
            <img src={require(`../images/${props.src}`)} alt={`Logo ${props.src}`} className="freecodecamp-logo" />
        </div>
    )
}
export default Logo