import express, { urlencoded } from 'express';

const app = express();

app.use(express.static('public'));
app.use(urlencoded({ extended: true }));
app.use(express.json());

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
  },
  {
    id: 3,
    name: 'Jim Doe',
    email: 'j@e.com'
  },
  {
    id: 4,
    name: 'Jill Doe',
    email: 'u@i.com'
  }
];

app.get('/users', (_, res) => {
  const template = `
    <h1>Users</h1>
    <ul>
      ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ul>
  `;

  res.send(template);
})

app.get('/users/async', (req, res) => {
  console.log(req.query.limit)
  setTimeout(() => {
    res.json(users.slice(0, req.query.limit));
  }, 2000);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})