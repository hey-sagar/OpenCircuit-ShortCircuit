import {acos, tan, sqrt} from "mathjs";

const OpenCircuitSolution = (v, i, p)=>{
    const v1 = parseFloat(v);
    const i1 = parseFloat(i);
    const p1 = parseFloat(p);
    const Rc = (v1*v1)/p1;
    const phi = acos(p1/(v1*i1));
    const Xm = Rc/tan(phi);
    return "Value of Rc is " + Rc + " & Value of Xm is " + Xm;
}

const ShortCircuitSolution = (v, i, p)=>{
    const v1 = parseFloat(v);
    const i1 = parseFloat(i);
    const p1 = parseFloat(p);
    const Ro1 = p1/(i1*i1);
    const Zo1 = v1/i1;
    const Xo1 = sqrt(Zo1*Zo1-Ro1*Ro1);
    return "Value of Ro1 is " + Ro1 + " & Value of Xo1 is " + Xo1;
}

export {OpenCircuitSolution, ShortCircuitSolution};