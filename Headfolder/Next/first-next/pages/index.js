import axios from 'axios';
import Link from 'next/link';
//import Navbar from '../components/Navbar';
//import React, {Component} from 'react';

//class Index extends Component{
//  constructor(props){
//    super(props);
//    }
//    static async getInitialProps(){
//      console.log('Fetching Data')
//    }
//    render(){
//      return(
//        <div>
//          <h1>Our website</h1>
//        </div>
//  )
//  }
//};
const Index = ({ posts }) => {
  return(
    <div>
      <h1>Our Index Page!!</h1>
      <ul>
      {posts.map(post => (
        <li key={post.id}>
        <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
        </li>
      ))}
      </ul>
    </div>
  );
};
Index.getInitialProps = async ctx => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};
export default Index;
