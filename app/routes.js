const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('/v2/level-activity-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'
    var Location = req.session.data['activity-level']
     // Check whether the variable matches a condition
    if (Location == "I don't exercise at the moment"){
      // Send user to next page
      res.redirect('/v2/motivation')
    } else {
      // Send user to ineligible page
      res.redirect('/v2/goals')
    }
   })
 
module.exports = router
