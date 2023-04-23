import { useState } from "react"

export const useCounter = (initial=0, min, max) =>{
    const [counter, setCounter] = useState(initial)
    
    
    let countDown = () =>{
        if (counter > min){
            setCounter(counter-1)
        }
    }
    
    let countUp = () =>{
        if (counter < max){
            setCounter(counter+1)
        }
    }
    return {counter, countDown, countUp}

}