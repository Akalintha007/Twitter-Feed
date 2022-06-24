import React from 'react';

import ProfilePage from '../ProfilePage'

import {
    
    
   
    SearchInput,
    
  } from './styles2';

import { Container, Header,  ProfileInfo} from './styles';


const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <ProfileInfo style={{display:'flex', flexDirection:'row'}}>
                    <strong style={{color:'black'}}>Tweets</strong>
                    <button style={{marginLeft:'315px', color:'grey', borderStyle:'solid', borderWidth:'1px', borderColor:'grey', borderRadius:'3px', padding:'5px',paddingLeft:'10px', paddingRight:'10px'}}>
                   <div style={{display:'flex', flexDirection:'row'}}>
                   <img src={require('./twitter.png')} alt='twitter api' style={{height:'18px', width:'18px'}}/>
                    <div style={{marginTop:'2px', color:'grey'}}> Follow @twitterapi</div>
                   </div>
                    </button>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          
            <div style={{backgroundColor:'#cbd1d4'}}>
            <div style={{margin:'20px',backgroundColor:'#fff', borderStyle:'solid',borderColor:'#c2bcbc', borderWidth:'1px', borderRadius:'5px'}}>
               
               <SearchInput placeholder="Tweet to @twitterapi" style={{borderWidth:'1px'}}/>
               
           
       </div>
            </div>
      </Container>
  );
}

export default Main;