// Misfortune has fallen on your camp! Your JARVIS bot is being sabotaged by raiders who also need the food and medicine you have. We need to come up with a plan to help JARVIS avoid these raiders while out foraging.

// Write a function called raiderAvoidancePlan that takes in one parameter called targetsFoundWhileForaging, which you can expect will always be given an array argument value, where each element in the array is a
// string representing a "target" that JARVIS has found (i.e. medicine, food, etc.). HOWEVER, sometimes JARVIS will detect a human-shaped lifeform, which could either be a zombie or a raider. In those cases, the
// targetsFoundWhileForaging array can sometimes be given strings (ie. either a string of "zombie" or "raider"). We want to help JARVIS avoid those targets.

// Your function should output the usual string to the terminal if JARVIS finds some good food or supplies while on his journey. That string, to remind you, looks like this: "JARVIS has found some ______!" where the
// blank represents the type of food or supplies.

// However, if JARVIS encounters a potential danger (either "zombie" or "raider"), we want our function to log  the following to the console: "JARVIS has found a _____!! ENGAGING AVOIDANCE ACTION PLAN!!"

// Lastly, your function should output a value representing the total number of targets found while out foraging that day.

// For example, if you were given the following targetsFoundWhileForaging argument value:
// ["insulin", "oatmeal", "raider", "zombie", "canned peaches"]
// Your function would log the following to the console.
//     "JARVIS has found some insulin!"
//     "JARVIS has found some oatmeal!"
//     "JARVIS has found a raider!! ENGAGING AVOIDANCE ACTION PLAN!!"
//     "JARVIS has found a zombie!! ENGAGING AVOIDANCE ACTION PLAN!!"
//     "JARVIS has found some canned peaches!"
// Lastly, your function would output the following value:
//     5
// Because 5 total targets were found while out foraging today.

// // Write your code below:

const encounter = ["canned food", "aspirin", "bandages", "insulin", "oatmeal", "raider", "zombie", "canned peaches"];

function gatherSupplies(suppliesToLookFor) {
  for (let foodsupplies = 0; foodsupplies < suppliesToLookFor.length; foodsupplies++) {
    if (suppliesToLookFor[foodsupplies] === "raider" || suppliesToLookFor[foodsupplies] === "zombie") {
      console.log("JARVIS has found some " + suppliesToLookFor[foodsupplies] + " ENGAGING AVOIDANCE ACTION PLAN!!");
    } else {
      console.log("JARVIS has found some " + suppliesToLookFor[foodsupplies]);
    }
  }
  console.log("total encounters: " + suppliesToLookFor.length);
}

gatherSupplies(encounter);
