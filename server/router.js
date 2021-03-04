const router = require('express').Router();
const controller = './controllers/menu.controller'
  
router.get('/', (req, res)=> {
console.log('Helllo from server');
res.send('Testing server: it works!');
})
  
// router.get('/', controller.)
// router.post('', controller. )
// router.delete('', controller.)
// router.put('', controller.)
  
module.exports = router;