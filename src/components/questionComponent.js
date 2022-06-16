import React from 'react'
import icon from '../images/icon.png'
import styled from 'styled-components';
const QuestionComponent = (attrs) => {
  return (
    <div>
      <RoboArea>
            <ChatIcon src = {icon}/>
            <QuestionArea>
                <QuestionText>
                    {attrs["questionText"]}
                </QuestionText>
            </QuestionArea>
        </RoboArea>
    </div>
  )
}

export default QuestionComponent

const RoboArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        flex-wrap: wrap;    
    }
    
`

const ChatIcon = styled.img`
    width: 9.375rem;
    margin-right: 30px;
    @media (max-width: 500px) {
        margin-right: 0px;
    } 
`
const QuestionArea = styled.div`
    background: #D3D3D3;
    width: 60%;
    padding: 10px; 
`
const QuestionText = styled.p`
    font-size: 1.56rem;
`