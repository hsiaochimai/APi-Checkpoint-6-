function getRepos(username){
console.log(`https://api.github.com/users/${username}/repos`)
fetch(`https://api.github.com/users/${username}/repos`)
.then(response=> response.json())
.then(obj=>{
    console.log(obj)
return displayResults(obj)
})
}
function displayResults(responseArr){
        const $results= $('#results')
        $results.empty();
        $results.removeClass('hidden')
       if(responseArr.message==='Not Found') {
           alert('Username not found, did you type it correctly?')
       }
        else{
        for(let i=0; i<=responseArr.length-1; i++ ){
      const repoName= `<p>Repo name: ${responseArr[i].name}</p>`
      const repoUrl= `<p><a href=" ${responseArr[i].html_url}">Link</a></p>`
    $results.append(repoName);
    $results.append(repoUrl);
}
}
    }









function setupSearch(){
$('form').submit(event=>{
    event.preventDefault();
    console.log('submit button was clicked')
    const userInputUsername= document.getElementById('js-username').value 
    console.log(`User Input is ${userInputUsername}`)
    $('#js-username').val('')
    getRepos(userInputUsername);
})
}
setupSearch();