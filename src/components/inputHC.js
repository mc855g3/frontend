import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { API_BASE } from '../constants/constants';
const InputHC = (attrs) => {

  const [lat,setLat] = useState(null)
  const [long,setLong] = useState(null)
  const [status,setStatus] = useState()

  const ask_for_geolocation= () =>{
    if (!lat || !long)
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position.coords.latitude,position.coords.latitude)
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
        setStatus("allowed")
      },function(error) {
        alert("Nos precisamos da sua localização para verificar se você realmente esta nas proximidades do HC. Você precisara liberar a permissão de geolocalização para continuar.");
        setStatus("not allowed")
      })
  }

  const { register, handleSubmit } = useForm();

  const checkAccept = async (data) => {

    if (status!=="allowed"){
      alert("Você precisa permitir o site pegar sua localização para continuar")
      ask_for_geolocation()
      return 
    }
    
    if (!lat || !long){
      alert("Estamos recuperando sua localização, por favor tente novamente em alguns segundos")
      return 
    }

    const body = {
      "hc":data.hc_input,
      "lat":lat,
      "long":long,
    }

    const response= await fetch(`${API_BASE}/patient`, {
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(body),
    })
    attrs.updateFunction(attrs.stateUponSubmit)
  }
  
  useEffect(()=>{
    ask_for_geolocation()
  })

  return (
    <InputForm onSubmit={handleSubmit(checkAccept)}>
        <InputComponent required placeholder='Seu HC' {...register('hc_input')}/>
        <ResponseButton type='submit'>Enviar</ResponseButton>
    </InputForm>
  )
}

export default InputHC

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     
`
const InputComponent = styled.input`
    font-size: 1.5rem;
    -webkit-box-shadow: 3px 6px 6px 5px rgba(0,0,0,0.38); 
    box-shadow: 3px 6px 6px 5px rgba(0,0,0,0.38);
    border-radius:10px;
    margin-bottom: 1rem;
    min-width:45%;
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