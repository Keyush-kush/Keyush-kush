import React,{useState,useEffect,useRef} from 'react'

function Stopwatch() {
    const [isRuning,setisRuning]=useState(false);
    const [elasptime,setelasptime]=useState(0);

    const intervelIdRef=useRef(null)
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if(isRuning){
            intervelIdRef.current = setInterval(()=>{
                setelasptime(Date.now()-startTimeRef.current)
            },10)
        }
        return()=>{
            clearInterval(intervelIdRef.current);
        }

    },[isRuning])

    function start(){
        setisRuning(true);
        startTimeRef.current=Date.now()-elasptime;
    }

    function stop(){
        setisRuning(false)
    }
    function reset(){
        setelasptime(0)
        setisRuning(false)
    }
    function formattime(){
        let hours=Math.floor(elasptime/(1000*60*60))
        let min=Math.floor(elasptime/(1000*60)%60)
        let seconds=Math.floor(elasptime/(1000)%60)
        let milsec=Math.floor((elasptime % 1000)/10)

        hours=String(hours).padStart(2,"0");
        
        min=String(min).padStart(2,"0");
        
        seconds=String(seconds).padStart(2,"0");
        
        milsec=String(milsec).padStart(2,"0");

        return `${hours} :${min}: ${seconds}: ${milsec}`

    }


  return (
    <div className='stopwatch' >
        <div className='display'>{formattime()}</div>
        <div className='controls'>
            <button onClick={start} className='start-btn'>start</button>
            <button onClick={stop} className='stop-btn'>stop</button>
            <button onClick={reset} className='reset-btn'>reset</button>

        </div>

    </div>
  )
}

export default Stopwatch