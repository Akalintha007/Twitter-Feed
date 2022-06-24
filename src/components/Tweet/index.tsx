import React from 'react';
// import Avatar from '@mui/material/Avatar';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import {
  Container,
  Body,
  
  Content,
  Header,
  Summary,
  BlogUrl,
  Description,


} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      

      <Body>
        {/* <Avatar src='./twitterApi.png' /> */}
        {/* <img src='./twitterApi.png' alt='twitter api' style={{height:'50px', width:'50px', margin:'10px'}}/> */}
        <img src={require('./twitterApi.png')} alt='twitter api' style={{height:'70px', width:'70px'}}/>
        <Content>
          <Header>
            <strong style={{color:'black', }}>Twitter API
            
            </strong>
            <img src={require('./verified.png')} alt='verified' style={{height:'17px', width:'17px', marginRight:'5px'}}/>
            <Summary style={{color:'grey', marginBottom:'3px'}}>@twitterapi</Summary>
            
            <time style={{marginLeft:'157px'}}>23 Jun 2022</time>
          </Header>

          <Description style={{color:'black'}}>We have updated our player cards guidelines. Quick overview and discussioon in our developer forums:</Description>
          <BlogUrl style={{color:'black'}}>blog url.com/blogs</BlogUrl>
          <div style={{display:'flex', flexDirection:'row'}}>
          <ArticleOutlinedIcon sx={{fontSize:'medium', fill: "grey", marginTop:'2px', marginRight:'3px'}}/>
          <Summary style={{color:'grey'}}>
            
            Show Summary
          </Summary>
          </div>

    
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
