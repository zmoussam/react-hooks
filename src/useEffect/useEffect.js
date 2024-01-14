import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Effect() {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json));
    }, [resourceType]);
    
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // const handleResize = () => {
    //     setWindowWidth(window.innerWidth);
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleResize);

    //     // clean up
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     }
    // }, []);

  return (
    <>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
         <br/>
        <Link to="/">Back to home</Link>
    </>
    // <div>
    //     {windowWidth}
    // </div>
  );
}

export default Effect;