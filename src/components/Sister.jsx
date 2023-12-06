import React from 'react'
import { useContext } from 'react'
import { GiftContext } from '../contexts/GiftProvideContext'

function Sister() {
  
  let presentforSis = useContext(GiftContext);
  
  //console.log(present.gift);
  
  return (
    <div>
      <h1>Sister</h1>
      {
        presentforSis.gift.map((giftfor) => {
          return (
            <h2>Gift for Sister:{giftfor.sister}</h2>
          )
        })
      }
    </div>
  )
}

export default Sister