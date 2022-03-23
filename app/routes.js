const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('/v2/level-activity-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'- this is pulled from ID
    var Location = req.session.data['activity-level']
     // Check whether the variable matches a condition - this is pulled from VALUE
    if (Location == "I don't exercise at the moment"){
      // Send user to next page
      res.redirect('/v2/motivation')
    } else {
      // Send user to ineligible page
      res.redirect('/v2/goals')
    }
   })

   // Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('/v2/additional-support-groups-answer', function (req, res) {

  // Make a variable and give it the value from 'where-do-you-live'- this is pulled from ID
  var Location = req.session.data['would-you-like-information-on-support-groups-and-networks']
   // Check whether the variable matches a condition - this is pulled from VALUE
  if (Location == "Yes"){
    // Send user to next page
    res.redirect('/v2/personal-details3')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/check-answers')
  }
 })
 
module.exports = router
