import React, { useState, useEffect } from 'react';
import '../../css/Calculator.css';
import {createCal} from "./api/create-cal";
import {listTodo} from "../todo/api/todo";
import {listcal} from "./api/cal";

export const Calculator = () => {
    const [result, setResult] = useState("");
    const [history, setHistory] = useState("");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setResult(result.concat((event.target as HTMLButtonElement).name));
    }

    const clear = () => {
        setResult("");
    }

    const calculate = async () => {
        try {

            const calculationResult = eval(result).toString();
            setResult(calculationResult);

            // Tworzenie obiektu z danymi do wysłania
            const data = {history: calculationResult.toString()};

            // Wysyłanie danych do serwera
            await createCal(data);

            // Pobieranie historii obliczeń z serwera
            const calHistory = await listcal();
            setHistory(calHistory.history);
        } catch(error) {
            alert("Błąd :(");
        }
    }

    const calculatePercentage = () => {
        try {
            setResult((eval(result) / 100).toString());
        } catch(error) {
            setResult("Błąd");
        }
    }
    const changeSign = () => {
        try {
            setResult((parseFloat(result) * -1).toString());
        } catch(error) {
            setResult("Błąd");
        }
    }

    return (
        <div className="calculator">
            <h1 className="title">Calculator</h1>
            <form>
                <input type="text" value={result} />
            </form>
            <div className="keypad">
                <button className="btn clear" onClick={clear}>AC</button>
                <button className="btn operator" name="+/-" onClick={changeSign}>+/-</button>
                <button className="btn operator" name="%" onClick={calculatePercentage}>%</button>
                <button className="btn operator" name="/" onClick={handleClick}>/</button>
                <button className="btn" name="7" onClick={handleClick}>7</button>
                <button className="btn" name="8" onClick={handleClick}>8</button>
                <button className="btn" name="9" onClick={handleClick}>9</button>
                <button className="btn operator" name="*" onClick={handleClick}>*</button>
                <button className="btn" name="4" onClick={handleClick}>4</button>
                <button className="btn" name="5" onClick={handleClick}>5</button>
                <button className="btn" name="6" onClick={handleClick}>6</button>
                <button className="btn operator" name="-" onClick={handleClick}>-</button>
                <button className="btn" name="1" onClick={handleClick}>1</button>
                <button className="btn" name="2" onClick={handleClick}>2</button>
                <button className="btn" name="3" onClick={handleClick}>3</button>
                <button className="btn operator" name="+" onClick={handleClick}>+</button>
                <button className="btn zero" name="0" onClick={handleClick}>0</button>
                <button className="btn" name="." onClick={handleClick}>.</button>
                <button className="btn equal" onClick={calculate}>=</button>
            </div>
            <div style={{marginTop: "20px"}} className="history">
                Last Result: {history}
            </div>
        </div>
    );
}
