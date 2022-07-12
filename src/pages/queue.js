import React, {useState} from 'react';
import styled from 'styled-components';
import ItemPacient from '../components/itemPacient.js';
import PacientCounter from '../components/totalPacientCounter.js';
import TopBar from '../components/topBar.js';
import RefreshIcon from '@mui/icons-material/Refresh';
import PacientGraph from '../components/pacientData.js';
const QueuePage = () => {
    const [data, setData] = useState([
        {
            "hc": "123123",
            "arrived_timestamp": "2022-07-08T20:07:19.006Z" 
        },
        {
            "hc": "245666",
            "arrived_timestamp": "2022-07-08T19:39:50.558Z"
        },
        {
            "hc": "345543",
            "arrived_timestamp": "2022-07-08T19:09:50.558Z"
        },
        {
            "hc": "321451",
            "arrived_timestamp": "2022-07-08T18:25:29.558Z"
        }
    ]);

    const handleDelete = (hc) => {

        //TODO: change to work with backend

        const new_data = data.filter((item) => {
            return item["hc"]!==hc
        })
        setData(new_data)
    }

    const handleRefresh = () => {

            //TODO: change to work with backend

            const new_data = [{
                "hc": "123123",
                "arrived_timestamp": "2022-07-08T20:07:19.006Z" 
            },
            {
                "hc": "245666",
                "arrived_timestamp": "2022-07-08T19:26:50.558Z"
            },
            {
                "hc": "345543",
                "arrived_timestamp": "2022-06-08T16:15:21.558Z"
            },
            {
                "hc": "321451",
                "arrived_timestamp": "2022-07-08T18:25:29.558Z"
            }
        ]
        setData(new_data)
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
