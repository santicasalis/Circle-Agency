
const getPost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((resp) => {
            let infoLink = ""
            let newArray = resp.slice(8, 9)
            newArray.forEach((post) => {
                infoLink +=
                    `  <h1>${post.title}</h1>
    
              <div class="epigrafe">
                  <h3>UI Design & App Development</h3>
                  <div class="fecha-epigrafe"><div>Completed on</div> <div class="date">2/2/22</div> </div>   
              </div>
              <div> <img class="imagen"src="project-assets/projects-section/1.jpg" alt=""></div>   
              
          
            <div class="parrafo">
               <p>${post.body}</p>
               <p>${post.body}</p>
          `
            
            });
    
            document.querySelector(".container-simplify").innerHTML += infoLink;
    
        });
        
     
}
getPost()