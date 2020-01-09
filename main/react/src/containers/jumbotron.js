import React, { Component } from 'react';


class Jumbotron extends Component {


   render() {

       return (
           <div className="container" style={{alignContent:'center', alignItems:'center',float: 'left',padding:'20px'}}>

               <div className="container" style={{position:'relative', padding:'10px'}}>

                   <h2 style={{color:'grey'}}>{this.props.par}</h2>

                   <p style={{color:'white', fontSize:'25px'}}>{this.props.num}</p>

               </div>




           </div>


       );
    }
}



export default Jumbotron;