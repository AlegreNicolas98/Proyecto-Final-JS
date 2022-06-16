/*------ ALERT ------ */
/* (async () => {
  Swal.fire({
        icon: 'question',
        title: 'Ingresa tu Nombre y Apellido',
        input: 'text',
        inputPlaceholder:'Nombre completo...',
        backdrop:true ,
        width:'60%',
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Ingresar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Vuelve a ingresar tu nombre completo...`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed){
          Swal.fire({
        title:'Bienvenido a ThoraBank',
        text: 'La mejor prestacion de servicios!!',
        confirmButtonText: 'Gracias',
        backdrop: true , 
        timer: 4000 ,
        width: '50%' ,
        padding: '1rem',
        icon: 'success',
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
          })
        }
      })
 })() ; */