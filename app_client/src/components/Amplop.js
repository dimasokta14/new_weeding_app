import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Segment,
  Image
} from 'semantic-ui-react'

import QR from '../assets/qr.png'
import Icbca from '../assets/bac.png'

const StyledSegment = styled(Segment)`
  border: none !important;
`

const Amplop = () => {
  return (
    <Grid columns='equal' centered>
      <Grid.Column mobile={16} computer={16} tablet={16}>
        <h3 className='title' style={{textAlign: 'center'}}>amplop online</h3>
        <StyledSegment>
          <Image src={QR}/>
        </StyledSegment>
        <h3 className='title' style={{textAlign: 'center', fontSize: '12px'}}>BCA - 1234567890</h3>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Image src={Icbca} size='mini'/>
        </div>
      </Grid.Column>
    </Grid>
  )
}

export default Amplop
