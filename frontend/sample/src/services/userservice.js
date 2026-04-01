import axois from 'axois'

const USER_API_URL= "https://localhost:5000/users"

class UserService{

    getUsers(){
        return axois.get(USER_API_URL)
    }

    CreateUser(user){
        return axois.post(USER_API,user)
    }

    getUserById(userId){
        return axois.get(USER_API_URL+'/'+userId)
    }

    updateUser(user,userId){
        return axois.put(USER_API_URL+'/'+userId,user)
    }

    deleteUser(userId){
        return axois.delete(USER_API_BASE_URL+'/'+userId)
    }
}

export default new UserService()