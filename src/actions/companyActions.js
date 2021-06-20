import 
{   COMPANYGET,
    COMPANYSET,
    COMPANYSLIST
} 
from "./actionTypes";

export const companyget = (iden) => ({
    type: COMPANYGET,
    payload: iden
});

export const companyset = (data) => (   
    {
    type: COMPANYSET,
    payload: data
});

export const companylist = () =>({
    type:COMPANYSLIST  
});