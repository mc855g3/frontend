import React from 'react'
import styled from 'styled-components';
const PacientCounter = ({numberPacients}) => {
  return (
    <PacientCounterArea>
        <PacientCounterText>
            Total de pacientes esperando.
        </PacientCounterText>
        <PacientCounterText>
            <strong>{numberPacients}</strong>
        </PacientCounterText>
    </PacientCounterArea>
  )
}

export default PacientCounter

const PacientCounterArea = styled.div`
    display: flex;
    flex-direction: column;
    min-height:20vh;
    max-height:40vh;
    align-items: center;
    justify-content: space-around;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    -webkit-box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88); 
    box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88);
`

const PacientCounterText = styled.span`
    
    font-size: 2rem;
    text-align:center;
    color:black;
`