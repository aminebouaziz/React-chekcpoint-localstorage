import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
import v4 from 'uuid'

class App extends Component {
  constructor(){
    super()
    this.state={
      game:JSON.parse(window.localStorage.getItem('GAME'))   || [] ,
      ai: JSON.parse(window.localStorage.getItem('AI'))   || [] ,
      web:JSON.parse(window.localStorage.getItem('WEB'))   || [] 
    }
    if(!window.localStorage.getItem('AI')){
      let arr = JSON.stringify([])
      window.localStorage.setItem('AI',arr)
    }
    if(!window.localStorage.getItem('GAME')) {
    let arr = JSON.stringify([])
     window.localStorage.setItem('GAME',arr) 
    }
    if(!window.localStorage.getItem('WEB')) {
      let arr = JSON.stringify([])
       window.localStorage.setItem('WEB',arr) 
      }

      

  }
        
    
  stateToLocal=()=>{
        
          let arr2 = JSON.parse(localStorage.getItem(this.state.team ))
          arr2.push({
              name:this.state.name,
              desc:this.state.descrip,
              team:this.state.team,
              id: v4()
            })
          let newarray=JSON.stringify(arr2) 
          window.localStorage.setItem(this.state.team,newarray)
        
       
       this.refreshTable()
       
   
      
    this.setState({
        name:""
    })
      
    this.setState({
        team:"Slect a team"
    })
    this.setState({
        descrip:""
    })
}



refreshTable=()=>{
   this.setState({
    game:JSON.parse(window.localStorage.getItem('GAME'))   || []
   })
   this.setState({
    ai:JSON.parse(window.localStorage.getItem('AI'))   || []
   })
   this.setState({
    web:JSON.parse(window.localStorage.getItem('WEB'))   || []
   })
   
   
    window.localStorage.getItem('GAME')
    window.localStorage.getItem('AI')
    window.localStorage.getItem('WEB')
}
     


  onNameChange=(name)=>{
    this.setState({
        name
    })
  }
  onSelectChange=(team)=>{
    this.setState({
      team
    })
  }
  onDescChange=(descrip)=>{
    this.setState({
      descrip
    })
  }

  canSubmit=()=>{
    return (this.state.name)&& (this.state.team )
  }
 
  render() {
    return (
      <div>
          <h1 className="title"> >welcome to the dark side ! </h1>
    <div className="cardForm">
     <Form className="form">
      <FormGroup >
        <Label for="name"  sm={2} size="lg" >Name : </Label>
        <Input type="text" placeholder="Your name" value={this.state.name} onChange={(e)=>this.onNameChange(e.target.value)}/>
        </FormGroup>
        <FormGroup>
        <Label for="" sm={2} size="lg"> TEAM :</Label>
        <Input type="select" bsSize="lg" value={this.state.team} onChange={(e)=>this.onSelectChange(e.target.value)}>
          <option disabled selected >Slect a team</option>  
          <option>WEB</option>
          <option>GAME</option>
          <option>AI</option> 
        </Input>
      </FormGroup>
      <FormGroup>
          <Label for="exampleText" sm={2} size="lg"> Description </Label>
          <Input type="textarea" name="text" id="exampleText" value={this.state.descrip} onChange={(e)=>this.onDescChange(e.target.value)} />
        </FormGroup>
        <Button disabled={!this.canSubmit()} onClick={()=>this.stateToLocal()}>Submit</Button>
     </Form>
     </div>
       <div className="divstyle">
       
       <center> <h1>>AI </h1></center>
       { 
       
           this.state.ai.map(el=>{
            return(
              <div className="name">
                <ul>
               
                <Link className="link" to={`/details/:${el.id}`} onClick={()=>{ console.log(el.id)}}>
               <li style={{listStyleType: 'none'}} >{ el.name}</li>
               </Link>
                
                </ul>
                </div>
            )
        }
        )}
        
        </div>
        <div className="divstyle">
        <center> <h1>>WEB </h1></center>
       { 
       
           this.state.web.map(el=>{
            return(
              <div className="name">
                <ul>
                
                <Link className="link" to={`/details/:${el.id}`} onClick={()=>{ 
                    console.log(el.id)
                    
                    }}>
               <li style={{listStyleType: 'none '  }}>{el.name}</li>
               </Link>
               
                </ul>
                </div>
            )
        }
        )}
        </div>
        <div className="divstyle">
        <center > <h1>>GAME </h1></center>
       { 
       
           this.state.game.map(el=>{
            return(
               <div className="name">
               <ul>
                <Link className="link" to={`/details/:${el.id}`} onClick={()=>{ console.log(el.id)}}>
               <li style={{listStyleType: 'none'}}>{ el.name}</li>
               </Link>
                </ul>
                </div>
            )
        }
        )}
        </div>
    </div>
    );
  }
}
export default App;
