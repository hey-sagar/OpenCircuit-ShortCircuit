import React, {useState} from "react";
import {sqrt} from "mathjs";

const ShortCircuitTest = () => {
    const solutionDefault = 'Enter the values to get the solution';
    const [volt, setVolt] = useState('');
    const [curr, setCurr] = useState('');
    const [watt, setWatt] = useState('');
    const [answer, setAnswer] = useState(solutionDefault);


    const solution = (v, i, p)=>{
        const v1 = parseFloat(v);
        const i1 = parseFloat(i);
        const p1 = parseFloat(p);
        const Ro1 = p1/(i1*i1);
        const Zo1 = v1/i1;
        const Xo1 = sqrt(Zo1*Zo1-Ro1*Ro1);
        return [Ro1, Xo1];
    }


    const handleAnswer = (e)=>{
        setAnswer(e);
    }

    const handleReset = (e)=>{
        setVolt('');
        setCurr('');
        setWatt('');
        setAnswer(solutionDefault);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        const [Ro1, Xo1] = solution(volt, curr, watt);
        const solutionString = "Value of Ro1 is " + Ro1 + " & Value of Xo1 is " + Xo1;
        handleAnswer(solutionString);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e);}}>
            <h1>Short Circuit Test!</h1>
            <label>Voltmeter Reading </label>
            <input type="text" value = {volt} required onChange={(e) => {setVolt(e.target.value)}}></input><br />
            <label>Ammeter Reading </label>
            <input type="text" value = {curr} required onChange={(e) => {setCurr(e.target.value)}}></input><br />
            <label>Wattmeter Reading </label>
            <input type="text" value = {watt} required onChange={(e) => {setWatt(e.target.value)}}></input><br />
            <input type="button" onClick={(e)=>{handleReset(e);}} value = "RESET" className="button"></input>
            <input type="submit" value = "Submit" className="button"></input>
            <div className="solutionBox"><h2>{answer}</h2></div>
            </form>
        </div>
    )
}
export default ShortCircuitTest;