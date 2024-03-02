const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .container {
    position: relative;
    margin-top: 50px;
    margin-left: 100px;
    width: 80%;
    height: 450px;
    overflow: hidden;
}

.box {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(okla.jpg);
    object-fit: cover;
    filter: brightness(70%);
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
}
h1{
    color: white;
    font-size: 25px;
    padding-top: 100px;
    padding-bottom: 25px;

}
h2{
    color: white;
    font-size: 18px;
    padding-bottom: 50px;
}
button
{
    width: 300px;
    height: 50px;
    color: white;
    background-color: rgba(223, 47, 35, 0.856);
    background: linear-gradient(0,white,(223, 47, 35, 0.856));
    font-weight: bold ;
    border-radius: 5px;

}body{
    text-align: center;
}
    </style>
</head>
<body>

    <div class="container">
        <div class="box"></div>
        <div class="text">
            <h1>
                Don't miss this special offer!
            </h1>
            <h2 >
                Get it now for just 10$! the price will be increased after 50 dowloads
            </h2>
            <button>
                Get the latest version of Bootslander
            </button> 
        </div>
    </div>
    
    
</body>
</html>
`
