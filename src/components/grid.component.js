import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import $ from 'jquery';
import DataTable from 'datatables.net';

var incolls = [];
var inrowsss= [];

$.ajax({
    type: "GET",

        url: "http://localhost:4000/view",
        contentType: "application/json",
        beforeSend: function () {
        },

        success: function (data) {
            //console.log(data);
                  $.each(data, function (index, value) {

                      incolls = [];
                      inrowsss= [];

                      var tempArray = new Array;
                      console.log(value);
                      for (var o in value.metaData) {
                          incolls.push(value.metaData[o]);
                      }

                      for (var i in value.rows) {
                          inrowsss.push(value.rows[i]);
                      }
                      console.log(inrowsss);
                      
                      $('#gridview').DataTable({
                        //"scrollY": "100px",
                        data: inrowsss,
                        columns: [
                            { title: "Id" },
                            { title: "Name" },
                            { title: "NIC" },
                            { title: "TP" },
                        ]
                    });
              })
      },
      error: function (jqXHR, exception) {
      }
});

export default class main extends Component{
    constructor(props){
        super(props);
        this.state={
            viewarray:[],
            viewdt:[],
        }
    }

        //type ren and enter
        render() {
        
            // let content = this.renderInboundData(this.state.viewarray);
    
            return (
                <div className="container" style={{paddingTop:"50px"}}>
                    <table id="gridview" ></table>
                </div> 
            );
        }
}