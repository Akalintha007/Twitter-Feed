// import React from 'react';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import ProfilePage from '../ProfilePage'
// import Button from '@mui/material/Button';
// // import "./App.css";
// // import {
// //   ApolloClient,
// //   InMemoryCache,
// //   ApolloProvider,
// //   HttpLink,
// //   from,
// // } from "@apollo/client";
// // import { onError } from "@apollo/client/link/error";
// import {SearchInput} from './styles2';
// import { Container, Header,  ProfileInfo} from './styles';

// // const errorLink = onError(({ graphqlErrors, networkError }) => {
// //     if (graphqlErrors) {
// //       graphqlErrors.map(({ message, location, path }) => {
// //         alert(`Graphql error ${message}`);
// //       });
// //     }
// //   });
  
// //   const link = from([
// //     errorLink,
// //     new HttpLink({ uri: "http://localhost:4000/graphql" }),
// //   ]);
  
// //   const client = new ApolloClient({
// //     cache: new InMemoryCache(),
// //     link: link,
// //   });

// const Main: React.FC = () => {
// const addTweet = () => {
//   console.log("add tweet")
// }

//   return (
//       <Container>
//           <Header>
//               <ProfileInfo style={{display:'flex', flexDirection:'row'}}>
                    
//                     <strong style={{color:'black'}}>Tweets</strong>
//                     <button style={{marginLeft:'315px', color:'grey', borderStyle:'solid', borderWidth:'1px', borderColor:'grey', borderRadius:'3px', padding:'5px',paddingLeft:'10px', paddingRight:'10px'}}>
//                    <div style={{display:'flex', flexDirection:'row'}}>
//                    <img src={require('./twitter.png')} alt='twitter api' style={{height:'18px', width:'18px'}}/>
//                     <div style={{marginTop:'2px', color:'grey'}}> Follow @twitterapi</div>
//                    </div>
//                     </button>
//               </ProfileInfo>
//           </Header>

//           <ProfilePage />

          
//             <div style={{backgroundColor:'#cbd1d4', display:'flex', flexDirection:'row' , justifyContent:'center'}}>
//             <div style={{margin:'20px',marginLeft:'',width:'65%',backgroundColor:'#fff', borderStyle:'solid',borderColor:'#c2bcbc', borderWidth:'1px', borderRadius:'5px'}}>
               
//                <SearchInput placeholder="Tweet to @twitterapi" style={{borderWidth:'1px', width:'100%'}}/>
                 
               
               
           
//        </div>
//                 <div style={{marginTop:'21px'}}>
//                 <Button variant="contained" onClick={()=>addTweet()} sx={{boxShadow:'none', textTransform:'none', height:'39px'}} size="medium" startIcon={<AddOutlinedIcon style={{fill:"#fff"}}  />}>
//                     Add Tweet
//                   </Button>
//                 </div>
      
//             </div>
//       </Container>
//   );
// }

// export default Main;


import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ProfilePage from '../ProfilePage'
import Button from '@mui/material/Button';
// import "./App.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   from,
// } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";
import {SearchInput} from './styles2';
import { Container, Header,  ProfileInfo} from './styles';
import { gql, useMutation } from '@apollo/client';

const ADD_TWEET = gql `
  mutation($tweetBody: String, $tweetRead: Boolean, $tweetDate: Date) {
  createTweet(input: {
    body: $tweetBody,
    date: $tweetDate,
    read: $tweetRead
  }) {
    id
    body
  }
}
`

const Main: React.FC = () => {
  const[tweetBody, setTweetBody] = useState(null)
  let tempTweetBody :any;
  const [addMutation] = useMutation(ADD_TWEET, {
    variables: {
      body: tweetBody,
      read: false,
      date: format(new Date(), 'yyyy/MM/dd')
    },
  }
  )
const addTweet = () => {
  console.log("add tweet")
  addMutation();
}

const handleChange = (event: any) => {
  tempTweetBody = event.target.value
  setTweetBody(tempTweetBody)
  
}
useEffect(() => {
  return () => console.log("updated")
}, [tweetBody])

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

          <form>

            <div style={{backgroundColor:'#cbd1d4', display:'flex', flexDirection:'row' , justifyContent:'center'}}>
            <div style={{margin:'20px',marginLeft:'',width:'65%',backgroundColor:'#fff', borderStyle:'solid',borderColor:'#c2bcbc', borderWidth:'1px', borderRadius:'5px'}}>
               <SearchInput placeholder="Tweet to @twitterapi" style={{borderWidth:'1px', width:'100%'}} onChange={handleChange}/>   
            </div>
            <div style={{marginTop:'21px'}}>
              <Button variant="contained" onClick={()=>addTweet()} sx={{boxShadow:'none', textTransform:'none', height:'39px'}} size="medium" startIcon={<AddOutlinedIcon style={{fill:"#fff"}}  />}>
                Add Tweet
              </Button>
            </div>
            </div>
          </form>
      
      </Container>
  );
}

export default Main;