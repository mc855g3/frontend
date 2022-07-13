import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
const ItemPacient = ({hc,arrived_timestamp, handleDelete}) => {


  const currentDate= new Date();

  const arrivedDate= new Date(arrived_timestamp+"Z");

  let ellapsedTime = (currentDate.getTime() - arrivedDate.getTime())/1000;
  let unity="segundos"

  if (ellapsedTime > 60){
    unity="minutos"
    ellapsedTime=ellapsedTime/60
  }

  if (ellapsedTime > 60 && unity==="minutos"){
    unity="horas"
    ellapsedTime=ellapsedTime/60
  }

  if (ellapsedTime > 24 && unity==="horas"){
    unity="dias"
    ellapsedTime=ellapsedTime/24
  }

  ellapsedTime=Math.floor(ellapsedTime)

  return (
    <ItemPacientArea>
        <PacientDeleteIcon onClick={() => handleDelete(hc)}/>
        <HCText>HC {hc}</HCText>
        <TimestampText>{ellapsedTime} {unity}</TimestampText>
    </ItemPacientArea>
  )
}

export default ItemPacient

const ItemPacientArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    -webkit-box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88); 
    box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88);
`

const TimestampText = styled.span`
    font-size: 1.2rem;
    color:grey;
    margin-left:1rem;
`

const HCText = styled.span`
    font-size: 1.2rem;
    color:black;
`

const PacientDeleteIcon = styled(CloseIcon)`
  color: gray !important;
  cursor:pointer;
  &:hover{
    color: red !important;

  }
`;