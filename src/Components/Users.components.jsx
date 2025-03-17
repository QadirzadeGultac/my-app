import React from 'react'
import { useState } from 'react'
import './Users.css'
import UsersHeader from './Users_header.components'
const Users = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.example.com/data") // Buraya API linkini yaz
    //       .then((response) => response.json())
    //       .then((data) => setData(data))
    //       .catch((error) => console.error("API xətası:", error));
    //   }, []);
  return (
    <div className='users-main'>
        <UsersHeader />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tam adı</th>
            <th>İstifadəçi adı</th>
            <th>Telefon</th>
            <th>Password</th>
            <th>Aktivlik</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td colSpan="6">Məlumat yoxdur</td>
            </tr>
            {/* 
            {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
             */}
        </tbody> 
      </table>
    </div>
  )
}

export default Users
