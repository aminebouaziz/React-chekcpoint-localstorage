import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import icon from "./icon.png"
import trash from "./trash.png"
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
            <h1 className="titled">>DETAILS</h1>
          
           
            <div className="cardDetail">
           <div className="divStyle"><span className="spanStyle">Name :</span>  {detailsarr.name}</div>
          <div className="divStyle"> <span className="spanStyle">Team :</span> {detailsarr.team}</div>
          <div  className="divStyle">  <span className="spanStyle">Description :</span>    {detailsarr.desc  || "none"}</div>
          <button onClick={()=>this.remove(detailsarr)}  className="buttonStyle"> <img src={trash}/></button>
             <button className="homeButton" className="buttonStyle">   <Link to="/home">  <img src={icon}/></Link></button>
          </div>
          
            
        </div>
    )
}
}
export default Details;