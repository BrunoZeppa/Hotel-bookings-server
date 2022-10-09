# Hotel-bookings-server

Hola!

En los siguentes parrafos, explicaré la lógica y el porque de la estrucura del código.

1. explicacion general del proyecto

Como primer punto se crea una aplcación que tiene usuarios, con el fin de que estos puedan interactuar dentro de ella y sea fácil identificar que usaurio realizó tal acción.

Después el hotel con cuenta de usuario pero con rol de administrador, crear el espacio digital (los cuartos). Los cuales se les puedes poner el precio, el tipo de cuarto, la descripción e inactivarlos en caso de mantenimiento. El "role" del usuario tiene por defautl el status normal, asi que se debe especificar en el body el rol de administrador.

Una vez creado los cuartos, entonces podemos empezar a recibir clientes. Para ello el hotel pondrá al alcance de los clientes la ocpion de reservar la estancia (stay), asi mismo que seleccionen el tipo de cuarto (standar, delux, luxury, ..los cuales ya definió el hotel), el precio, y si el cuarto ya esta ocupado entonces no se mostrara a los usuarios ni al hotel, asi a modo de agilizar los prosesor en front desk del hotel en caso de que tenga reservas presenciales y necesiten saber que cuartos tiene para dar.

Ahi mismo en la reserva el cliente, se deberá mandar las sigueintes imagenes que son enviadas por form-data: tarjeta de credito a modo de garantia por seguridad del hotel, identificaicion oficial y datos de facturacion (en caso de requerir factura). Se pueden enviar hasta 5 imagenes en total por post de reserva. Una vez creada la reserva el status de la habitacion pasará a no-disponible (unavailable), y el hotel lo verá reflejado en su cuenta de administrador.

Si el cliente cancela la reserva, entonces esta pasará a un status "cancelled". Asi mismo el hotel podrá ver todas las reservas sin importar el status.

Tanto las contraseñas como los numeros de tarjetas son encryptados y marcados con undefined, para ocultarlos. Las credenciales de la base de datos tambien son protegidas con dotenv, asi que no se mostraran dentro del repositorio.

Las imagenes son cargadas a la peticion del post de la reserva con ayuda de multer y almacenades en firebase con Disk.storage y las urls de las imagenes son llevadas a la base de datos.

2. explicacion de los enpoints

En el caso de los endpoints que van a recibir las peticiones, solamente pongo 3, el de los usuarios, el de las reservas y el de los cuartos.

-usuarios
Ahi se podran hacer las operaciones básicas CRUD, mas aparte el login del usuario.
El usuario y el hotel podran ver sus reservas y el status de las mismas.

-reservas
Ahi se podran manejar las reservas, asi como subir las imagenes que representan documentacion importante como la identificación, los datos fiscales de la persona u una tarjeta de crédito en garantia

-cuartos
operaciones CRUD y la disponibilidad.

3.documentacion postman

aqui dejo la documentacion del postman

https://documenter.getpostman.com/view/22441822/2s83ziMNkr
# Hotel-bookings-server
