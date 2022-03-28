const sqlite = require('./sqlite3');

const SQL = 
`
/* 文件切片列表 */
CREATE TABLE IF NOT EXISTS uploadList (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename VARCHAR,
    filepath VARCHAR,
    sn INT,
    create_date DATETIME DEFAULT (CURRENT_TIMESTAMP)
);
/* 文件列表 */
CREATE TABLE IF NOT EXISTS fileList (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename VARCHAR,
    filepath VARCHAR,
    create_date DATETIME DEFAULT (CURRENT_TIMESTAMP)
);
/* 常用配置 */
CREATE TABLE IF NOT EXISTS metaData (type VARCHAR, data VARCHAR);
`;

// 数据库初始化
module.exports = function(){
    let esql = SQL.split(';');
    for(let i=0;i<esql.length;i++){
        if(esql[i]!=''){
            sqlite.execute(esql[i]); //执行sql 
        }
    }
}