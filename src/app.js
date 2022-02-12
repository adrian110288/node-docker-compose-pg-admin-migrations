import express, { json, urlencoded } from 'express';
import pg from 'pg'
const { Pool } = pg;

const db = new Pool({
    host: 'pg',
    port: 5432,
    database: 'app_db',
    user: 'user',
    password: 'password'
})

const app = express()
app.use(json())
app.use(urlencoded({extended: true}))

app.get('/', async (_, res) => {
    const { rows } = await db.query('select * from users join posts on posts.user_id = users.id')
    res.json(rows)
    log(rows)
})

app.get('/users/:id', async (req, res) => {
    const {id} = req.params
    const {rows} = await db.query('select * from users where id=$1', [id])
    console.log(`Requested id ${id}`)
    res.send(`Requested id $id`)
})

const port = process.env.PORT

app.listen(
    port,
    () => console.log(`App running on port ${port}. Database URL: ${process.env.DATABASE_URL}`));