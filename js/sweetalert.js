/* (async () => {
    const {value: nombre } = await Swal.fire({
        icon: 'question',
        title:'Ingresa tu Nombre y Apellido',
        input:'text',
        inputPlaceholder:'Nombre completo...',
        confirmButtonText: 'Ingresar',
        backdrop:true ,
        width:'60%',
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
    });
    
    if(nombre){
        Swal.fire({
            title:'Bienvenido a ThoraBank',
           text: nombre,
            confirmButtonText: 'Gracias',
            backdrop: true , 
            timer: 3000 ,
            width: '50%' ,
            padding: '1rem',
            icon: 'success',
        });
        } 
 })() */