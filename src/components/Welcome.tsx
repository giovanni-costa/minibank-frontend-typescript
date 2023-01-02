import React from 'react'
import { formatBalance } from '../util_functions'

export default function WelcomeCard(props: any){

    return(

        <div className='welcome-ui'>           

            <div>Welcome, {props.userInfo.sub}</div>
            
            <div key={props.userInfo.amount}>{formatBalance.format(props.userInfo.amount)}</div>

        </div>
        
    )
}