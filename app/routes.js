const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('level-activity-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Location = req.session.data['activity-level-1']
     // Check whether the variable matches a condition
    if (Location == "Few times a week"){
      // Send user to next page
      res.redirect('/error')
    } else {
      // Send user to ineligible page
      res.redirect('/question-2')
    }
   })
 
module.exports = router
