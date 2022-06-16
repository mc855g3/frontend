import React from 'react'
import styled from 'styled-components';

const ResponseComponent = (attrs) => {
    const handleButtonClick = (nextstate) => {
        attrs["updatefunction"](nextstate)
    }
    return (
    <ResponseOptionsArea>
        {attrs["responseOptions"].map((data, index) =>
            <ResponseButton key = {index} onClick={()=>handleButtonClick(data["nextstate"])}>{data["text"]}</ResponseButton>
        )}
        
    </ResponseOptionsArea>
    )
}

export default ResponseComponent
const ResponseOptionsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const ResponseButton = styled.button`
    width : 55%;
    padding: 25px;
    font-size: 1.25rem;
    margin: 20px;
    border-radius:60px;
    -webkit-box-shadow: 3px 6px 6px 5px rgba(0,0,0,0.38); 
    box-shadow: 3px 6px 6px 5px rgba(0,0,0,0.38);
    &: hover{
        cursor: pointer;
        background:#D5E7F0;
    }
`