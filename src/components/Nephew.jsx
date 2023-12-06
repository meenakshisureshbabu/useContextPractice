import React from 'react'
import { useContext } from 'react'
import { GiftContext } from '../contexts/GiftProvideContext'

function Nephew() {

  let presentforNep = useContext(GiftContext);

  return (
    <div><h1>Nephew</h1>
    {
      <h2>{presentforNep.gift[0].nephew}</h2>
    }
    </div>
  )
}

export default Nephew