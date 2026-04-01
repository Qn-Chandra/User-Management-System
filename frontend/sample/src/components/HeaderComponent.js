import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return(
            <div>
                <header>
                    <nav classNmae="navbar navbar-dark"
                    bg-primary>
                        <div>
                            <a href='/users'></a>
                            User Management App
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent