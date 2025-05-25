import React from 'react';
import Link from 'next/link';


export default async function Blog_list() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await data.json();
  
  return (
    <>
      <ul>
        {res.map((post)=> (
          <li style={{listStyle : "none"}}>
            
              <Link href={"/blog_list/blog/" + post.id}> {post.title} </Link>
            
          </li>
        ))}
      </ul>
    </>
  );
}
