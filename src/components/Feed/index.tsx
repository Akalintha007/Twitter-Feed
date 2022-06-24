import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Tweet from '../Tweet'
import CircularProgress from '@mui/material/CircularProgress';
import { Container,  Tweets} from './styles';




const GET_TWEETS = gql`
query Tweet{

    Tweets {
        id
        body
        date
        read
    }
}
`;

const Feed: React.FC = () => {
    const { loading, error, data } = useQuery(GET_TWEETS, {
   
    });
    if(loading){
  
     return (
        <div>
          {/* <h1>Loading...</h1> */}
          <CircularProgress />
        </div>
     )
    }
    console.log(data.Tweets)
  return (
      <Container>
          
          <Tweets>
              {/* <Tweet />
              <Tweet />
              <Tweet /> */}
              {
               
                data.Tweets.map((currentData:any) => {
                    return(
                        <Tweet 
                            id={currentData.id}
                            body={currentData.body}
                            date={currentData.date}
                            read={currentData.read}
                         />
                    )
                })
              }
              
          </Tweets>
      </Container>
  );
}

export default Feed;