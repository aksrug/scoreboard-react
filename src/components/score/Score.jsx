import { useState } from "react";


export function Score(){
const [pointsA, setPointsA] = useState(0);
const [pointsB, setPointsB] = useState(0);

function updatePointsA(){
    setPointsA(pointsA +1 );
}

function updatePointsA2(){
    setPointsA(pointsA +2 );
}

function updatePointsA3(){
    setPointsA(pointsA +3 );
}

function updatePointsB(){
    setPointsB(pointsB +1 );
}

function updatePointsB2(){
    setPointsB(pointsB +2 );
}

function updatePointsB3(){
    setPointsB(pointsB +3 );
}

    return (

    <div className="scoreboard">
        <div className="command">
            <div className="commName">Command A</div>
            <div className="commName">Command B</div>
        </div>
        <div className="score">
            <div className="scoreComm">{pointsA}</div>
            <div className="text">:</div>
            <div className="scoreComm">{pointsB}</div>
        </div>
        <div className="btnList">
            <div >
                <button className="btn" onClick={updatePointsA}>+1</button>
                <button className="btn" onClick={updatePointsA2}>+2</button>
                <button className="btn" onClick={updatePointsA3}>+3</button>
            </div>
            <div>
                <button className="btn"onClick={updatePointsB3}>+3</button>
                <button className="btn"onClick={updatePointsB2}>+2</button>
                <button className="btn"onClick={updatePointsB}>+1</button>
            </div>
    
        </div>
 </div>
    
    );
}