import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      const div = messagesRef.current

      if(div){
         div.scrollTop = div.scrollHeight;
      }
   })

   return (
      <Container>
         <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map(n => (
               <ChannelMessage
                  key={n}
                  author="Layane Fernandes"
                  date="17/08/2021"
                  content="Today is my birthday!"
               />
            ))}
            <ChannelMessage
               author="João Neto"
               date="17/08/2021"
               content={
                  <>
                     <Mention>@Layane Fernandes</Mention>, can you carry me on RL again pls?
                  </>
               }
               hasMention
               isBot
            />
         </Messages>
         <InputWrapper>
            <Input type="text" placeholder="Talk #open-chat"/>
            <InputIcon />
         </InputWrapper>
      </Container>
   )
}

export default ChannelData