const express = require('express');
const { Client } = require('pg');
const app = express();
const config = require('./config')[process.NODE_ENV || 'dev'];
const PORT = config.PORT
const cors = require('cors');
const client = new Client({
    connectionString:config.connectionString
})
client.connect();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.get('/api/wallet',(req,res)=>{
    console.log('Sending data back...');
    client.query('SELECT * FROM current_month_spending order by date asc;')
    .then(result=>{
        console.log('success!')
        res.send(result.rows)
    })
});
app.get('/api/wallet/sum',(req,res)=>{
    console.log('Sending sum back...');
    client.query('select category, round(CAST(sum(amount)/(select sum(amount) from current_month_spending)*100 as numeric),2) as amount from current_month_spending group by category;')
    .then(result=>{
        console.log('success!');
        res.send(result.rows);
    })
});
app.post('/api/wallet',(req,res)=>{
    console.log('Updating...');
    const body = req.body
    console.log(body)
    client.query(`insert into current_month_spending (category,amount,description,date) values ('${body.category}',${body.amount},'${body.description}','${body.date}');`)
    .then(result=>{
        console.log('Update success');
        res.end();
    })
})
app.delete('/api/wallet',(req,res)=>{
    console.log('Deleting...');
    client.query(`delete from current_month_spending where id=${req.body.id}`)
    .then(result=>{
        console.log('Delete success');
        res.end();
    })
})



app.listen(PORT,()=>{
    console.log('Listening on port',PORT);
})