const express = require('express');
const router = express.Router();

const users = [
    { username: 'user1', birthdate: '2000-01-01', age: 21, email: 'user1@example.com', password: 'password', valid: true },
    { username: 'user2', birthdate: '2000-01-02', age: 20, email: 'user2@example.com', password: 'password', valid: true },	
    { username: 'user3', birthdate: '2000-01-03', age: 19, email: 'user3@example.com', password: 'password', valid: true },
];

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const { password, ...userWithoutPassword } = user; // Destructure to remove password
        user.valid = true;
        res.json({ valid: true, user: userWithoutPassword });
    } else {
        res.json({ valid: false });
    }
});

module.exports = router;
