import React from 'react'

import { Container, Category, AddCategoryIcon } from './styles'

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
   return (
      <Container>
         <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
         </Category>
         <ChannelButton channelName="open-chat" selected />
         <ChannelButton channelName="work" />
         <ChannelButton channelName="rocketleague" />
         <ChannelButton channelName="csgo" />
      </Container>
   )
}

export default ChannelList;