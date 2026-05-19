import React , {useState, useEffect} from 'react';
import "./Fetch.css"

 function Fetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch ("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => {
           setUsers(data);
           setLoading(false);
    })
          .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);



  return (
    <div className="container">
      <h2>User Data Table</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Phone</th>
              <th>Website</th>
              
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
                <td>
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Fetch;
