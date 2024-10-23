import React,{useState,useEffect} from "react";
const quotes=["The best way to predict your future is to create it","Believe you can and you're halfway there","Believe you can and you're halfway there"];
function QuotesRotator(){
    const[index,setIndex]=useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex+1)%quotes.length);

        },3000);
        return()=>clearInterval(interval);
    },[index]);
    return(
        <div>
            <h2>Quote Rotator</h2>
            <p>{quotes[index]}</p>
        </div>
    )
};
export default QuotesRotator;