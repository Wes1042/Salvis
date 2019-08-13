// FETCH DATA FROM URL

const url ="https://api.data.gov/ed/collegescorecard/v1/schools?fields=school.name,id,school.state,&page=100&api_key=4nEXfWhJBDffgF9iL36vO9dgdY1iCAF0fQS2wa60"Y1iCAF0fQS2wa60"

fetch(url).then(function(response){
    return response.json()
}).then(function(myJson) {
   console.log(myJson);
    let data = myJson
    return data;
    
    
})
// console.log(data);