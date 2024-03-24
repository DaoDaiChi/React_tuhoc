import React from 'react'

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
   const personList = person.map(person => (
    <h2>
        I am {person.name} with {person.skill}
    </h2>
    ))
  return (
    <div>{personList}</div>
  )
}

export default NameList