import React from "react";
import { Button } from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";


function Detail({users}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const user = users.find(user=> user.id === id);

  return (
    <div>         
        <h1>{user.name}</h1> 
                <h2>{user.email}</h2> 
                <h2>{user.username}</h2>        
                 <br/>      
                      <Button variant="outline-secondary" onClick={() => navigate(-1)}>       
                            Go Back       
                                </Button>  
                         </div>
  );
}

export default Detail;