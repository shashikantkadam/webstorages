/* alert("hello ") */

let cl = console.log
let mytable =document.getElementById('mytable');

/* let myData =[
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },      
]

// to convert javascript object into JSON data >> JSON.stringify()
let jsonData = JSON.stringify(myData);
cl(jsonData)

// to set data into localstorage/sessionstorage we use >> locolstorage.setitem() / sessionstorage.setitem()
localStorage.setItem('setData',jsonData)
*/
// to get data from  localstorage/sessionstorage we use >> locolstorage.setitem() / sessionstorage.getitem()
let getData = localStorage.getItem('setData')
cl(getData)
 
// to convert json strigified data into javascript object we use >> JSON.parse()
let getJsData = JSON.parse(getData)
cl(getJsData)

let result ='';
getJsData.forEach((ele,i) => {
    result +=`
        <tr>
            <td>${i+1}</td>
            <td>${ele.id}</td>
            <td>${ele.userId}</td>
            <td>${ele.title}</td>
            <td>${ele.body}</td>
        </tr>
    `
    
});
mytable.innerHTML = result;
