import CnxMongoDB from "../DBMongo.js"

class ModelMongo {

    constructor() {
    }

    obtenerProductos = async id => {
        if(!CnxMongoDB.connection) return id? {} : []

        if(id) {
            return await Promise.resolve({})
        }
        else {
            const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
            return productos
        }    
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connection) return {}

        return await Promise.resolve(producto)
    }


    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connection) return {}

        return await Promise.resolve(producto)
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connection) return {}

        return await Promise.resolve({})
    }
}

export default ModelMongo