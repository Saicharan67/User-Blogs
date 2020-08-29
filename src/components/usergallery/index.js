import React from 'react';
import  UserCard from '../usercard/index.js'
import './style.css'

class UserGallery extends React.Component{
 constructor(props){

    super(props);
    this.state={
       users:[],
       currentpage:0,
       isLoad:false
    };
 }
 componentDidMount =  () => {

    this.fetchusers();
 }

 fetchusers = () => {
     const pagetofetch=this.state.currentpage+1
   const url = `https://reqres.in/api/users?page=${pagetofetch}`
   this.setState({
       isLoad:true
   })
   fetch(url,{
        method:"GET"
       })
       .then( responce =>{
            return responce.json();

       })
       .then(result =>{
          
        const allUsers = [...this.state.users, ...result.data]
        this.setState({
            users:allUsers,
            currentpage:pagetofetch,
            isLoad:false
        })
       }).catch(error=>{
           this.setState({
               isLoad:false
           })
       })
   }
  
 
 render = ( ) => {
     return (
        <div className="container">
        <p className="title">------ User Gallery--------</p>

        <div className="show-area">
          {this.state.users.map((user) => {
            return (
              <UserCard
                key={user.id}
                picUrl={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
              />
            );
          })}
        </div>
        {this.state.isLoad ? (
          <span className="loading-text">Loading ...</span>
        ) : (
          <button className="load-btn" onClick={this.fetchusers}>
            Load More
          </button>
        )}
      </div>

     )

 }

}


export default UserGallery