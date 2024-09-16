import React from 'react'
import { useState } from 'react'
import { genticket , sum } from './helper'

import Ticket from './components/Ticket';

function Lottry({n=3 ,winningSum=15}) {
   const [ticket ,setTicket] = useState(genticket(n))
   const isWinning =sum(ticket) === winningSum ;
  const buyTicket=()=>{
    setTicket(genticket(n));
    
  }

  return (
    <div>
      <h1>Lottry Game</h1>
      
      <Ticket ticket={ticket}/>
     
      <button onClick={buyTicket}>Buy New Ticket</button>
   
      <h3>{isWinning && "congratulations , you won!"}</h3>
    </div>
  )
}

export default Lottry
