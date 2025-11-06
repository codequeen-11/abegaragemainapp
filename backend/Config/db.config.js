// import mysql2 module promise wrapper
 const mysql = require('mysql2/promise');
// prepare connection parameters wee usee to connect to the database
 const dbConfig = {
    connectionLimit: 10,
     host: process.env.DB_HOST,  
     user: process.env.DB_USER , 
     password: process.env.DB_PASS, 
     database: process.env.DB_NAME  ,
 }

//  create a connection pool to the database
 const pool = mysql.createPool(dbConfig);
//  prepare a function that will execute the SQL queries asynchroniously
 async function query(sql, params) {
    const [rows, fields] = await pool.execute(sql, params);
    return rows;
 }

//  export query function for the usw in application
 module.exports = { query };