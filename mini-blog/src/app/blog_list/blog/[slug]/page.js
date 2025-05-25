"use client";
import React , { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import "../../../globals.css";


export default function Blog() {
  const params = useParams();
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!params.slug) return;

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
      const data = await res.json();

      console.log(data);

      setRes(data);

    }
    fetchData();
  }, [params.slug])

  if (!res) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <h1 style={{textAlign : "center"}} className="text-4xl font-bold text-center my-8">Blog</h1>
      <h1>{ res.title }</h1>
      <p>{ res.body }</p>

      <a href="/blog_list" classNem="text-blue-600 hover:underline">Tüm Bloglar</a>
    </>
  );
}
