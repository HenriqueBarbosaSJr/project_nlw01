import knex from 'knex';
import path from 'path';

/* Para utilizar o sqlite devemos instalar 
   
   mpm i sqlite3

   não é necessário instalar um banco, todo o banco 
   estará dendo de um arquivo.
*/

const connection = knex({
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'database.sqlite'),
    },
    useNullAsDefault: true,
});



export default connection;