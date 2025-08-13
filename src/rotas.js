import aprendendoController from './controller/aprendendoController.js'


export function adicionarRotas(api) {
    api.use(aprendendoController)
};