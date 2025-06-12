import React from 'react'
import { Book } from './Book'


export const Cards = ({item}) => {
  return (
    <div>
        <Book {...item}/>
    </div>
  )
}
