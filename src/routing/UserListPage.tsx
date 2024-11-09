const UserListPage = () => {
    const users = [
      { id: 1, name: 'Augustine' },
      { id: 2, name: 'Dianna' },
      { id: 3, name: 'Akira' },
    ];
    return (
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <a href="#">{user.name}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default UserListPage;