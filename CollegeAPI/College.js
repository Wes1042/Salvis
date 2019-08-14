// FETCH DATA FROM URL
const url ="https://api.data.gov/ed/collegescorecard/v1/schools?fields=school.name,id,school.state,2017.admissions.admission_rate.overall,2017.cost.avg_net_price.public,2017.cost.avg_net_price.private,school.school_url,2017.cost.tuition.in_state,2017.cost.tuition.out_of_state&page=100&api_key=4nEXfWhJBDffgF9iL36vO9dgdY1iCAF0fQS2wa60"
//Y1iCAF0fQS2wa60"
fetch(url).then(function(response){
   return response.json()
}).then(function(myJson) {
  console.log(myJson);
   let data = myJson
   return data;
})
// console.log(data);
// function filterColleges(obj){
//    const dataState = document.createElement("div")
//    dataState.className="state"
//    const dState = obj.school.state;
//    const state = school.state.filter(function(results: school.state));
//    dataState.appendChild(state);
//    console.log(dataState);
// };