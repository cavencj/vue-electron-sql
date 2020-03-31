/*
 * @Author: Caven
 * @Date: 2020-03-09 10:39:47
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-31 12:59:25
 */

let sql = `
   DROP TABLE IF EXISTS tb_Test;

   CREATE TABLE tb_Test(
     id varchar(50) primary key ,
     name varchar(20) not null,
     label varchar(20) not null
    );

   `
export default sql
