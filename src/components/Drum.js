function Drum(props){
    return(
        <div className="drum-pad" onClick={
            () => {
                document.getElementById(props.drumData.key).play();
                document.getElementById('display').innerHTML = props.drumData.name;
                props.setDisplay(props.drumData.name);
            }
        }>
            <audio className="clip" id={props.drumData.key} src={props.drumData.src}>play</audio>
            {props.drumData.key}
        </div>
    )
}

export default Drum;