import axios from "axios"
import FormAdd from './FormAdd'
import { useEffect, useState } from "react"

export default function FormUsers() {

    const [users, setUsers] = useState([]);
    const [usersFiltred, setUsersFiltred] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> {
            setUsers(res.data)
            setUsersFiltred(res.data)
        })
    }
    ,[])

    function filterUser(e) {
        if(e.target.value !== '') {
            setUsersFiltred(users.filter(
                (user)=> user.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
        } else {
            setUsersFiltred(users);
        }
    }

    function add(user) {
        setUsersFiltred([...users, user]);
        setUsers([...users, user]);        
    }
    
    return <div className="container">
        <div className="form-add">
            <FormAdd add={add} id={Math.max(...users.map((user) => user.id)) + 1} />
        </div>
        <div className="list-user">
            <input onChange={filterUser} placeholder="Rechercher par nom" />
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Tel</th>
                </tr>
            
            {
                usersFiltred.map(
                    (user) => <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                )
            }
            </table>
        </div>
    </div>
}