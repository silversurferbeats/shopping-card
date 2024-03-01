import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch (error) {
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <div className='circlePosition w-[590px] h-[400px] bg-slate-400 rounded-[100%] absolute top-[50%] left-[50%] transalte-x-[-50%] blur-[90px] -z-10'></div>
      <div className='circlePosition w-[490px] h-[300px] bg-slate-400 rounded-[100%] absolute top-[200%] left-[10%] transalte-x-[-80%] blur-[90px] -z-10'></div>
      <div className='circlePosition w-[490px] h-[300px] bg-slate-400 rounded-[100%] absolute top-[300%] left-[30%] transalte-x-[-80%] blur-[90px] -z-10'></div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] pt-20'>
              {
                posts.map((post) => (
                  <Product key={post.id} post={post} />
                ))
              }
            </div>) :
            <div className='flex justify-center items-center'>
              <p>No Data Found</p>
            </div>
      }
    </div>
  )
}

export default Home