// src/App.jsx
import { useState } from 'react'

const users = [
  { firstName: "Harsha", id: 1 },
  { firstName: "vardhan", id: 2 },
  { firstName: "ram", id: 3 },
  { firstName: "Sai", id: 4 },
  { firstName: "raju", id: 5 },
  { firstName: "ramikadas", id: 6 },
  { firstName: "Das", id: 7 },
  
]


    function Seacrhfilter() {
    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(users)
  
    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)
  
      const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setFilteredUsers(filteredItems);
    }
  
    return (
      <>
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder='Type to search'
        />
        <ul>
          {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
        </ul>
      </>
    )
  }
  
  export default Seacrhfilter