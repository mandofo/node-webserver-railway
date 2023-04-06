const http = require('http');

http.createServer((req, res)=> {
    /*Respues tipo JSON
    res.writeHead(200, {'Content-Type':'application/json'});
    const persona = {
        id:1,
        nombre:'Armando'
    }
    res.write( JSON.stringify(persona) );
    */
    /*   respuesta CSV
    res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type':'application/CSV'});
    res.write( 'Id, Nombre\n' );
    res.write( '1, Armando\n' );
    res.write( '2, Lupe\n' );
    res.write( '3, Martha\n' );
    */

    res.write( 'HOLA MUNDO' );

    res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080)