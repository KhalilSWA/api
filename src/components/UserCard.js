import Card from 'react-bootstrap/Card';
import React from 'react'


function UserCard({user}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>    
        <Card.Text>{user.email}</Card.Text>    
      </Card.Body>
    </Card>
  );
}



export default UserCard;