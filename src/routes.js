const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')
const StatusController = require('./controllers/StatusController')
const TypeController = require('./controllers/TypeController')
const EstablishmentController = require('./controllers/EstablishmentController')
const PaymentController = require('./controllers/PaymentController')
const ClientController = require('./controllers/ClientController')
const OrderController = require('./controllers/OrderController')

// Rotas Produtos
routes.get('/products/findAll', ProductController.index)
routes.get('/products/findById/:id', ProductController.show)
routes.post('/products/store', ProductController.store)
routes.put('/products/updateById/:id', ProductController.update)
routes.delete('/products/removeById/:id', ProductController.destroy)

// Rotas Clientes
routes.get('/clients/findAll', ClientController.index)
routes.get('/clients/findById/:id', ClientController.show)
routes.post('/clients/store', ClientController.store)
routes.put('/clients/updateById/:id', ClientController.update)
routes.delete('/clients/removeById/:id', ClientController.destroy)

// Rotas Pagamentos
routes.get('/payments/findAll', PaymentController.index)
routes.get('/payments/findById/:id', PaymentController.show)
routes.post('/payments/store', PaymentController.store)
routes.put('/payments/updateById/:id', PaymentController.update)
routes.delete('/payments/removeById/:id', PaymentController.destroy)

// Rotas Status
routes.get('/status/findAll', StatusController.index)
routes.get('/status/findById/:id', StatusController.show)
routes.post('/status/store', StatusController.store)
routes.put('/status/updateById/:id', StatusController.update)
routes.delete('/status/removeById/:id', StatusController.destroy)

// Rotas Types
routes.get('/types/findAll', TypeController.index)
routes.get('/types/findById/:id', TypeController.show)
routes.post('/types/store', TypeController.store)
routes.put('/types/updateById/:id', TypeController.update)
routes.delete('/types/removeById/:id', TypeController.destroy)

// Rotas Establishment
routes.get('/establishments/findAll', EstablishmentController.index)
routes.get('/establishments/findById/:id', EstablishmentController.show)
routes.post('/establishments/store', EstablishmentController.store)
routes.put('/establishments/updateById/:id', EstablishmentController.update)
routes.delete('/establishments/removeById/:id', EstablishmentController.destroy)

// Rotas Order
routes.get('/orders/findAll', OrderController.index)
routes.get('/orders/findById/:id', OrderController.show)
routes.post('/orders/store', OrderController.store)
routes.put('/orders/updateById/:id', OrderController.update)
routes.delete('/orders/removeById/:id', OrderController.destroy)

module.exports = routes;