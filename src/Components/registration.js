import {useState} from 'react';
import axios from 'axios';
const Registration=()=>{
    const [uid,setUid] = useState("");
    const [uname,setUname] = useState("");
    const [udob,setUdob] = useState("");
    const [uaddress,setUaddress] = useState("");
    const [udesignation,setUdesignation] = useState("");
    const [ubg,setUbg] = useState("");
    const [pass,setPass] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var credentials = {id:uid,password:pass,name:uname,dob:udob,address:uaddress,designation:udesignation,bg:ubg};
        axios.post("http://localhost:8000/api/teacher/registration",credentials).then(function(rsp){
            debugger;
        },function(err){});
        
    }
    return(
        <form onSubmit={handleForm}>
            UserId: <input type="text" onChange={function(event){setUid(event.target.value);}} value={uid}></input><br/>
            pass: <input type="pass" value={pass}onChange={(event)=>{setPass(event.target.value)}}></input> <br/>
            Name: <input type="pass" value={uname}onChange={(event)=>{setUname(event.target.value)}}></input> <br/>
            Dob: <input type="pass" value={udob}onChange={(event)=>{setUdob(event.target.value)}}></input> <br/>
            Address: <input type="pass" value={uaddress}onChange={(event)=>{setUaddress(event.target.value)}}></input> <br/>
            Designation: <input type="pass" value={udesignation}onChange={(event)=>{setUdesignation(event.target.value)}}></input> <br/>
            Blood Group: <input type="pass" value={ubg}onChange={(event)=>{setUbg(event.target.value)}}></input> <br/>
            <input type="submit"></input>
        </form>
    )
}
export default Registration;