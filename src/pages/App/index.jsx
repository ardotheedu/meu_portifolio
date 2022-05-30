import WarpSpeed from "./warpspeed.js"
import {useState, useEffect, useRef} from 'react'
import styles from './App.scss'
import { Link } from "react-router-dom";

let countdownTimeout;

function App() {
 
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const speed = useRef(1);

  useEffect(() => {
      let x = document.createElement("canvas");
      x.id = "canvas";
      x.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%;"
      document.body.appendChild(x);
      setIsLoading(true)
  }, [])

  if(isLoading) {
    let y = new WarpSpeed('canvas', {
      speed: speed.current,
    })
  
    if (isActive && time >= 0 && time < 101) {
        countdownTimeout = setTimeout(() => {
          setTime(time + 1)
          speed.current = speed.current + 0.2;
          y.SPEED += speed.current;
          console.log(y.SPEED)
        }, 3 * 1000 / 100)
    } else if (isActive) {
        setIsActive(false)
    }
  }

  if (isActive) {
    return (
      <div className="container">
        <div className="content">
          <p>Loading...</p>
          <div className="progressBar">
            <div className="progress" style={{ width: `${time}%` }}></div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="content">
        <Link to="/homepage" className="button">
          START
        </Link>
      </div>
    </div>
  );
}

export default App;
