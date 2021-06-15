import {
    takeEvery,
    call,
    put
    // , delay
  } from "redux-saga/effects";

  import {
    COMPANYGET,COMPANYGET_SUCCES,COMPANYSET,COMPANYSET_SUCCES
  } from "../actions/actionTypes";
  import { getCompany_api,setCompany_api } from "./api";
  
  export default function* rootWatcher() {
    yield takeEvery(COMPANYGET, getCompany_fetch);
    yield takeEvery(COMPANYSET, setCompany_fetch);
  }

  export function* getCompany_fetch(payload){ //iden
    
    let response=yield call(getCompany_api,payload.payload)
console.log(response);

    yield put({
        type: COMPANYGET_SUCCES, payload:response.data
    });
}

export function* setCompany_fetch(payload){
   
    let response=yield call(setCompany_api,payload)
    yield put({
        type: COMPANYSET_SUCCES, payload: response.data
    });
    console.log(response.data);
}


