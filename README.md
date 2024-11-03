<h1>Portafolio de ejercicios JS - Desarrollo Web en Entorno Cliente</h1>

<h2>Contenidos:</h2>
<p><strong>(última actualización: 03/11/24)</strong></p>
<ul>
  <li>Login: aparece antes de entrar al index.html (background modificado: se incluye una imagen de fondo)</li>
  <li>Header con foto de la alumna.</li>
  <li>Barra de navegación con enlaces a documentación, GitHub y ejercicios que se irán añadiendo.</li>
  <li>Home donde aparecerá un mensaje y una imagen de JS.</li>
  <li>Footer o pie de página.</li>

<h2>Carpetas:</h2>
<ul>

  <li>Plantilla03: Refactorización.</li>
  <br/>
  <p>- Refatorización de código JS</p>
  <p>- Scaffolding o andamiaje de las carpetas.</p>
  <p>- Creación de los scripts funciones.js y script.js que incluyen las funciones que modifican el DOM.</p>

  <li>Plantilla_ventanas: Log in mediante el uso de ventanas emergentes.</li>
  <br/>
  <p>- Uso de ventanas prompt, confirm y alert.</p>
  <p>- Creación de la función login() en un script llamado login.js</p>
  <p>- Validación de credenciales.</p>
  <p>- Manejo de errores.</p>
  <p>- Manipulación del DOM.</p>

  <li>Plantilla_loginForm: Log in sin sesión mediante formulario log-in.</li>
  <br/>
  <p>- Modificación de la función login() del script llamado login.js</p>
  <p>- Validación de credenciales.</p>
  <p>- Manejo de errores.</p>
  <p>- Manipulación del DOM.</p>

  <li>Plantilla_cookies: Manejo de cookies y numbers.</li>
  <p><strong>(última actualización: 03/11/24)</strong></p>
  <br/>
  <p>- NOTA: para la visualizar una correcta ejecución de las cookies es necesario usar LiveServer y el navegador Mozilla Firefox. 
  La manipulación de las cookies desde la consola con Google Chrome es limitada.</p>
  <p>- Adición del proyecto de Number: Calculadora cuyo enlace se incluye en la pestaña desplegable de Number.</p>
  <p>- Creación del script JS para Calculadora, calculadora.js, que incluye la funcionalidad del mismo. </p>
  <p>- Adición de un pattern en el input username del archivo login.html</p>
  <p>- Adición de un home o landing page a partir de la cuál se irán seleccionando los ejercicios.</p>
  <p>- Creación y manejo de la cookie con los scripts: setCookie.js, getCookie.js, eraseCookie.js</p>
  <p>- Adición de un enlace para cerrar sesión y que redirija al login.html.</p>
  <p>- Modificación del script script.js añadiendo una función para que cuando se regarguen las páginas compruebe si la cookie ha expirado o no. Si expira nos redirije al login.html.</p>
  <p>- Introducción de una ventana desplegable en el navbar llamada Recursos donde se podrá acceder a la documentación de JS.</p>
  <p>- Introducción de una ventana desplegable en el navbar llamada Number donde se irán añadiendo ejercicios relacionados con el manejo de números en JS.</p>
  <p>- Adición de los ejercicios: Mini-calculadora y Cambio-bases en la sección de Number.</p>
  <p>- Creación de los scripts miniCalculadora.js y cambioBases.js.</p>
  <p>- Creación de los CSS específicos para los ejercicios Mini-calculadora y Cambio-bases.</p>
  <p>- Creación de la sección DOM donde se introducen los ejercicios de modificación del DOM de la plantilla03.</p>

  <li>Plantilla_string: Manejo de LocalStorage, API y strings</li>
  <br/>
  <p>- Sustitución del pattern en el login.html por una expresión regular, tanto para el username como el password.</p>
  <p>- Creación de los scripts para el manejo de localStorage: setLocalStorage.js, getLocalStorage.js y deleteLocalStorage.js.</p>
  <p>- Introducción de la ventana desplegable String que contiene los ejercicios: Modificar-texto y API.</p>
  <p>- Modificar-texto: manipulación de strings con funciones de JS.</p>
  <p>- Creación del script modificarTexto.js.</p>
  <p>- API: al ejercicio Modificar-texto se le añade la opción de cargar un texto desde una API mediante el uso de funciones asíncronas y promesas.</p>
  <p>- Creación del script modificarTextoApi.js.</p>

  <li>Plantilla_arrays_indexedDB: Manejo de IndexedDB y arrays</li>
  <p><strong>(última actualización: 03/11/24)</strong></p>
  <br/>
  <p>- Manejo del login con el uso de IndexedDB de forma asíncrona.</p>
  <p>- Creación de los ficheros JS para manejar IndexedDB:</p>
  <p>1) IndexedDB: incluye la función que abre y crea (si no está creada) la base de datos.</p>
  <p>2) setIndexedDB: almacena el usuario logueado en IndexedDB.</p>
  <p>3) getIndexedDB: recupera el usuario logueado del IndexedDB.</p>
  <p>3) deleteIndexedDB: elimina el usuario logueado del IndexedDB.</p>
  <p>Tanto en getIndexedBD como en deletIndexedDB he tenido que hacer uso del método .openCursor() para poder
      acceder al usuario logueado(primer registro ) dentro de IndexedDB, ya que al usar el "name" como keyPath no 
      recuperaba los datos del usuario logueado correctamente y, por tanto, tampoco se eliminaba de IndexedDB una
      vez cerrada la sesión.</p>
  <p>- Modificación del script login.js para que funcione de forma asíncrona y ejecute correctamente las funciones 
        de IndexedDB.</p>
  <p>- Adición de la pestaña desplegable Array en el Nav. </p>
  <p>- La sección de Array incluye los ejercicios: </p>
  <p>1)Operaciones con Matrices: introducción manual de la dimensión de la matriz cuadrada para generar 2 matrices 
        con las que se realizarán las operaciones de sumar, restar o multiplicar dependiendo de qué botón se pulse, y la matriz resultante aparecerá seguidamente</p>
  <p>2)Operaciones con Matrices + Testing: adición al ejercicio de operaciones con matrices de una función 
        aleatoria que genera la dimensión de la matriz y sus valores mínimo y máximo. A su vez se añade la 
        funcionalidad de que las operaciones sumar, restar y multiplicar sean realizadas de forma aleatoria 
        al pulsar el botón Aleatorio. Esta última funcionalidad se puede controlar para que se haga más rápido, lento o pare con funciones y eventos añadidos al script JS.</p>
  <p>- Manejo de los métodos de manipulación del DOM: createElement(), createTextNode(), appendChild() y 
        replaceChildren() para la creación de la matriz resultante.</p>
</ul>
<br/>
<br/>
<footer>Autora: Ruyi Xia Ye</footer>
