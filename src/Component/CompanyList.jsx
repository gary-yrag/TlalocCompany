import React,{Component} from 'react';
import {connect} from "react-redux";
import {
    companylist
} from "../actions/companyActions"

import '../css/company.css'

class CompanyList extends Component{
    constructor(props){
        super(props);

        this.state={
            CompanysLocal:[]
        };
    }

    componentDidMount(){
        this.props.companylist();
        this.setState({
            CompanysLocal:this.props.Companys
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps!==this.props){
            this.setState({
                CompanysLocal:this.props.Companys
            });
        }
    }

    render(){
        return(
            <div>
                <h1>Lista de compañias</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                IdentificationType
                                </th>
                                <th>
                                Identificationnumber
                                </th>
                                <th>
                                Companyname
                                </th>
                            </tr>
                        </thead>                        
                        <tbody>
                            {
                                this.state.CompanysLocal.map(row=>(
                                    <tr>
                                        <td>{row.identificationType}</td>
                                        <td>{row.identificationnumber}</td>
                                        <td>{row.companyname}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }

}

const mapStateToProps = state=>({
    Companys: state.CompanyReducer.companys
});

export default connect(
    mapStateToProps,{companylist}
)(CompanyList);
//export default CompanyList
