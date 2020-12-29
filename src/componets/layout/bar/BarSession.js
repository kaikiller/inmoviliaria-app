import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";


const styles = (theme) => ({ /* el estilo del componente*/
  sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: { /*se define el tama;o de la pantalla*/
            display: "flex",
        },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: { /*se define el tama;o de la pantalla*/
        display: "none",
    },
    },
  grow : {
      flexGrow: 1
  }
  
});

class BarSession extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Toolbar>
            <IconButton color="inherit"> 
                <i className="material-icons">menu</i>
            </IconButton>
          <Typography variant="h6">Inmobiliaria Metrocredit</Typography>
              <div className={classes.grow}></div>
                <div className={classes.sectionDesktop}> {/* esto es para dibujar solo en pantallas de tama;o definido*/}
                    <Button color = "inherit">Login</Button>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton color="inherit">
                        <i className= "material-icons">more_vert</i>
                    </IconButton>
                </div>
            
        </Toolbar>
      </div>
    );
  }
}

export default withStyles(styles)(BarSession);
