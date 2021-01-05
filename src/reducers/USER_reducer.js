import { LOGIN_USERS , REGISER_USERS} from '../actions/types'

// const LOGIN_USER = "User_arcions/LOGIN_USERS"

// const initialstate = {
//         payload:""
// }


export default function(state = {} , action) {
        switch(action.type){
            case LOGIN_USERS :
                return {...state , success: action.payload}
                break;
 
                case REGISER_USERS :
                        return {...state , success : action.payload}
                        break;

                default: return state;
        }

}