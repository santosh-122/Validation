import React from 'react';
import Card from './Card';
import classess from './UserList.css';

const UserList = (props) => {
  return (
    <Card className={classess.users}>
      <ul>
        {props.users.map((user) =>(<li  key={user.id}> 
            {user.formet} ({user.enteredTitle} years)
        </li>))}
      </ul>
    </Card>
  );
}

export default UserList;
