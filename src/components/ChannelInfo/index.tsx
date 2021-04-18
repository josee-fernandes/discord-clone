import React from 'react'

import { Container, HashtagIcon, Title, Separator, Description } from './styles'

const ChannelInfo: React.FC = () => {
   return (
      <Container>
         <HashtagIcon />
         <Title>open-chat</Title>
         <Separator />
         <Description>Channel open to talk</Description>
      </Container>
   )
}

export default ChannelInfo;