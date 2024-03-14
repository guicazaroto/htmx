import express, { urlencoded } from 'express';

const app = express();

app.use(express.static('public'));
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'jon@gmail.com'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jan@gmail.com'
    }
  ];

  const template = `
    <h1>Users</h1>
    <ul>
      ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>
  `;
  
  res.send(template);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})