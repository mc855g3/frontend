import React from 'react'
import styled from 'styled-components';
const TopBar = () => {
  return (
    <TopBarArea>
        <BarText>
            AMBULATÓRIO DE PEDIATRIA HC UNICAMP
        </BarText>
    </TopBarArea>
  )
}

export default TopBar

const TopBarArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #2BA4E2;
    margin-bottom: 5rem;
    @media (max-width: 500px) {
        margin-bottom: 2.5rem;
    } 
    
`
const BarText = styled.p`
    font-size: 2rem;
    color:white;
`