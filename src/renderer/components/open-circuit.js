import { OpenCircuitSolution } from "./calculations";
import FormTemplate from "./form";

const OpenCircuitTest = () => {
    return (
        <div>
            <FormTemplate test="Open Circuit Test" testType = {OpenCircuitSolution}/>
        </div>
    )
}

export default OpenCircuitTest;