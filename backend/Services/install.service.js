// import the query function from the database configuration file
const conn = require('../Config/db.config');
// import fs module to handle file system operations
const fs = require('fs');
// write a function to create dataase tables
async function install() {
// create a variable to hold the path to the sql file
    const queryFile = __dirname + '/sql/initial-queries.sql';

    console.log(queryFile);

    // temporary variable , used to store all queries , the return message  current query
    let queries = [];
    let finalMessage = {};
    let templine='';  
    
    // read the sql file content
    const lines = fs.readFileSync(queryFile, 'utf8').split("\n");
    // create a promise to handle the asynchronous reading of the file and execution of queries in variables
     const executed= await new Promise((resolve, reject) => {
        // iterate through each line in the sql file
        lines.forEach((line) => {
            if (line.trim().startsWith('--') || line.trim() === '') {
                // skip if its a comment or empty line
                return;
            }
            // append the line to the current query
            templine += line;
            // check if the line ends with a semicolon indicating the end of a query
            if (line.trim().endsWith(';')) {
                // prepare the individual query
                const sqlQuery = templine.trim();
                // add the complete query to the queries array
                queries.push(templine.trim());
                // reset the temporary variable for the next query
                templine = '';
            }
        })

        resolve('queries are added to the list')
    });

    console.log('queries length', queries.length);
    // loop through the queries and excute them one by one asynchronously
for ( let i = 0; i < queries.length; i++) {
    try{
        const result = await conn.query(queries[i]);
        console.log(`Query ${i + 1} executed successfully`);
    }
    catch(err){
        console.error(`Error executing query ${i + 1}:`, err);
        // finalMessage = { error: `Error executing query ${i + 1}: ${err.message}` };
        return  { error: `Error executing query ${i + 1}: ${err.message}`, status: 500 };
    }
}

    return { message: 'Database installation completed successfully! All tables created.', status: 200 };

 
}
module.exports = { install }




 