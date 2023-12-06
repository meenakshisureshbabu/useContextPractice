import { createContext,useState } from "react";
import gifts from "../models/gifts";// import the data to be transferred

export const GiftContext = createContext(); 

function GiftProvideContext(props) {

  const [gift,setGift] = useState(gifts)
  return (
    <GiftContext.Provider value={{
      gift,setGift

    }}>
      {props.children}
    </GiftContext.Provider>
    
  )
}

export default GiftProvideContext