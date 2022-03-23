const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('/v2/level-activity-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'- this is pulled from Name
    var Location = req.session.data['activity-level']
     // Check whether the variable matches a condition - this is pulled from VALUE
    if (Location == "I don't exercise at the moment"){
      // Send user to next page
      res.redirect('/v2/motivation')
    } else {
      // Send user to ineligible page
      res.redirect('/v2/exercise-preferences')
    }
   })

   // Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('/v2/additional-support-groups-answer', function (req, res) {

  // Make a variable and give it the value from 'where-do-you-live'- this is pulled from Name
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

    // Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'level-activity-answer'
router.post('/v2/goals-answer', function (req, res) {

    // Make a variable and give it the value from 'where-do-you-live'- this is pulled from Name
    var Location = req.session.data['goals']
     // Check whether the variable matches a condition - this is pulled from VALUE
    if (Location == "Lose weight"){
      // Send user to next page
      res.redirect('/v2/height')
    } else {
      // Send user to ineligible page
      res.redirect('/v2/level-activity')
    }
   })
 
module.exports = router
