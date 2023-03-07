// function getData(){
//     // from https://www.propublica.org/datastore/apirequest
//     var apiKey = "6JvLrrURJvWmH0YqmJYnsLYpwLkz3NKD2ipjRLod"
//     var urlStr = "https://api.propublica.org/congress/v1/117/house/members.json"
//     GET https://api.propublica.org/congress/v1/office_expenses/category/{category}/{year}/{quarter}.json
    
//     fetch(urlStr, { headers : {"X-API-Key" : apiKey} } )
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//             console.log(data);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to current weather');
//       console.log(error);
//     });
// }

function test() {
  var houseItems = { appliance: "stove", funiture: "sofa", automobile: "truck", flooring: "tile" };

  Object.entries(houseItems).forEach(([key, value]) => {
    console.log(`${key} ${value}`); 
  });

}