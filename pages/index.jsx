import React from 'react';
import { useCurrentUser } from '../lib/hooks';
import PostEditor from '../components/post/editor';
import Posts from '../components/post/posts';

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>
      <div style={{ marginBottom: '2rem' }}>
        <h2>
          Hello,
          {' '}
          {user ? user.name : 'friend'}
          !
        </h2>
        <p>Enjoy the rest of your day.</p>
      </div>
      <div>
        <h3>
          All Posts from this App:
          {' '}
        </h3>
        <PostEditor />
        <Posts />
      </div>
    </>
  );
};

export default IndexPage;
