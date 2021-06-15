import 
{   COMPANYGET_SUCCES,
    COMPANYSET_SUCCES,
    COMPANYGET_DATA
} 
from "../actions/actionTypes";

const initialState = {
    company: {}, 
    response: {}
    
};

export default function (state = initialState, action){
   
    switch(action.type){
        case COMPANYGET_SUCCES:    
        
            return {
                ...state,
                company: action.payload
            }    
        break; 
       
        case COMPANYSET_SUCCES:
            //console.log("COMPANYSET_SUCCES",action.payload);         
            return {
                ...state,
                response: action.payload
            }  
            break;
        default:
            //console.log("default");
            return state;
    }
}