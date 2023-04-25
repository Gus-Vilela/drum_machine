import { useEffect } from "react";

function Drum(props){
  const handleKeyDown = (e) => {
    if(e.keyCode === props.drumData.keyCode){
        document.getElementById(props.drumData.key).play();
        props.setDisplay(props.drumData.name);
    }
  }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [handleKeyDown]);
    return(
        <div className="drum-pad" id={props.drumData.name} onClick={
            () => {
                document.getElementById(props.drumData.key).play();
                props.setDisplay(props.drumData.name);
            }
        }>
            <audio className="clip" id={props.drumData.key} src={props.drumData.src}>play</audio>
            {props.drumData.key}
        </div>
    )
}

export default Drum;