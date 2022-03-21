const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'Health question'
router.post('/fitness-details/health-question', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Location = req.session.data['health-condition']
     // Check whether the variable matches a condition
    if (Location == "No"){
      // Send user to confirmation
      res.redirect('/confirmation')
    } else {
      // Send user to next page
      res.redirect('/fitness-details/level-activity')
    }
   })
 
// Run this code when a form is submitted to 'Health question'
router.post('/additional-support-healthy-habits', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Location = req.session.data['healthy-habits']
     // Check whether the variable matches a condition
    if (Location == "Yes"){
      // Send user to next page
      res.redirect('/additional-support-groups')
    } else {
      // Send user to next page
      res.redirect('/confirmation')
    }
   })
 

module.exports = router
