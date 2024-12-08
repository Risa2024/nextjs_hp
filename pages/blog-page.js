import React from 'react'
import Layout from '../components/layout';
import { getAllPostsData } from '../lib/posts';

const Blog = ({ props }) => {
  return 
  <Layout title="Blog">
     <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
  </Layout>
 
  };

export default Blog;

export async function getStaticProps() { //サーバーサイドでビルド時に実行される
  const posts = await getAllPostsData
  return {
    props: { posts },
  };
}
