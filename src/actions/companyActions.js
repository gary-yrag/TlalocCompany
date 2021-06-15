import 
{   COMPANYGET,
    COMPANYSET
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