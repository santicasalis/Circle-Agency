console.log("hola");


const sendForm = (preventForm) => {
    preventForm.preventDefault()

    let fullname = document.querySelector("#fullname").value
    let email = document.querySelector("#email").value
    let phone = document.querySelector("#phone").value
    let message = document.querySelector("#message").value

    if (fullname== ''|| message== '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Full name and the message is required'
            
          })
    }else{

    console.log(fullname , email, phone, message);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        
        body: JSON.stringify({
            title: fullname,
            body: message,
            userId: 1,
            phone: phone,
            email: email

        }),
        
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Accept: 'text/plain, application/json'
        },
        
    
    })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .then(() => { 

            Swal.fire({
                icon: 'success',
                title: `The form its okey ${fullname} `,
                showConfirmButton: true,
                timer: 2500
            })
                .then(() => {
                   formulario.reset()
                    
                    
            })

        })  
    
        .catch((error) => console.log(error));

}
}
let formulario = document.querySelector("#submitData")
    formulario.addEventListener("submit", sendForm)