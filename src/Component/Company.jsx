import React,{Component} from 'react';
import {connect} from "react-redux";
import {
    companyget,companyset
} from "../actions/companyActions"

import '../css/company.css'

class Company extends Component {
    constructor(props){
        super(props);
        this.state={
            iden1:0,
            company:{
                Id:'',
                IdentificationType:'' ,
                Identificationnumber: '' ,
                Companyname: '' ,
                Firstname:'' ,
                Secondname: '' ,
                Firstlastname: '' ,
                Secondlastname: '' ,
                email: ''
            },
            response:{id:"",msg:""}
        };
        this.onChanges = this.onChanges.bind(this);
    }

    componentDidMount(){      
       
        this.setState({           
            company:this.props.company,
            response:this.props.response
        });
    }  

    componentDidUpdate(prevProps){
        if(prevProps!==this.props){
            this.setState({
                company:this.props.company,
                response:this.props.response
            });

            console.log("this.state.company",this.state.company);
        }
    }

    Buscar(){        
        //this.props.CloseBets(rulette_Id);      
       this.props.companyget(document.getElementById("id1").value); 
       this.setState({
        //IdentificationType:document.getElementById("IdentificationType").value,
        company:this.props.company
        });

   }   
   Guardar(){
       console.log("guardar");
        let id = this.state.company.id;

       let cm = {
        Id:id,
        IdentificationType:document.getElementById("IdentificationType").value ,
        Identificationnumber: document.getElementById("Identificationnumber").value ,
        Companyname: document.getElementById("Companyname").value ,
        Firstname:document.getElementById("Firstname").value ,
        Secondname: document.getElementById("Secondname").value ,
        Firstlastname: document.getElementById("Firstlastname").value ,
        Secondlastname: document.getElementById("Secondlastname").value ,
        email: document.getElementById("email").value 
       }

  
        this.props.companyset(cm);

        this.setState({
        //IdentificationType:document.getElementById("IdentificationType").value,
        company: cm
        });
   }

   onChanges(event){
       console.log(event.target.name,event.target.value);
       console.log("this.state:",this.state);
        this.setState({            
            company:{
                
                [event.target.name]:event.target.value},
        });
        console.log("this.state:",this.state);
   }

    render(){
        return (
            <div className="container">
                <div>
                    <label className="label">Identificacion</label>
                    <input  type="text" id="id1" name="id1"/>
                    <button  onClick={()=> this.Buscar()}>Buscar</button>
                </div>

                <div>
                    
                        <div>
                            <label >IdentificationType</label>
                            <select  id="IdentificationType" name="IdentificationType" value={this.state.company.identificationType}>
                                <option></option>
                                <option value="CC"  >CC</option>
                                <option value="NIT" >NIT</option>
                            </select>
                        </div>
                        <div>
                            <label >Identificationnumber</label>
                            <input  type="text" id="Identificationnumber" name="Identificationnumber" defaultValue={this.state.company.identificationnumber}/>
                        </div>
                        <div>
                            <label >Companyname</label>
                            <input  type="text" id="Companyname" name="Companyname" defaultValue={this.state.company.companyname}/>
                        </div>

                        <div>
                        <label >Firstname</label>
                            <input  type="text" id="Firstname" name="Firstname" defaultValue={this.state.company.firstname} />
                        </div>

                        <div>
                        <label  >Secondname</label>
                            <input  type="text" id="Secondname" name="Secondname" defaultValue={this.state.company.secondname}></input>
                        </div>

                        <div>
                        <label  >Firstlastname</label>
                            <input  type="text" id="Firstlastname" name="Firstlastname" onChange={this.onChanges} value={this.state.company.firstlastname}></input>
                        </div>

                        <div>
                        <label  >Secondlastname</label>
                            <input  type="text" id="Secondlastname" name="Secondlastname" onChange={this.onChanges} value={this.state.company.secondlastname}></input>
                        </div>

                        <div>
                        <label  >email</label>
                            <input  type="text" id="email" name="email" onChange={this.onChanges} value={this.state.company.email}></input>
                        </div>
                        <div>
                        <button type="button" onClick={()=> this.Guardar()}>Guardar</button>
                        </div>

                        <div>
                            <span>{this.state.response.id}</span>
                            <span>{this.state.response.msg}</span>
                        </div>
                 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    company: state.CompanyReducer.company,
    response: state.CompanyReducer.response
});

export default connect(
    mapStateToProps,
    {companyget,companyset}
    )(Company)