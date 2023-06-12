# MercadoLibre Frontend Challenge

## Uso

### API

```console
cd api
npm install
npm run dev
```

La API corre en el puerto `8000`

#### Tests

```console
npm run test
```

### Client

```console
cd client
npm install --legacy-peer-deps
npm start
```

El cliente corre en el puerto `3000`

`--legacy-peer-deps` es necesario únicamente para correr `eslint`, ya que `eslint-config-standard-with-typescript` no soporta la versión actual de TypeScript.

#### Tests

```console
npm run test
```


## Decisiones de diseño

* No fue implementado SSR ya que la especificación daba a distintas interpretaciones, y dado el corto período de tiempo en días no hábiles para poder resolver el ejercicio, no pude realizar preguntas sobre el enunciado. Mi interpretación está basada en que la especificación solicita que los endpoints `/api/items?q=:query` y `/api/items/:id` devuelvan una respuesta específica JSON (y no HTML), lo cual puede resultar contradictorio al pedir SSR. Sin embargo, es posible utilizar SSR si se omite esta especificación y podría implementarse por ejemplo utilizando Next.js u otro framework que lo permita.
* Al obtener un item en específico, no devuelve el breadcrumb de categorías, por lo que tengo que hacer una llamada extra a la del enunciado al endpoint `https://api.mercadolibre.com/categories/:id` para poder obtener esta información. En el caso del endpoint de búsqueda esta información se obtiene en la mayoría de los productos, pero no en todos.
* El ejercicio fue probado con varios productos, como `Apple iphone`, `Furikake` y `Camisa azul`.


