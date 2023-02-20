import React, {useState} from "react";
import {acos, tan} from "mathjs";

const OpenCircuitTest = () => {
    const solutionDefault = 'Enter the values to get the solution';
    const [volt, setVolt] = useState('');
    const [curr, setCurr] = useState('');
    const [watt, setWatt] = useState('');
    const [answer, setAnswer] = useState(solutionDefault);


    const solution = (v, i, p)=>{
        const v1 = parseFloat(v);
        const i1 = parseFloat(i);
        const p1 = parseFloat(p);
        const Rc = (v1*v1)/p1;
        const phi = acos(p1/(v1*i1));
        const Xm = Rc/tan(phi);
        return [Rc, Xm];
    }

    const handleReset = (e)=>{
        setVolt('');
        setCurr('');
        setWatt('');
        setAnswer(solutionDefault);
        e.preventDefault();
    }

    const handleAnswer = (e)=>{
        setAnswer(e);
    }

    const handleSubmit = (e) => {
        const [Rc, Xm] = solution(volt, curr, watt);
        const solutionString = "Value of Rc is " + Rc + " & Value of Xm is " + Xm;
        handleAnswer(solutionString);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e);}}>
            <h1>Open Circuit Test!</h1>
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
export default OpenCircuitTest;