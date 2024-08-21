import React, { useState } from 'react';
import './App.css';

type User = {
  Name: string;
  'FavoriteFood': string;
  'FavoriteMovie': string;
  Status: 'Active' | 'Inactive';
  Date?: string;
};

const App: React.FC = () => {
  const currentDate: string = new Date().toISOString().split('T')[0];
  const [users, setUsers] = useState<User[]>([
    {
      Name: 'Rocky',
      FavoriteFood: 'Sushi',
      FavoriteMovie: 'Back to The Future',
      Status: 'Inactive',
      Date: currentDate
    },
    {
      Name: 'John',
      FavoriteFood: 'Pizza',
      FavoriteMovie: 'Inception',
      Status: 'Active',
      Date: currentDate
    },
    {
      Name: 'Jane',
      FavoriteFood: 'Pasta',
      FavoriteMovie: 'The Matrix',
      Status: 'Active',
      Date: currentDate
    },
    {
      Name: 'Hamilton J.',
      FavoriteFood: 'Chicken soup',
      FavoriteMovie: 'Run',
      Status: 'Active',
      Date: currentDate
    }
  ]);

  const sortUsers = (property: keyof User) => {
    const sorted = [...users].sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];

      if (valueA === undefined) return 1;
      if (valueB === undefined) return -1;

      return valueA > valueB ? 1 : -1;
    });
    setUsers(sorted);
  };

  const activeUsers = users.filter(User => User.Status === 'Active');

  return (
    <div className="App">
      <h1>Sortable users Table</h1>
      {activeUsers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th onClick={() => sortUsers('Name')}>Name</th>
              <th onClick={() => sortUsers('Date')}>Date</th>
              <th onClick={() => sortUsers('FavoriteMovie')}>Favorite Movie</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Date}</td>
                <td>{user['FavoriteMovie']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No active records found.</p>
      )}
    </div>
  );
};

export default App;