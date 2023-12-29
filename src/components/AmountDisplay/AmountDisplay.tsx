import React from 'react'
import TokenInput from '../TokenInput/TokenInput'

const AmountDisplay = () => {
  return (
    <div>
        <div>
        <span>select amount</span>
        <TokenInput/>
        <span>balance:</span>
        </div>
        <div>
            <span>0,28</span>
            <button>send all</button>
        </div>
       
    </div>
  )
}

export default AmountDisplay