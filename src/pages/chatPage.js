import React, {useState} from 'react';
import styled from 'styled-components';
import ResponseComponent from '../components/responseComponent.js';
import QuestionComponent from '../components/questionComponent.js';
import flow from '../constants/flow.js';

const ChatPage = () => {
    const [currentState, setCurrentState] = useState(0);

    return (
    <ChatPageWrapper>
        <QuestionComponent questionText = {flow[currentState]["question"]}/>
        <ResponseComponent responseOptions = {flow[currentState]["options"]} updatefunction = {setCurrentState} />     
    </ChatPageWrapper>
    )
}

export default ChatPage
const ChatPageWrapper = styled.div`

`


