import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Details extends Component{
    constructor(){
        super()
        this.state={
            game:JSON.parse(window.localStorage.getItem('GAME'))   || [] ,
            ai: JSON.parse(window.localStorage.getItem('AI'))   || [] ,
            web:JSON.parse(window.localStorage.getItem('WEB'))   || [] ,
           id:0
           
        }
    
    }
   
    remove =(obj)=>{
      let team =  obj.team
        let users= JSON.parse(window.localStorage.getItem(team))
         let newUsers= users.filter(el =>{
              return el.id !== obj.id
          })
          newUsers.push()
            
         
        let newarray=JSON.stringify(newUsers) 
        window.localStorage.setItem(team,newarray)

        // console.log(obj)
         this.props.history.push('/home')
        //   localStorage.removeItem('')
    }
    


render() {
   const divStyle={
    fontSize:'60px',
    textAlign:'center'
   }
   const spanStyle={
       color:'red'
   }
   const buttonStyle={
        marginTop:'100px',
        fontSize:'60px',
   }
    let bigArray = this.state.game.concat(this.state.ai).concat(this.state.web)
    console.log(bigArray)
    console.log(this.props.location.pathname)
   let detailsarr
   let id=  this.props.location.pathname.substr(10)
   bigArray.find(el => {
        if(el.id === id){
           return detailsarr=el
        }
    })
    return(
        <div>
            <h1>details</h1>
            <button> <Link to="/home">  HOME</Link></button>
           <div style={divStyle}><span style={spanStyle}>Name :</span>  {detailsarr.name}</div>
          <div style={divStyle}> <span style={spanStyle}n>Team :</span> {detailsarr.team}</div>
          <div style={divStyle}>  <span style={spanStyle}>Description :</span> {detailsarr.desc}</div>
          
          
              <center>  <button onClick={()=>this.remove(detailsarr)}  style={buttonStyle}> DELETE</button></center>
        </div>
    )
}
}
export default Details;