import React , { Component } from 'react'
import {Redirect } from 'react-router-dom';
import  '../../../assets/css/colors.css'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import define from '../../d3/a601aba88046a626@240';
//import {Runtime, Library, Inspector} from "../../d3/runtime.js";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
    
  }));



export default function Dashboard() {
    const classes = useStyles();
   
    
    if(localStorage.getItem('dataAccount') !== undefined && localStorage.getItem('dataAccount')  ){
        
       
        let arr = JSON.parse( localStorage.getItem('dataAccount') );
    
        let token = arr.token;
    
      
            if (token != 'uywe678323') {
                
                console.log('login fallido ')
                return <Redirect to='/login' />
            } else {
               
                console.log('login correcto')
            }
           
        
    }else{
        return <Redirect to='/login' />
       
      }

      

      function logout() {
           
        localStorage.removeItem('dataAccount');
        window.location.reload(true);
      }
    
        
        return (
           
            
            
            
                
               
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <div className = 'nav-bar' >
          <button className='button-submit' onClick = {logout}>
                        Cerrar Sesión
             </button>
                
                    </div>
              </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Una disculpa no me alcanzo el tiempo</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Para implentar D3 ya que no lo manejo</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Agradezco la Oportunidad</Paper>
        </Grid>
    
        
      </Grid>
    
                    
                    
                
           
        )
    
}
