import React from "react"
import UserServices from '../services/userservice'

class listUserComponents extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
        this.addUser = this.addUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.deleteUser = this.deleteUserUser.bind(this)
        
    }
    render(){
        return(
            <div>
                <h2 className='text-center'>User List</h2>
                <div className='row'>
                    <button onClick={this.addUser} className='btn  btn-primary'>Add User</button>
                </div>
                <br></br>
                <table>
                    <thead>
                        <th>
                            User First Name
                        </th>
                         <th>
                            User Last Name
                        </th>
                        <th>
                            User Email Id
                        </th>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lasttName}</td>
                                    <td>{user.emailId}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default listUserComponents