// try {
// //     const response = await fetch("http://localhost:5000/api/authApplication/Register", {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify({
// //         username: "leenAlmahti",
// //         email: "leenalmaht@gnail.com",
// //         password: "Leen2004@"
// //     })
// // });
//     const response = await fetch("http://localhost:5000/api/authApplication/Login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         "userName": "leenAlmahti",
//         "password": "Leen2004@"
//     })
// });


// const data = await response.text();
//     // const data = await _response.text();
//  console.log(data);

// //         const data = await _response.json();

// //         console.log(data); // this a error 
// }
// catch (error) {
//     console.log("the promise is rejected");
// }

// const jsonData = '{"userName":"leenAlmahti","email":"leen@example.com"}';

// const user = JSON.parse(jsonData);

// console.log(user);
// console.log(user.userName);
// console.log(user.email);


// const user = {
//     userName: "leenAlmahti",
//     password: "Leen2004@"
// };

// const jsonData = JSON.stringify(user);

// console.log(jsonData);
const _json = {
    userName: "leenAlmahti",
    password: "Leen2004@"
};
const data = JSON.stringify(_json);
let response = await fetch("http://localhost:5000/api/authApplication/Login", {
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body:data
});
// let res = await response.json();
// console.log(res);
let q = await response.text();
console.log(q);