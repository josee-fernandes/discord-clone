import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

import { Props } from '.'

export const Container = styled.div<Props>`
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   padding: 5px 3px;
   border-radius: 5px;
   background-color: transparent;
   transition: background-color .2s;

   > div{
      display: flex;
      align-items: center;
      
      span{         
         margin-left: 5px;
         color: var(--senary);
      }

      &:nth-child(2){
         svg{
            display: ${props => props.selected ? 'inline' : 'none'};
         }
      }
   }

   &.active, &:hover{
      background-color: var(--quinary);
      
      > div {
         span{ color: var(--white); }

         svg{
            display: inline;
         }
      }
   }
`

export const HashtagIcon = styled(Hashtag)`
   width: 20px;
   height: 20px;
   color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
   width: 16px;
   height: 16px;
   color: var(--symbol);
   cursor: pointer;
   transition: color .2s;

   &:hover{
      color: var(--white);
   }
`

export const SettingsIcon = styled(Settings)`
   width: 16px;
   height: 16px;
   margin-left: 4px;
   color: var(--symbol);
   cursor: pointer;
   transition: color .2s;

   &:hover{
      color: var(--white);
   }
`