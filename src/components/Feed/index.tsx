import React from 'react';

import Tweet from '../Tweet'

import { Container,  Tweets} from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
          
          <Tweets>
              <Tweet />
              <Tweet />
              <Tweet />
              
          </Tweets>
      </Container>
  );
}

export default Feed;