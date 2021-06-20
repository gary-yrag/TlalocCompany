import axios from "axios";
const apiUrl = "http://localhost:56093/Tlaloc/";

export const getCompany_api = (iden) => {
    console.log("iden",iden);
    return axios.request({
        method: "get",
        headers: {
            "Content-Type": "apllication/json"
        },
        url: apiUrl+"values/getCompany/"+iden
    });
};

/*export const setCompany_api = (data) => {
    let d=data.payload;
    console.log("setCompany_api",d);

    let formData = new FormData();
formData.append('id', d.Id);
formData.append('IdentificationType', d.IdentificationType);
formData.append('Identificationnumber', d.Identificationnumber);
formData.append('Companyname', d.Companyname);
formData.append('Firstname', d.Firstname);
formData.append('Secondname', d.Secondname);
formData.append('Firstlastname', d.Firstlastname);
formData.append('Secondlastname', d.Secondlastname);
formData.append('email', d.email);


    return axios({
        url: 'http://localhost:56093/api/values',
        method: 'post',
                   
                    headers:{'Content-Type': 'multipart/form-data'},
                    data: formData
    });
   
};*/

export const setCompany_api = (data) => {
    let d=data.payload;
    //console.log("setCompany_api",d);

    return axios({
        url: apiUrl+'values',
        method: 'post',                   
        headers:{'Content-Type': 'application/json'},
        data:{
            Id: d.Id,
            IdentificationType:d.IdentificationType,
            Identificationnumber: d.Identificationnumber,
            Companyname:d.Companyname,
            Firstname:d.Firstname,
            Secondname:d.Secondname,
            Firstlastname:d.Firstlastname,
            Secondlastname:d.Secondlastname,
            email:d.email
        }            
    });
   
};

export const getCompanys_api = () => { 
    return axios.request({
        method: "get",
        headers: {
            "Content-Type": "apllication/json"
        },
        url: apiUrl+"values/getCompanys"
    });
};

