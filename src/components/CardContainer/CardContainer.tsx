import React from 'react'
import AmountDisplay from '../AmountDisplay/AmountDisplay'
import TargetAddressInput from '../TargetAddressInput/TargetAddressInput'
import AllowanceDisplay from '../AllowanceDisplay/AllowanceDisplay'
import ApproveButton from '../ApproveButton/ApproveButton'
import TransferButton from '../TransferButton/TransferButton'

const CardContainer = () => {
  return (
    <div>
      <AmountDisplay/>
      <TargetAddressInput/>
      <AllowanceDisplay/>
      <AllowanceDisplay/>
      <ApproveButton/>
      <TransferButton/>
    </div>
  )
}

export default CardContainer