const axios = require('axios');

export default function handler(req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Content-Type', 'application/json');
  // console.log(Object.keys(req))
  // return res.status(200).json({ text:  });
  console.log(`request was from ${req.url}`)
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`${ip}`)
  return res.status(200);
} 
  // console.log(`${req.body}`)
  // console.log(`${Object.keys(JSON.parse(req.body))}`)
  // return getURI(JSON.parse(req.body)['my-url'])
  
  // return res.status(200)
