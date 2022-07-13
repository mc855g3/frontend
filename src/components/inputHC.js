import React from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { API_BASE } from '../constants/constants';
const InputHC = (attrs) => {

  const { register, handleSubmit } = useForm();

  const checkAccept = async (data) => {
    // TODO: make api request
    const form_data = new FormData()

    form_data.append("hc",data.hc_input)

    const response= await fetch(`${API_BASE}/pacient`, {
      method: "POST",
      body: form_data,
    })
    console.log(response.json())
    attrs.updateFunction(attrs.stateUponSubmit)
  }
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