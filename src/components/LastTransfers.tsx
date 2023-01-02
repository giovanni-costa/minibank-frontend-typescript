import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../main';
import TransfersCard from './TransferCard';
import { TransferObj } from '../types/project_types';

export default function LastTransfers(props: any){

    let records: JSX.Element[] = []
    const[lastTransfers, setTransfers] = useState(records)

    useEffect( () => { 
        fetchData();
    }, [props.userInfo]);

    async function fetchData() {

        try {

            const api = axios.create({
                baseURL: API_URL,
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${props.hashToken}`
                }
            })

            const res = await api.get(`transfers/${props.userInfo.id}`); 
            // console.log(res.data)

            res.data.forEach((element: TransferObj) => {

                const peer = element.sender !== props.userInfo.id?
                    `From: ${element.sender}` : `To: ${element.receiver}`
                
                const transfer = peer === props.userID?
                    parseFloat(element.value) : -parseFloat(element.value)

                records.push(
                    <li key={element.id}>
                        <TransfersCard peer={peer} transfer={transfer}/>
                    </li>
                )
            })
            
            setTransfers(records)
            records = []

        } catch (err) { console.log(err) }
    }

    return(

        <div className='last-transfers'>
            <ul>{lastTransfers}</ul>
        </div>
        
    )
}