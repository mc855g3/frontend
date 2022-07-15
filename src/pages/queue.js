import React, {useState,useEffect, useContext} from 'react';
import styled from 'styled-components';
import ItemPacient from '../components/itemPacient.js';
import PacientCounter from '../components/totalPacientCounter.js';
import TopBar from '../components/topBar.js';
import RefreshIcon from '@mui/icons-material/Refresh';
import PacientGraph from '../components/pacientData.js';
import { API_BASE } from '../constants/constants.js';
import AuthContext from '../context/authContext.js';
import { useNavigate } from 'react-router';
const QueuePage = () => {
    const [data, setData] = useState([        
    ]);

    const {authString} = useContext(AuthContext)
    const history=useNavigate()

    console.log(authString)
    if(!authString){
        history("/login")
        
    }
    const getApiData = async () =>{
        const response = await fetch(`${API_BASE}/patient`,{
            method:"GET",
            headers: {"Authorization": `Basic ${authString}`}
        })
        const data= await response.json()
        setData(data)
    }
    

    useEffect(()=>{
            getApiData()

            const interval=setInterval(()=>{
                getApiData()
            },10000)


            return ()=>clearInterval(interval)
    },[])
    



    const handleDelete = async (hc) => {


        const response = await fetch(`${API_BASE}/patient/${hc}`,{
            method:"DELETE",
            headers: {"Authorization": `Basic ${authString}`}
        })
        getApiData()
    }

    const handleRefresh = () => {
        getApiData()
    }

    return (
        <QueuePageWrapper >
            <TopBar/>
            <RefreshButton onClick={() => handleRefresh()}>
                <RefreshIcon/>
            </RefreshButton>
            <ContentWrapper>
                <PacientListArea>
                    {data.map((item,index)=>{
                        return (
                            <ItemPacient key={index} hc={item["hc"]} arrived_timestamp={item["arrived_timestamp"]} handleDelete={handleDelete}/>
                        )
                    })}
                </PacientListArea>
                <InsightArea>
                    
                <PacientCounter numberPacients={data.length}/>
                <PacientGraph pacient_data={data}/>
                </InsightArea>
            </ContentWrapper>
        </QueuePageWrapper>
    )
}

export default QueuePage
const QueuePageWrapper = styled.div`
    
`

const PacientListArea = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`

const InsightArea = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    min-height:70vh;
`
const RefreshButton = styled.button`
    width:5rem;
    margin:0.2rem 1rem;
    background:#4470b8;
    border-radius:10%;
    padding:5px 12px;
    -webkit-box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88); 
    box-shadow: 0px 5px 15px -2px rgba(0,0,0,0.88);
    &:hover{
        cursor:pointer;

    }
`

const ContentWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    @media only screen and (max-width: 500px) {
        flex-wrap:wrap;
        flex-direction: column-reverse;

      }
`
