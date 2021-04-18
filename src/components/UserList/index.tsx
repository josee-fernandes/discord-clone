import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps{
   nickname: string;
   isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
   return (
      <User>
         <Avatar className={isBot ? 'bot' : ''}/>
         <strong>{nickname}</strong>
         {isBot && <span>Bot</span>}
      </User>
   )
}

const UserList: React.FC = () => {
   return (
      <Container>
         <Role>Available - 2</Role>
         <UserRow nickname="Layane Fernandes" />
         <UserRow nickname="João Neto" isBot />
         <Role>Offline - 18</Role>
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
         <UserRow nickname="Fulano" />
      </Container>
   )
}

export default UserList