import React, { useEffect, useState } from 'react'

// const usePostTitle = () => {
//     const [post, setPost] = useState({});

//     async function getPost() {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       const json = await response.json();
//       setPost(json);
//     }
  
//     useEffect(() =>{
//       getPost();
//     },[])

//     return post.title
// }



 function useFetch(url, retryTime) {
    const [finalData, setFinlaData] = useState({});
    const [loading, setloading] = useState(false);


    async function getDetails(){
      setloading(true);
        const response = await (fetch(url));
        const json = await response.json();
        setFinlaData(json) ;
        setloading(false)
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
      setInterval(getDetails, retryTime *1000)
    })

  return {finalData, loading}
}


export default useFetch
