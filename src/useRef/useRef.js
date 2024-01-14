import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Ref() {
    const [name, setName] = useState('');
    // const renderCount = useRef(1);
    // const inputRef = useRef();
    const prevName = useRef('');
    // function focus() {
    //     inputRef.current.focus();
    //     inputRef.current.value = 'Hello';
    // }
    // useEffect(() => {
    //     renderCount.current = renderCount.current + 1;
    // })
    
    useEffect(() => {
        prevName.current = name;
    }, [name])
    return (
       <>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name} and it used to be {prevName.current} </div>
            {/* <button onClick={focus}>Focus</button> */}
            {/* <div>I rendered {renderCount.current} times</div> */}
            <br/>
            <Link to="/">Back to home</Link>
       </>
    );
}