//Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

import express from "express"
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

router.get('/blogpost/:slugs', (req, res) => {
    res.send(`Fetch the blogpost for ${req.params.slugs}`)
  })
  

// module.exports = router
export default router;