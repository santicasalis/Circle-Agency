


const getApiInfo=()=>{

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((resp) => {
     let infoExtern = ""
        let newArray= resp.slice(0,3)
          newArray.forEach((post,index) => {
          infoExtern += `
          <div class="project">
          <img src="project-assets/projects-section/${index+1}.jpg" alt="">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <a href="articles/Simplify.html">Learn More</a>
          </div>
          `
        
      });

      document.querySelector(".projects-container").innerHTML += infoExtern;

 });
    
 
 


}
getApiInfo()