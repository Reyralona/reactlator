import React, { useState } from "react";
import "../styles/calculator.css";

function Calculator() {
    const [buff, setBuff] = useState("");
    const [scbuff, setScbuff] = useState("");

    function setbuffers(val1, val2) {
        setBuff(val1);
        setScbuff(val2);
    }

    function overwrite(value, actual) {
        setbuffers(actual, value);
    }

    function writesc(value, actual) {
        if (scbuff == "error!" || scbuff == "Infinity" || scbuff == "-Infinity") {
            overwrite(value, actual);
        } else {
            setbuffers(buff + actual, scbuff + value);
        }
    }
    function deletelast() {
        setbuffers(buff.slice(0, 1), scbuff.slice(0, -1));
    }
    function clearall() {
        setbuffers("", "");
    }

    function evaluate() {
        try {
            let res = eval(buff);
            if (isNaN(res)) {
                setbuffers("error!", "error!");
            } else {
                setbuffers(res, res);
            }
        } catch {
            setbuffers("error!", "error!");
        }
    }

    return (
        <div className="calculator">
            <div className="screen">{scbuff}</div>
            <button
                onClick={() => {
                    deletelast();
                }}
            >
                {"<"}
            </button>
            <button
                onClick={() => {
                    clearall();
                }}
            >
                C
            </button>
            <button
                onClick={() => {
                    writesc("%", "%");
                }}
            >
                %
            </button>
            <button
                onClick={() => {
                    writesc("÷", "/");
                }}
            >
                ÷
            </button>
            <button
                onClick={() => {
                    writesc(7, 7);
                }}
            >
                7
            </button>
            <button
                onClick={() => {
                    writesc(8, 8);
                }}
            >
                8
            </button>
            <button
                onClick={() => {
                    writesc(9, 9);
                }}
            >
                9
            </button>
            <button
                onClick={() => {
                    writesc("×", "*");
                }}
            >
                ×
            </button>
            <button
                onClick={() => {
                    writesc(4, 4);
                }}
            >
                4
            </button>
            <button
                onClick={() => {
                    writesc(5, 5);
                }}
            >
                5
            </button>
            <button
                onClick={() => {
                    writesc(6, 6);
                }}
            >
                6
            </button>
            <button
                onClick={() => {
                    writesc("-", "-");
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    writesc(1, 1);
                }}
            >
                1
            </button>
            <button
                onClick={() => {
                    writesc(2, 2);
                }}
            >
                2
            </button>
            <button
                onClick={() => {
                    writesc(3, 3);
                }}
            >
                3
            </button>
            <button
                onClick={() => {
                    writesc("+", "+");
                }}
                className="span-two"
            >
                +
            </button>
            <button
                onClick={() => {
                    writesc(".", ".");
                }}
            >
                .
            </button>
            <button
                onClick={() => {
                    writesc(0, 0);
                }}
            >
                0
            </button>
            <button
                onClick={() => {
                    evaluate();
                }}
            >
                =
            </button>
        </div>
    );
}

export default Calculator;
