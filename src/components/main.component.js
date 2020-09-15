import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default class main extends Component{
    constructor(props){
        super(props);

        this.onchange_pid = this.onchange_pid.bind(this);
        this.onchange_pname = this.onchange_pname.bind(this);
        this.onchange_pnic = this.onchange_pnic.bind(this);
        this.onchange_ptp = this.onchange_ptp.bind(this);
        this.onsubmit = this.onsubmit.bind(this);

        this.state={
            p_id:'',
            p_name:'',
            p_nic:'',
            p_tp:''
        }
    }

    onchange_pid(e){
        this.setState({
            p_id:e.target.value
        });
    }
    onchange_pname(e){
        this.setState({
            p_name:e.target.value
        });
    }
    onchange_pnic(e){
        this.setState({
            p_nic:e.target.value
        });
    }
    onchange_ptp(e){
        this.setState({
            p_tp:e.target.value
        });     
    }
    onsubmit(e){
        e.preventDefault();
        console.log(this.state.p_id);
        console.log(this.state.p_name);
        console.log(this.state.p_nic);
        console.log(this.state.p_tp);

        const submitobject={
            pid:this.state.p_id,
            pname:this.state.p_name,
            pnic:this.state.p_nic,
            ptp:this.state.p_tp
        }

        // axios.get('http://localhost:4000/add',submitobject)
        // .then(res => toast(res.data));

        axios.post('http://localhost:4000/add',submitobject)
        .then(res => toast(res.data));

        this.setState({
            p_id:'',
            p_name:'',
            p_nic:'',
            p_tp:''
        });
    }        

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{textAlign:"center"}}>Hello World</h2>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">ID</div>
                        <div className="col-md-5"><input type="text" value={this.state.p_id} onChange={this.onchange_pid}></input></div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">Name</div>
                        <div className="col-md-5"><input type="text" value={this.state.p_name} onChange={this.onchange_pname}></input></div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">NIC</div>
                        <div className="col-md-5"><input type="text" value={this.state.p_nic} onChange={this.onchange_pnic}></input></div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">TP</div>
                        <div className="col-md-5"><input type="text" value={this.state.p_tp} onChange={this.onchange_ptp}></input></div>
                        <div className="col-md-2"></div>
                    </div>                                                            
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-1">TP</div>
                        <div className="col-md-5"><input type="submit" value = "Submit" onClick={this.onsubmit}></input></div>
                        <div className="col-md-2"></div>
                    </div>                 
            </div>
        )
    }
}