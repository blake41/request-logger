const axios = require('axios');

export default function handler(req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Content-Type', 'application/json');
  // console.log(Object.keys(req))
  // return res.status(200).json({ text:  });
  async function getURI(url) {
    console.log(`${url}`)
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        console.log('non 200 response')
        return res.status(response.status).json({ type: 'error', message: response.statusText });
      } else {
        console.log('200 response')
        res.json(JSON.stringify(response.data))
      }
    } catch (error) {
      console.log(error.message, "ERR")
      return res.status(500).json({ type: 'error', message: error.message });
    }
  } 
  console.log(`fuck from ${req.url}`)
  // console.log(`${req.body}`)
  // console.log(`${Object.keys(JSON.parse(req.body))}`)
  return getURI(JSON.parse(req.body)['my-url'])
  
  // return res.status(200)
  

  
  
  
}
