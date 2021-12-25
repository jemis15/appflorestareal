import {useEffect} from "react";
import ReactDOM from "react-dom";

function MyPortal({ children }) {
  // var element = console.log(document);
  var housePortal = document.createElement("div");
  useEffect(() => {
    document.body.appendChild(housePortal);
    return ()=> document.body.removeChild(housePortal);
  }, [housePortal]);

  return ReactDOM.createPortal(children, housePortal);
  // return <>{children}</>
}

export default MyPortal;
