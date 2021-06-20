import 
{   COMPANYGET_SUCCES,
    COMPANYSET_SUCCES,
    COMPANYSLIST_SUCCES
} 
from "../actions/actionTypes";

const initialState = {
    company: {}, 
    response: {},
    companys:[]
    
};

export default function foo (state = initialState, action){
   
    switch(action.type){
        case COMPANYGET_SUCCES:    
        
            return {
                ...state,
                company: action.payload
            } 
        case COMPANYSET_SUCCES:
            //console.log("COMPANYSET_SUCCES",action.payload);         
            return {
                ...state,
                response: action.payload
            }  
        case COMPANYSLIST_SUCCES: 
            return{
                ...state,
                companys: action.payload
            }
        default:
            //console.log("default");
            return state;
    }
}