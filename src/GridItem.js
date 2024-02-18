import { useState } from "react";
import React from "react";
import QuestionModal from './questionModal';
import './App.css';

// pass an object containing price, question, and answer
// i.e. ["$100", "Who is Biden?", "The president"]
const GridItem = ({params, onRecord}) => {

    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [done, setDone] = useState(null)

    const handleModal = (v) => {
        setShowQuestionModal(v);
    }

    const handleDone = (val) => {
        setDone(val);
        console.log(val)
    }

    const handleAward = (team, val) => {
        console.log(val)
        console.log(team)
        onRecord(team, val);
    }

    return(
        <div className={`gridItem ${done ? 'dim' : ''}`} onClick={() => handleModal(true)}>
            <QuestionModal show={showQuestionModal} question={params[1]} answer={params[2]} money={params[0]} onDone={handleDone} onAward={handleAward} onHide={() => setShowQuestionModal(false)}></QuestionModal>
            <div className="gridTitle">{params[0]}</div>
        </div>
    )
}

export default GridItem;