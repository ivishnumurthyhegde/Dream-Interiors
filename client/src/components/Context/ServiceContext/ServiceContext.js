import { createContext,  useReducer } from "react";
import axios from "axios";
import { 
    SERVICE_DETAILS_FAIL,
    SERVICE_DETAILS_SUCCESS,
    SERVICE_CREATION_SUCCES,
    SERVICE_CREATION_FAIL
} from "./serviceActionTypes";
import { API_URL_SERVICE } from "../../../utils/apiURL";


 export const serviceContext= createContext();

const INITIAL_STATE={
    userAuth: JSON.parse(localStorage.getItem('userAuth')),
    services: [],
    loading : false,
    error: null,
};
const serviceReducer=(state, action)=>{
    const {type, payload} = action;
    switch(type){
// Account Details
        case SERVICE_DETAILS_SUCCESS:
            return {
            ...state,
            account: payload,
            loading:false,
            error: null,
            };
        case SERVICE_DETAILS_FAIL:
                return {
                ...state,
                account: null,
                loading:false,
                error: payload,
                };

    // Create account
    case SERVICE_CREATION_SUCCES:
            return {
            ...state,
            account: payload,
            loading:false,
            error: null,
            };
      case SERVICE_CREATION_FAIL:
                return {
                ...state,
                account: null,
                loading:false,
                error: payload,
                };
        default:
            return state;
    }
}

 export const ServiceContextProvider= ({ children })=>{
    const [state, dispatch]= useReducer(serviceReducer, INITIAL_STATE);
console.log(state);
// get services details action
const getServiceDetailsAction= async()=>{
    const config={
        headers:{
            Authorization: `Bearer ${state?.userauth?.token}`,
            "Content-Type": "application/json",
        },
    };
try {
    const res=await axios.get(`${API_URL_SERVICE}/`, config);
    if(res?.data?.status==="success"){
        //dispatch
        dispatch({
            type: SERVICE_DETAILS_SUCCESS,
            payload: res?.data?.data,
         } );
    }
 
} catch (error) {
    dispatch({
        type: SERVICE_DETAILS_FAIL,
        payload: error?.data?.response?.message,
      });
}
};

//create account
const bookServiceAction= async(formData)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state?.userAuth?.token}`,
        },
      };
      try {
        const res = await axios.post(`${API_URL_SERVICE}`, formData, config);
        if (res?.data?.status === "success") {
          //dispatch
          dispatch({
            type: SERVICE_CREATION_SUCCES,
            payload: res?.data?.data,
          });
        }
        window.location.href='/profile';
      } catch (error) {
        console.log(error);
        dispatch({
          type: SERVICE_CREATION_FAIL,
          payload: error?.data?.response?.message,
        });
      }
};

    return(   <serviceContext.Provider
        value={{
          getServiceDetailsAction,
          bookServiceAction,
          error: state?.error,
        }}
      >
        {children}
      </serviceContext.Provider>)

}
