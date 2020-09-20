import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


const STORE_EMAIL = 'STORE_EMAIL';
const STORE_USER_PROFILE = 'STORE_USER_PROFILE'
const STORE_ACCOUNT_INFO = 'STORE_ACCOUNT_INFO'
const SET_SHARE_WITH_NETWORK = 'SET_SHARE_WITH_NETWORK'
const SET_NAME = 'SET_NAME'
const SET_DATE_OF_BIRTH = 'SET_DATE_OF_BIRTH'
const SET_GENDER = 'SET_GENDER'
const SET_COUNTRY = 'SET_COUNTRY'
const SET_GOAL = 'SET_GOAL'
const SET_EXERCISE = 'SET_EXERCISE'

const initialState = {
    email: "guestuser",
    name: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    shareWithNetwork: true,
    goal: "",
    exercise: ""
}

export function storeEmail(email) {
    console.log('store user action', email)
    return {
        type: STORE_EMAIL,
        payload: {
            email: email,
        }
    }
}

export function storeUserProfile(profile) {
    return {
        type: STORE_USER_PROFILE,
        payload: {
            profile: profile
        }
    }
}

export function storeAccountInfo(account) {
    return {
        type: STORE_ACCOUNT_INFO,
        payload: {
            account: account
        }
    }
}

export function setShareWithNetwork(shareWithNetwork) {
    return {
        type: SET_SHARE_WITH_NETWORK,
        payload: {
            shareWithNetwork: shareWithNetwork
        }
    }
}

export function setName(name) {
    console.log(name)
    return {
        type: SET_NAME,
        payload: {
            name: name
        }
    }
}

export function setDateOfBirth(dateOfBirth) {
    return {
        type: SET_DATE_OF_BIRTH,
        payload: {
            dateOfBirth: dateOfBirth
        }
    }
}

export function setGender(gender) {
    return {
        type: SET_GENDER,
        payload: {
            gender
        }
    }
}

export function setCountry(country) {
    return {
        type: SET_COUNTRY,
        payload: {
            country
        }
    }
}

export function setGoal(goal){
    console.log('cs', goal)
    return {
        type: SET_GOAL,
        payload: {
            goal
        }
    }
}

export function setExercise(exercise){
    return {
        type: SET_EXERCISE,
        payload: {
            exercise
        }
    }
}


function userReducer(state = initialState, action) {
    console.log('reducer hit')
    const { payload } = action;
    switch (action.type) {
        case STORE_EMAIL:
            console.log('case store email', payload.email)
            return {
                ...state,
                email: payload.email,
            }
        case STORE_USER_PROFILE:
            let { firstName, lastName, university, graduationDate, degree, major } = payload.profile
            return {
                ...state,
                firstName: firstName,
                lastName: lastName,
                university: university,
                graduationDate: graduationDate,
                degree: degree,
                major: major
            }
        case STORE_ACCOUNT_INFO:
            var { name, dateOfBirth, gender, country, shareWithNetwork } = payload.account
            return {
                ...state,
                name,
                dateOfBirth,
                gender,
                country,
                shareWithNetwork
            }
        case SET_NAME:
            console.log('name', payload.name)
            return {
                ...state,
                name: payload.name
            }
        case SET_COUNTRY:
            return {
                ...state,
                country: payload.country
            }
        case SET_GENDER:
            return {
                ...state,
                gender: payload.gender
            }

        case SET_SHARE_WITH_NETWORK:
            var { shareWithNetwork } = payload.shareWithNetwork
            return {
                ...state,
                shareWithNetwork: shareWithNetwork
            }

        case SET_DATE_OF_BIRTH:
            var { dateOfBirth } = payload.dateOfBirth
            return {
                ...state,
                dateOfBirth: dateOfBirth
            }

        case SET_GOAL:
            return {
                ...state,
                goal: payload.goal
            }

        case SET_EXERCISE:
            return {
                ...state,
                exercise: payload.exercise
            }

        default:
            return state
    }
}

var store = createStore(userReducer, composeWithDevTools());

export default store;