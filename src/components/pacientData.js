import React from 'react'
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PacientGraph = ({pacient_data}) => {

    const dist=pacient_data.reduce((acc,pacient)=>{
        const currentDate= new Date();

        const arrivedDate= new Date(pacient["arrived_timestamp"]); 

        let ellapsedTime = (currentDate.getTime() - arrivedDate.getTime())/(1000*60);

        let pos=3
        console.log(ellapsedTime)
        if (ellapsedTime < 30){
            pos=0
        }else if (ellapsedTime < 60){
            pos=1
        }else if (ellapsedTime < 120){
            pos=2
        }
        const new_array=acc.map((item,index)=>{
            if (index===pos){
                return item+1
            }
            return item
        })
        return new_array
    },[0,0,0,0])

    const labels=["Menos 30 min","30m até 1h","1h até 2h","Mais que 2H"]
    const data = dist.reduce((acc,item,index)=>{
        return [...acc, {
            "name":labels[index],
            "Número de pacientes":item
        }]
    },[]);

    return (
        <PacientGraphWrapper>
            <Title> Pacientes esperando</Title>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Número de pacientes" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
      </PacientGraphWrapper>
    )
  }

export default PacientGraph;

const PacientGraphWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex:1;
    border:1px solid black;
    -webkit-box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88); 
    box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88);
    margin:1rem;
    min-height:30vh;
`

const Title = styled.span`
    text-align:center;
    font-size:1.5rem;
    padding:0.5rem;
`