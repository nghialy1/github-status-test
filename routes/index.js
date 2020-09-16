var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const url = 'https://kctbh9vrtdwd.statuspage.io/api/v2/status.json';
  axios.get(url)
    .then( (response) => {
      const rsp = response.data;  
      res.render('index',{ rsp });
    })
    .catch((error) => {
      res.render('error',{ error });
    })
}); 

module.exports = router;
