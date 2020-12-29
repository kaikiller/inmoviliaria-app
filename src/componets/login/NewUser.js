import { Avatar, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { LockOutlined } from "@material-ui/icons";


const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
    backgroundColor:"#e53935",
  },
  form: {
    width: "100%",
    margintop: 10,
  },
  submitt:{
      marginTop:15,
      marginButton: 20
  }
};

class NewUser extends Component {
    state={
        user:{
          name:'',
          lastname:'',
          email:'',
          password:''  
        }
    }
    onChange = e => {
        let user= Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({
            user : user
        })
    }
    registerUser = e => {
        e.preventDefault();
        console.log('imprime el objeto usuario',this.state.user);
    }
  render() {
    return (
      <Container maxWidth="md">
        <div style={style.paper}>
          <Avatar style={style.avatar}>
             <LockOutlined/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre su cuenta
          </Typography>
          <from style={style.form}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12} >
                    <TextField name="name" onChange={this.onChange} value={this.state.user.name} fullWidth label="Ingrese su nombre"></TextField>
                </Grid>
                <Grid item md={6} xs={12} >
                    <TextField name="lastname"  fullWidth label="Ingrese su apellido"></TextField>
                </Grid>
                <Grid item md={6} xs={12} >
                    <TextField name="email" fullWidth label="Ingrese su e-mail"></TextField>
                </Grid>
                <Grid item md={6} xs={12} >
                    <TextField type="password" name="password"fullWidth label="Ingrese su password"></TextField>
                </Grid>
              </Grid>
              <Grid container justify ="center">
                  <Grid item xs={12} md={6}>
                      <Button type="submit" onClick={this.registerUser} variant ="contained" fullWidth size="large" color="primary" style={style.submitt}>
                          Registrar


                          
                      </Button>
                  </Grid>
              </Grid>
          </from>
        </div>
      </Container>
    );
  }
}

export default NewUser;
