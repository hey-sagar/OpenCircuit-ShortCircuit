import React, {useState} from "react";

const FormTemplate = ({test, testType}) => {
    const solutionDefault = 'Enter the values to get the solution';
    const [volt, setVolt] = useState('');
    const [curr, setCurr] = useState('');
    const [watt, setWatt] = useState('');
    const [answer, setAnswer] = useState(solutionDefault);

    const solution = (v, i, p) => {
        return testType(v, i, p);
    }

    const handleReset = (e)=>{
        setVolt('');
        setCurr('');
        setWatt('');
        setAnswer(solutionDefault);
        e.preventDefault();
    }

    const handleAnswer = (e) => {
        setAnswer(e);
    }

    const handleSubmit = (e) => {
        handleAnswer(solution(volt, curr, watt));
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e);}}>
                <h1>{test + "!"}</h1>

                <label>Voltmeter Reading </label>
                <input type="text" value = {volt} required onChange={(e) => {setVolt(e.target.value)}}></input><br />

                <label>Ammeter Reading </label>
                <input type="text" value = {curr} required onChange={(e) => {setCurr(e.target.value)}}></input><br />

                <label>Wattmeter Reading </label>
                <input type="text" value = {watt} required onChange={(e) => {setWatt(e.target.value)}}></input><br />

                <input type="button" onClick={(e)=>{handleReset(e);}} value = "RESET" className="button"></input>
                <input type="submit" value = "Submit" className="button"></input>

                 <div className="solutionBox">
                    <h2>{answer}</h2>
                </div>
            </form>
        </div>
    )
}
export default FormTemplate;