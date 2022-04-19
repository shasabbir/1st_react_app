import {useState} from 'react';
import axios from 'axios';
const Login=()=>{
    const [uid,setuid] = useState("");
    const [pass,setPass] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var credentials = {id:uid,password:pass};
        axios.post("http://localhost:8000/api/teacher/login",credentials).then(function(rsp){
            debugger;
        },function(err){});
        
    }
    return(
        <form onSubmit={handleForm}>
            Username: <input type="text" onChange={function(event){setuid(event.target.value);}} value={uid}></input><br/>
            pass: <input type="pass" value={pass}onChange={(event)=>{setPass(event.target.value)}}></input> <br/>
            <input type="submit"></input>
        </form>
    )
}
export default Login;