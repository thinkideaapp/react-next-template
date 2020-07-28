import { User } from "./types"

export const login = async (username: string, password: string): Promise<User|null> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {     
            if(password == '123' && username == 'women'){
                resolve({
                    username: 'Women',
                    photo: 'https://randomuser.me/api/portraits/women/51.jpg'
                })
            }else{
                resolve(null)
            }
        }, 300);        
    })
}