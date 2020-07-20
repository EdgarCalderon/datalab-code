import React,{useState} from 'react';
import Titulo from '../../general/titulo'
import Input from '../../general/input'
import { ReactComponent as Logo } from '../../../assets/images/datalab_logo.svg';
import '../../../assets/css/images.css'
import '../../../assets/css/colors.css'
import '../../../assets/css/general.css'
import {Redirect,Router,Switch,Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';




export default function Login() {

    const [User, setUser] = useState('') 
    const [Passwd, setPasswd] = useState('')    
    const [PassError, setPassError] = useState(false)
    const [Disb, setDisb] = useState(true)
    const [PassLogin, setLogin] = useState(false)
    const [FailLogin, setFailLogin] = useState(false)

    

    function changeData(name,value) {
        if (name ==='usuario') {
            setUser(value)
        } else {
            if (value.length < 4) {
                setPassError(true)
                setDisb(true)
            
            } else {
                setPassError(false)
                setPasswd(value)
                setDisb(false)
            }
            
        }
        console.log('User : ', User )
        console.log('Passwd : ', Passwd )

    }
    

    
    function valida(data) {
        if (data.User.length > 0 && data.Passwd.length >0) {
                if (data.User === 'edgar' && data.Passwd === 'qwerty') {
                    const {user,passw} = data;
                    const token = 'uywe678323';
                    let localdata= {User,Passwd,token};
                    let accountData = JSON.stringify(localdata);
                    localStorage.setItem('dataAccount',accountData);
                    setLogin(true);
                    
                     window.location.assign("/dashboard")
                    
                    
                    
                     
                   
                    
                }else{
                    setLogin(false);
                    setFailLogin(true);
                    
                 }
        }else{
             setLogin(false);
             setFailLogin(true);
             
            
        }
        
    }
   
    


    function loginSubmit() {
        let account  = {User,Passwd}
        if (account) {
            console.log('la cuenta es : ',account)
            valida(account);
            
            
           

            
        }
    }

   
      
    return (
       
        <div>
            
            
            <div className='center'>
            <Logo className='image-header' ></Logo>
            </div>
            <Titulo text='Code Challenge'/>
            <hr className = 'hr-primary'/> 
            <div className = 'center'>
                <div className = 'form-primary'  >

                    {FailLogin &&
                    <label className = 'notify'>Usuario o Contraseña Incorrecto </label>
                
                    }
                    <br/>
                    <label>Usuario</label>
                    <Input
                        param ={{
                                id : 'usuario',
                                name : 'usuario',
                                type : 'text',
                                place : 'Ingrese Usuario'
                            }}
                            changeData = {changeData}
                            
                    />
                    <label>Password</label>
                    <Input
                        param ={{
                                id : 'password',
                                name : 'password',
                                type : 'password',
                                place : 'Ingrese Password'
                            }}
                            changeData = {changeData}
                            err={PassError}
                    />
                    <div className = 'center'>
                        <br/>
                    {Disb &&
                        
                     <label className = 'notify'>4 char min</label>
                    }
                    </div>
                   
                   
                    <br/>
                    <div className='center'>
                    <button className = {Disb ? "dis-button-submit":"button-submit"} disabled ={Disb} onClick= {(loginSubmit)}>
                              Iniciar Sesión
                     </button>
                    </div>
                    
                        
                </div>
            </div>
            <hr className = 'hr-primary'/>
            <div className='center'>
            <p>&copy; Edgar Calderón Quintana, 2020 <i className="fa fa-copyright" aria-hidden="true"></i></p>
            </div>
          
        </div>
        

    )
}
