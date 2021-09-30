import React, { Component } from 'react'
import Universal from '../common/universal'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import axios from 'axios';

export class student extends Component {
    constructor(props){
        super(props)

        this.state={
         getApiData:[],
         savebutton: true,
        //  updatebutton:false,
         userdata:{
          "first_name":"",
          "last_name":"",
          "grade":"",
          "birth_date":"",
          "gender":"",
          "email":"",
          "phone":"",
          "address":"",
          "fileList":"",
         
          
 },
        }
  }
// ------------------------------------------------------
// save and update data
// ------------------------------------------------------------
  saveUser = async() => {
    debugger
    var SaveData = this.state.userdata;

    axios.post("http://localhost/Demo/add-user.php",SaveData)
      .then(response => {
        // console.log("Userdata",response.data.users[0])
          //  this.setState({ getApiData: response.data.users})
          this.getcity()
        console.log(response.SaveData)
      }
      ).catch(error => {
        console.log(error);
      });

  }

  
  componentDidMount() {
  
    this.getcity();
    

  }

  DeleteApi = async(row, cell) => {
    debugger
    var data = {}
    data.id = cell.id
    
    axios.post("http://localhost/Demo/delete-user.php",data)
    .then(response => {
      // console.log("Userdata",response.data.users[0])
        //  this.setState({ getApiData: response.data.users})
        this.getcity()
      console.log(response.data)
    }
    ).catch(error => {
      console.log(error);
    });
     
  }

    handleChange= (e)=> {  
        var userdata1 = this.state.userdata
        userdata1[e.target.id] = e.target.value
        this.setState({userdata:userdata1});  
        } 
       
          getcity = () => {
            debugger           
          
            axios.get("http://localhost/Demo/all-users.php")
              .then(response => {
                console.log("Userdata",response.data.users[0])
                   this.setState({ getApiData: response.data.users})
                console.log(response.data)
              }
              ).catch(error => {
                console.log(error);
              });
          }



          handleClear= ()=> {  
            debugger
            this.setState({
                userdata:{
                  "first_name":"",
                  "last_name":"",
                  "grade":"",
                  "birth_date":"",
                  "gender":"",
                  "email":"",
                  "phone":"",
                  "address":"",
                  "fileList":"",
                  "status":"",
           }
        
              })
            }
            editApiData = (row, cell) => {
              debugger
              console.log("In Edit", row);
              this.setState({ userdata: cell, savebutton: false, updatebutton: true })
            }
            
editApiData1 =(row,cell) =>  {
    debugger
    console.log("In Edit", row);
   alert("hi")
  }
         
  
  actionMethod = (row, cell) => {
    debugger
    return (
        < React.Fragment>
         <div >
          <i class="fa fa-edit" aria-hidden="true" title="Edit" style={{color:"blue"}} onClick={() => this.editApiData(row,cell)} ></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <i class="fa fa-trash" aria-hidden="true" title="Delete" style={{color:"red"}} onClick={() => this.DeleteApi(row,cell)} ></i>
       </div>
        
        </React.Fragment>
    )
  }


    render() {
        return (
            <React.Fragment>
                <Universal/>
                <section id="main-content">
        <section className="wrapper">
            <div className="col-lg-9 main-chart dashboardPadd" style={{maxWidth:'100%'}}>
              <section className="dashboard-counts no-padding-bottom">
               
                <div className="container-fluid" >
                  <ul className="dashnav nav nav-tabs" role="tablist" style={{paddingLeft: '66%'}}>
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" style={{}}>student Detail</a>
                    </li>
                    
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                      <div className="container-fluid">
                        <div className="row bg-blue has-shadow" style={{borderRadius: '1rem', marginTop: '2rem'}}>
                          <div className="col-12 col-md-3 col-lg-3">
                            <img  alt="image" className="img-fluid mx-auto d-flex" style={{width:'150%'}} />
                          </div>
                          
                          <div className="col-12 col-md-9 col-lg-9" style={{marginTop: '-1rem'}}>
                            {/* <h4 className="text-white searchFilter">Search Filter</h4> */}

                            <div className="d-flex mt-1">
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start">First Name</label>
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start" style={{position: 'absolute', left: '51%'}}>Last Name</label>
                            
                            </div>

                            <div className="d-flex">
                              <input type="text" id ="first_name"  className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}}
                              onChange={this.handleChange} value={this.state.userdata.first_name!==""?this.state.userdata.first_name:""} />
                              
                              <input type="text" id="last_name" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}} 
                                onChange={this.handleChange} value={this.state.userdata.last_name!==""?this.state.userdata.last_name:""}/>
                            
                            </div>

                            {/*  */}
                            <div className="d-flex mt-1">
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start">Grade</label>
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start" style={{position: 'absolute', left: '51%'}}>Date of Birth</label>
                            
                            </div>

                            <div className="d-flex">
                              <input type="text" id ="grade"  className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}}
                              onChange={this.handleChange} value={this.state.userdata.grade!==""?this.state.userdata.grade:""} />
                              
                              <input type="date"  id="birth_date" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{ height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem' }} 
                   onChange={this.handleChange}/>  
                            </div>

                            {/*  */}
                            <div className="d-flex mt-1">
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start">Gender</label>
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start" style={{position: 'absolute', left: '51%'}}>Email</label>
                            
                            </div>

                            <div className="d-flex">
                              <input type="text" id ="gender"  className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}}
                              onChange={this.handleChange} value={this.state.userdata.gender!==""?this.state.userdata.gender:""} />
                              
                              <input type="text" id="email" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}} 
                                onChange={this.handleChange} value={this.state.userdata.email!==""?this.state.userdata.email:""}/>
                            
                            </div>

                            {/*  */}
                            <div className="d-flex mt-1">
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start">Contact Number</label>
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start" style={{position: 'absolute', left: '51%'}}>Address</label>
                            
                            </div>

                            <div className="d-flex">
                              <input type="text" id ="phone"  className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}}
                              onChange={this.handleChange} value={this.state.userdata.phone!==""?this.state.userdata.phone:""} />
                              
                              <input type="text" id="address" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{height: 'calc(1em + 0.75rem + 2px)', marginRight: '1rem'}} 
                                onChange={this.handleChange} value={this.state.userdata.address!==""?this.state.userdata.address:""}/>
                            
                            </div>
                            {/*  */}
                            <div className="d-flex mt-1">
                              <label className="form-control-placeholder texts" id="start-p" htmlFor="start">image</label>
                            
                            </div>
                            <div className="col-12 col-md-6" >
                            <div className="d-flex">
                            <input type="file"  id="fileList" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" size={5} style={{ height: 'calc(2em + 0.75rem + 2px)', marginRight: '1rem' }}
                              style={{marginRight: '-2rem',marginLeft: '-13px',width:' 480px'}}    />
                              
                            </div>
                            </div>
                            {/*  */}
                            <div className="row pull-right">
                                                                {this.state.savebutton === true ?
                                                                  <div className="pr-3">
                                                                 
                                                                    <button type="button" className="btn btn-primary" onClick={() => this.saveUser()}
                                                                   >Save</button>
                                                                  </div>:""}
                                                                  {this.state.updatebutton === true ?
                                                                  <div className="pr-3">
                                                                 
                                                                    <button type="button" className="btn btn-primary" onClick={() => this.saveUser()}>Update</button>
                                                                  </div>:""}
                                                                  <div className="pr-3">
                                                                    <button type="button" className="btn btn-primary"  onClick={() => this.handleClear()}>Reset</button>
                                                                  </div>
                          
                        </div>
                            {/* <button type="button" className="btn btn-success searchButton">
                              Search
                            </button> */}
                          </div>
                          
                        </div>
                       
                        <div className="row has-shadow mt-3" style={{borderRadius: '1rem', backgroundColor: 'white', marginTop: '5rem'}}>
                        <BootstrapTable 
                         data={this.state.getApiData} striped hover
                         pagination
                         // search
                         //ClearSearchButton
                        >
                         <TableHeaderColumn isKey={true} dataField='image'>Photograph</TableHeaderColumn>
                         
                         <TableHeaderColumn dataField='first_name'>Full Name</TableHeaderColumn>
                         <TableHeaderColumn dataField='grade'>Grade</TableHeaderColumn>
                         <TableHeaderColumn dataField='date_of_birth'>Date of Birth</TableHeaderColumn>
                         <TableHeaderColumn dataField='gender'>Gender</TableHeaderColumn>
                         <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                         <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
                         <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
                         <TableHeaderColumn dataField='status' >status</TableHeaderColumn>
                         <TableHeaderColumn dataField="" dataFormat={this.actionMethod} csvHeader="First Name" className={"columnHeaderColor"}
                          expandable={false} editable={false} >Action</TableHeaderColumn>
                         </BootstrapTable>
                        </div>
                       
                       
                      </div>
                    </div>
                   
                  </div>
                </div>
              </section>
            </div>
        </section>
      </section>
            </React.Fragment>
        )
    }
}

export default student
