// const express = require('express');
// const mysql = require('mysql2');
import express from 'express'
import mysql from 'mysql2'
import sequelize from './config/db.config.js';
import equipment_router from './router/equipment_router.js'
const app = express();

// const connection = mysql.createConnection({
//   host: 'localhost', // หรือชื่อโฮสต์ที่คุณกำหนด
//   user: 'root', // หรือชื่อผู้ใช้ MySQL ของคุณ
//   password: 'sunsun1234', // ใส่รหัสผ่านที่คุณตั้งค่าไว้ใน MySQL
//   database: 'sun', // ใส่ชื่อฐานข้อมูลที่คุณต้องการเชื่อมต่อ
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL!');
// });
app.use('/equipment', equipment_router)

app.get('/', (req, res) => {
  res.send('hello')
})
// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized with models.');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

// รายละเอียดอื่นๆ เช่นการใช้ Express เพื่อสร้าง API หรือการติดตั้งเส้นทางในโปรเจคของคุณ

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
