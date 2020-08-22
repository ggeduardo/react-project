import React,{useState, useEffect} from 'react'

const TimerDate = (props) => {
    const [state, setState] = useState({Days : 0, Hours : 0, Minutes : 0, Seconds : 0, Value:0})
    let days = 10
    let hours = 11
    let minutes = 25
    let seconds = 25
    let value = 1
    const Date = props.Date
    
    useEffect((props,state) => {
        const interval = setInterval((state) => {

            if(seconds > 0){
                
                seconds = seconds - 1
            }else{
                seconds = 60
                minutes = minutes -1
                if(minutes < 0 ){
                    minutes = 60
                    hours = hours - 1
                    if(hours<0){
                        hours = 24
                        days = days - 1
                    }
                }
            }

            if(Date === "days"){
                
                value = days
                
            }else if(Date === "hours"){
                
                value = hours
                
            }else if(Date === "minutes"){
            
                value = minutes
                

            }else if(Date === "seconds"){
                
                value = seconds
                
                
            }
     
            setState({ Days : days , Hours : hours, Minutes : minutes, Seconds : seconds, Value: value})
            

        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return(
        <div className={"timer__section "+ props.Date}>
            <div className="timer__number">{ state.Value }</div>
            <div className="timer__label">{props.Date}</div>
        </div>
        
    )
}

export default TimerDate