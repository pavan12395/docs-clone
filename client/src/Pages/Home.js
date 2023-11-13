// Home.js
import React, { useEffect,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Make sure you have React Router set up for navigation
import { CHANGE_DOCS } from '../Redux/actions';
import axios from 'axios';

const Home = () => {
  const newDocRef = useRef();
  const dispatch = useDispatch();
  const username =  useSelector(state=>state.username);
  const documents = useSelector(state=>state.docs);
  console.log(username);
  const fetchAllDocs = async ()=>
  {
    const response = await axios.get("http://localhost:5023/getDocs");
     console.log(response);
     dispatch({type : CHANGE_DOCS , payload : response.data.docs}); 
  }
  useEffect(()=>
  {
    fetchAllDocs();
  },[dispatch]);
  const buttonClickHandler = async (e)=>
  {
    e.preventDefault();
    try
    {
        await axios.post("http://localhost:5023/addDoc",{name:newDocRef.current.value , userName : username , docData : ""});
        fetchAllDocs();
    }
    catch(e){
        alert(e.response.data.message);
    }
  }
  return (
    <div className="home-container">
      <div className="create-button">
        <input type="text" ref={newDocRef}></input>
        <button onClick={buttonClickHandler}>Create Document</button>
      </div>
      <div className="documents-container">
        {documents.map((doc) => (
          <Link to={`/doc`} key={doc.id} className="document">
            {doc.name} owned by {doc.userName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
