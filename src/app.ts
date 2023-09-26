import express, { Application } from 'express'
import { connectToMongo } from './config/databases'
import { startProductoRouter } from './modules/productos/producto.routes'

// import { TaskServiceMysql } from './tasks/services/task.mysql.service'
// import { TaskServiceFileSystem } from './tasks/services/task.filesystem.service'

import { ProductoServiceMongo } from './modules/productos/servicios/producto.mongo.services'

// función de inicio del servidor

export function startServer() {
  // instancia de express
  const app: Application = express()

  // middlewares
  app.use(express.json())

  // rutas
  app.use('/api/productos', startProductoRouter(new ProductoServiceMongo()))

  // levantar el servidor
  app.listen(3000, () => {
    // Conectarse a la base de datos

    // * MongoDB
    connectToMongo()
    // * MySQL
    // connectToMysql()

    // mensaje de éxito
    console.log('Server is running on port 3000')
  })

  return app
}
