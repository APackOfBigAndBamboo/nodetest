var mysql = require('mysql');

var TEST_DATABASE = 'school'; //连接的数据库名
var TEST_TABLE = 'user';//连接的表名

//创建连接
var client = mysql.createConnection({
    user: 'root', //数据库名
    password: 'super', //数据库密码
});

client.connect();
client.query("use " + TEST_DATABASE);

client.query(
    'SELECT * FROM '+TEST_TABLE,
    function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }

        if(results)
        {
            for(var i = 0; i < results.length; i++)
            {
                console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].email);
            }
        }
        client.end();
    }
);