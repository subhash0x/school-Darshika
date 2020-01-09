import React, { Component } from 'react';


class Jumbotron extends Component {


   render() {

       return (
           <div className="container" style={{alignContent:'center', alignItems:'center',padding:'20px',marginLeft:'20%',marginTop:'10%'}}>

               <div className="container" style={{position:'relative', padding:'10px'}}>

                   <h2 style={{color:'black'}}>{this.props.par}</h2>

                   <p style={{color:'grey', fontSize:'25px',marginLeft:'10%'}}>{this.props.num}</p>

               </div>




           </div>

       );
    }
}



export default Jumbotron;