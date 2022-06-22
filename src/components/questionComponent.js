import React from 'react'
import icon from '../images/robot.svg'
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
        flex-direction: column;    
    }
    
`

const ChatIcon = styled.img`
    width: 12rem;
    margin-right: 30px;
    @media (max-width: 500px) {
        width: 10rem;
        margin-right: 0px;
        margin-bottom: 2rem;
    } 
`
const QuestionArea = styled.div`
    background: #D3D3D3;
    width: 60%;
    padding: 10px; 
    -webkit-box-shadow: 3px 6px 6px 5px rgba(0,0,0,0.38); 
    box-shadow: 3px 6px 6px 5px rgba(0,0,0,0.38);
    border-radius: 15px;
    @media (max-width: 500px) {
        margin-bottom: 2rem;
    } 
`
const QuestionText = styled.p`
    font-size: 1.35rem;
`