let btn = document.querySelector("button");

btn.addEventListener("click" , async  ()=>{
 let facts = await getFacts();
 //console.log(facts);
 let p = document.querySelector("p");
 p.innerText = facts;
})

let url = "https://catfact.ninja/fact";

async function getFacts(){    //async function has a return type of promise
    try{ 
    //fetch(url)
    let res = await axios.get(url);
    return res.data.fact;
    }catch(e){
        console.log("error - ",e);
        return "No fact found";
    }
    
}
