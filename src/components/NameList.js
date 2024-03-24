import React from 'react'
import Person from './Person'
function NameList() {
    const person = [
        {
            id: 1,
            name: 'Chí',
            skill: 'Python' 
        },
        {
            id: 2,
            name: 'Khoa',
            skill: 'SQL'
        },
        {
            id: 3,
            name: 'Phát',
            skill: 'Javascrpits'
        },
        {
            id: 4,
            name: 'Hào',
            skill: 'Golang'
        }
   ]
   const personList = person.map(person => 
    <Person key = {person.id} person ={person}/>
    )
  return (
    <div>{personList}</div>
  )
}

export default NameList