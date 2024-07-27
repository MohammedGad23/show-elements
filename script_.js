// Q1 swap Ans

let a=10, b = 600;
console.log("a = "+ a,"  b = " + b);
[a,b] = [b,a];

console.log("a = "+ a,"  b = " + b);

// Q2 min and max

var arr = [1,2,3,4,5,6,7,8,9,10]
function minMAx(...arr1){
    let ans = {"min" :Math.min(...arr1), "max":Math.max(...arr1)}
    return ans;
}
let ans = minMAx(...arr);

console.log("min is " + ans.min);
console.log("max is " +ans.max);

// Answer Day 2 Qa

var result  = fetch("https://jsonplaceholder.typicode.com/users");


result.then((e)=>{
 return  e.json()
})
.then((users)=>{
    users.forEach((el) => {
        var _a= $(`<a id="${el.id}"></a>`);
        $(".head").append(_a);
        $(_a).html(`${el.name}`);
        click__();
        // console.log(el.name);
    });
})
.catch(()=>{
     alert("try again")
})
function click__(){
    $("a").click(function(){
        $(".aTab").removeClass("aTab");
        $(this).addClass("aTab");
        let idx = $(this).attr("id");
        $(".tab_").removeClass("tab_");
        $(`.hideElement`).addClass("tab_");
        getUsers(idx);
    })
}

// Answer Day 2 Qb

async function getUsers(id){
    try{
    var result  = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    console.log(id);
    var users =  await result.json();
    $(".post").html("");
    users.forEach((el) => {
           var _div= $("<div></div>");
           $(_div).addClass("elementPost")
           $(_div).html(`<h3>${el.id}</h3><h3>${el.title}</h3><div class="bodyPost">${el.body}</div>`);
           $(".post").append(_div);
        //    console.log(el.name);
    });    
    }
    catch(e){
        alert("Refreash and try again");
    }

}

 
