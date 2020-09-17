import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import $ from 'jquery';

// this is use for react coding
export default class main extends Component{
    constructor(props){
        super(props);
        this.state={
            viewarray:[],
            viewdt:[],
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:4000/view/')
        .then(data=> {
            this.setState({viewarray : data.data.result});
            // console.log(data.data.result);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    renderInboundData(viewdt){
        let i=0;
            let tableContent = (viewdt === undefined || viewdt === null || viewdt.length === 0) ? null : (
                viewdt.rows.map((item) => {
                    return (
                        <tr key = {item[i]}>
                            <td>{item[i]}</td>
                            <td>{item[i+1]}</td>
                            <td>{item[i+2]}</td>
                            <td>{item[i+3]}</td>
                            {/* <td><input type="submit" value="Recieve Item" className="btnSelect"></input></td> */}
                        </tr>
                    );
                })
            );
    
            return (
                
                    <table id="inboundMyTable" className="tableFixHead" style={{overflowX:"auto"}} cellPadding="6">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>NIC</th>
                                <th>TP</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table>
               
            );
        }
    
        

    //type ren and enter
    render() {
        
        let content = this.renderInboundData(this.state.viewarray);

        return (
            <div className="container">
                {content}
            </div> 
        );
    }
}