import React, {useState} from 'react';
import styled from 'styled-components';
import ResponseComponent from '../components/responseComponent.js';
import QuestionComponent from '../components/questionComponent.js';
import flow from '../constants/flow.js';
import InputHC from '../components/inputHC.js';
import TopBar from '../components/topBar.js';
const ChatPage = () => {
    const [currentState, setCurrentState] = useState(0);

    return (
    <ChatPageWrapper>
        <TopBar/>
        <QuestionComponent questionText = {flow[currentState]["question"]}/>
        {flow[currentState]["inputState"] === true && <InputHC updateFunction = {setCurrentState} stateUponSubmit={flow[currentState]["nextStateAfterSubmit"]}/>}
        <ResponseComponent responseOptions = {flow[currentState]["options"]} updatefunction = {setCurrentState} />     
    </ChatPageWrapper>
    )
}

export default ChatPage
const ChatPageWrapper = styled.div`

`


