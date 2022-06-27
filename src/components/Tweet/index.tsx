// import React from 'react';

// // import Avatar from '@mui/material/Avatar';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
// import { gql, useMutation } from '@apollo/client';

// import {
//   Container,
//   Body,
//   Content,
//   Header,
//   Summary,
//   BlogUrl,
//   Description,
// } from './styles';

// type IMyProps ={
//   id: any,
//   body:any,
//   date: any,
//   read: boolean
// }

// const MARK_TWEET = gql`
//   mutation Mutation($markTweetReadId: ID!) {
//   markTweetRead(id: $markTweetReadId)
// }
// `;


// const Tweet = (props:IMyProps) => {
//   const [mutateFunction, { data, loading, error }] = useMutation(MARK_TWEET);

//   const readStatus=(id: any)=>{
//     console.log(id)
//      console.log("clicked on read badge")
//     mutateFunction()

//   }

//   const deleteTweet=(id: any)=>{
//     console.log(id)
//      console.log("clicked on delete")
//     //  mutateFunction()

//   }
  
//   return (
//     <Container key={props.id}>
      

//       <Body  key={props.id}>
//         {/* <Avatar src='./twitterApi.png' /> */}
//         {/* <img src='./twitterApi.png' alt='twitter api' style={{height:'50px', width:'50px', margin:'10px'}}/> */}
//         <img src={require('./twitterApi.png')} alt='twitter api' style={{height:'70px', width:'70px'}}/>
//         <Content>
//           <Header>
//             <strong style={{color:'black', }}>Twitter API
            
//             </strong>
//             <img src={require('./verified.png')} alt='verified' style={{height:'17px', width:'17px', marginRight:'5px'}}/>
//             <Summary style={{color:'grey', marginBottom:'3px'}}>@twitterapi</Summary>
            
//             <time style={{marginLeft:'157px'}}>{props.date}</time>
//           </Header>

//           <Description style={{color:'black'}}>{props.body}</Description>
//           <BlogUrl style={{color:'black'}}>blog url.com/blogs</BlogUrl>
//           <div style={{display:'flex', flexDirection:'row'}}>
//           <ArticleOutlinedIcon sx={{fontSize:'medium', fill: "grey", marginTop:'2px', marginRight:'3px'}}/>
//           <Summary style={{color:'grey'}}>
            
//             Show Summary
//           </Summary>
//           {
//             !props.read? <MarkEmailReadOutlinedIcon onClick={() => readStatus(props.id)}  sx={{fontSize:'large', fill: "grey", marginRight:'3px', marginLeft:'280px' }}  />
//             :
//             <MarkEmailReadOutlinedIcon onClick={() => readStatus(props.id)} sx={{fontSize:'large', fill: "#1DA1F2", marginRight:'3px', marginLeft:'280px', "&:hover": { fill: "green" }}}  />
//           }
          
//           <DeleteOutlineOutlinedIcon  onClick={() => deleteTweet(props.id)} sx={{fontSize:'large', fill: "grey", marginRight:'3px', marginLeft:'10px', "&:hover": { fill: "red" }}} />
//           </div>

    
//         </Content>
//       </Body>
//     </Container>
//   );
// };

// export default Tweet;














import React, { useEffect, useState } from 'react';

// import Avatar from '@mui/material/Avatar';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { gql, useMutation } from '@apollo/client';

import {
  Container,
  Body,
  Content,
  Header,
  Summary,
  BlogUrl,
  Description,
} from './styles';

type IMyProps ={
  id: any,
  body:any,
  date: any,
  read: boolean
}

const MARK_TWEET = gql`
 mutation($markTweetReadId: ID!) {
  markTweetRead(id: $markTweetReadId)
}
`;

const DELETE_TWEET = gql `
 mutation($deleteTweetId: ID!) {
  deleteTweet(id: $deleteTweetId) {
    id
    body
  }
}
`


const Tweet = (props:IMyProps) => {
  const[updateState, setUpdateState] = useState(props.read);
  const [mutateFunction] = useMutation(MARK_TWEET, {
    variables: { markTweetReadId: props.id }
  });

  const[deleteMutation] = useMutation(DELETE_TWEET, {
    variables: { deleteTweetId: props.id}
  })
  const readStatus=(id: any)=>{
 
    console.log("clicked on read badge")
    mutateFunction()
    setUpdateState(!props.read)
  }

  const deleteTweet=(id: any)=>{
   
     console.log("clicked on delete")
     deleteMutation()
     setUpdateState(!props.read)

  }
  
  
  return (
    <Container key={props.id}>
      

      <Body  key={props.id}>
        {/* <Avatar src='./twitterApi.png' /> */}
        {/* <img src='./twitterApi.png' alt='twitter api' style={{height:'50px', width:'50px', margin:'10px'}}/> */}
        <img src={require('./twitterApi.png')} alt='twitter api' style={{height:'70px', width:'70px'}}/>
        <Content>
          <Header>
            <strong style={{color:'black', }}>Twitter API
            
            </strong>
            <img src={require('./verified.png')} alt='verified' style={{height:'17px', width:'17px', marginRight:'5px'}}/>
            <Summary style={{color:'grey', marginBottom:'3px'}}>@twitterapi</Summary>
            
            <time style={{marginLeft:'157px'}}>{props.date}</time>
          </Header>

          <Description style={{color:'black'}}>{props.body}</Description>
          <BlogUrl style={{color:'black'}}>blog url.com/blogs</BlogUrl>
          <div style={{display:'flex', flexDirection:'row'}}>
          <ArticleOutlinedIcon sx={{fontSize:'medium', fill: "grey", marginTop:'2px', marginRight:'3px'}}/>
          <Summary style={{color:'grey'}}>
            
            Show Summary
          </Summary>
          {
            !props.read? <MarkEmailReadOutlinedIcon onClick={() => readStatus(props.id)}  sx={{fontSize:'large', fill: "grey", marginRight:'3px', marginLeft:'280px' }}  />
            :
            <MarkEmailReadOutlinedIcon onClick={() => readStatus(props.id)} sx={{fontSize:'large', fill: "#1DA1F2", marginRight:'3px', marginLeft:'280px', "&:hover": { fill: "green" }}}  />
          }
          
          <DeleteOutlineOutlinedIcon  onClick={() => deleteTweet(props.id)} sx={{fontSize:'large', fill: "grey", marginRight:'3px', marginLeft:'10px', "&:hover": { fill: "red" }}} />
          </div>

    
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;