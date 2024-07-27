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

 
