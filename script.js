//API TASK-02
//Declaring all the variable 
const head = document.querySelector(".header");
const displayResults = document.querySelector(".displayResults");
const button= document.querySelector("#btn");
button.addEventListener("click",function() {
//Fetching the details from the given API URL
const ApiURL = "https://www.scorebat.com/video-api/v3/";
    function renderResult(match) {
    const resultDiv = document.createElement("div");
    resultDiv.className = "card";
    resultDiv.innerHTML = `
        ${match.videos[0].embed}
        <p><b>Match:  </b>${match.title}</p>
        <p><b>Competition:  </b>${match.competition}</p>
        <p><b>Date:  </b>${match.date}</p>
        `;
    displayResults.appendChild(resultDiv);
    }
//Providing conditions to display only 20 results
    function renderAll(response) {
    displayResults.innerHTML = "";
    document.querySelector('#result').hidden=false;
    let count=0
    for(let result of response){ 
            renderResult(result);
            count++;
            if(count==20)break;
    }
}
//Using async/await to get the results
    let func = async function(ApiURL){
        try{
        const response = await fetch(ApiURL);
        let results = await response.json();
        renderAll(results.response);
        }
        catch(error){
        console.log(error.message);
        alert("sorry try again!!!")
        }
    }  
    func(ApiURL);
    });