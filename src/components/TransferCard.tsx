import React from 'react'
import { formatBalance, classColor } from '../util_functions'

export default function TransfersCard(props: any){

    return(

        <div className='transfer-card'>

            <div>{props.peer}</div>
            
            <div className={classColor(props.transfer)} >{formatBalance.format(props.transfer)}</div>

        </div>
        
    )
}