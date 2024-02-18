import React from "react";
import { useState } from "react";
import Modal from "react-modal";

const QuestionModal = ({question, answer, money, show, onHide, onDone, onAward}) => {

    const [showAnswer, setShowAnswer] = useState(false);

    const handleAnswer = (v) => {
        setShowAnswer(v);
        onDone(v);
    }

    const handleClose = () => {
        onHide();
    }

    const numeric = (str) => {
        let result = str.slice(1);
        return parseInt(result);
    }

    const handleScore = (team) => {
        const award = numeric(money);
        onAward(team, award);
    }

    return (
        <Modal isOpen={show} onRequestClose={onHide}
        style={{
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: "999",
            },
            content: {
                backgroundColor: "blue",
                color: "white",
                fontFamily: "serif",
                borderRadius: "10px",
                border: "0px none",
                fontSize: "32px",
                boxSizing: "border-box",
                width: "500px",
                height: "500px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }
        }}>
            <div className="modalWrapper" onClick={() => handleAnswer(true)}>
            <div className="cardText">{showAnswer ? answer : question}</div>
            <div className="teamSelectContainer">
                <button className="teamSelectButton" onClick={() => handleScore('a')}>Score A</button>
                <button className="teamSelectButton" onClick={() => handleScore('b')}>Score B</button>
                <button className="teamSelectButton" onClick={() => handleScore('c')}>Score C</button>
                <button className="teamSelectButton" onClick={() => handleScore('d')}>Score D</button>
            </div>
            </div>
        </Modal>
    )
}

export default QuestionModal;