const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>3D Text</title>
        <style>
            @import url("https://fonts.googleapis.con/css?family=Poppins:100,200,300,400,500,600,700,800,900");
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: #222;
                overflow: hidden;
            }
            @media only screen and (max-width: 500px) {
                .container{
                    display: none;
                }
                #phone{
                    display: block;
                    justify-content: center;
                    align-items: center;
                    font-size: 32px;
                    color: red;
                    transform: rotate(-90deg);
                    background: #222;
                }
            }
            @media only screen and (min-width: 500px){
                #phone{
                    display: none;
                }
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
        
                }
        
                .container .box {
                    transform-style: preserve-3d;
                    animation: animate 25s linear infinite;
                }
        
                @keyframes animate {
                    0% {
                        transform: perspective(1000px) rotateX(0deg) rotate(25deg);
                    }
        
                    100% {
                        transform: perspective(1000px) rotateX(360deg) rotate(25deg);
                    }
                }
        
                .container .box span {
                    position: absolute;
                    color: #fff;
                    font-size: 3.5em;
                    white-space: nowrap;
                    text-transform: uppercase;
                    font-weight: 900;
                    padding: 0 10px;
                    line-height: 0.76em;
                    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5), transparent);
                    transform-style: preserve-3d;
                    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
                    transform: translate(-50%, -50%) rotateX(calc(var(--i) * 22.5deg)) translateZ(106px);
                }
        
                .container .box span i:nth-child(1) {
                    font-style: initial;
                    color: #ff246f;
        
                }
        
                .container .box span i:nth-child(2) {
                    font-style: initial;
                    color: #12b5ff;
                }
            }
            
        </style>
    </head>
    
    <body>
        <span id="phone">Rotate your Phone</span>
        <div class="container">
            <div class="box">
                <span style="--i:1;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:2;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:3;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:4;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:5;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:6;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:7;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:8;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:9;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:10;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:11;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:12;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:13;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:14;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:15;"><i>You </i>are <i>A</i>wesome</span>
                <span style="--i:16;"><i>You </i>are <i>A</i>wesome</span>
            </div>
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});