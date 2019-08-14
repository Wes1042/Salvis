// FETCH DATA FROM URL
const url ="https://api.data.gov/ed/collegescorecard/v1/schools?fields=school.name,id,school.state,2017.admissions.admission_rate.overall,2017.cost.avg_net_price.public,2017.cost.avg_net_price.private,school.school_url,2017.cost.tuition.in_state,2017.cost.tuition.out_of_state&page=100&api_key=4nEXfWhJBDffgF9iL36vO9dgdY1iCAF0fQS2wa60"
let filterKey;
let results;

const button = document.querySelector("#filter-button");

function filterByState(arr, key){
    const filteredArray = arr.filter(item => item["school.state"] === key)
    console.log(filteredArray);
}

function getValue(){
    const inputElement = document.querySelector("#stateForm").value;
        filterKey = inputElement;
filterByState(results, filterKey);}

button.addEventListener("click", getValue);

function getResults(obj){
    results = obj.results;
    console.log(results)
}

fetch (url).then(response => response.json()).then(myJson => getResults(myJson));