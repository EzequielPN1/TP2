class NotasMem {

    constructor() {
        this.notas = [
            /* {
                "id" : 1,
                "nombre": "Ana",
                "nota": 7,
                "curso" : "1A"
            },
            {
                "id" : 2,
                "nombre": "Juan",
                "nota": 8,
                "curso" : "1A"
            },
            {
                "id" : 3,
                "nombre": "Pedro",
                "nota": 9,
                "curso" : "2A"
            },
            {
                "id" : 4,
                "nombre": "Maria",
                "nota": 10,
                "curso" : "2A"
            } */
        ]
    }

    getNext_Id(notas) {
        const lg = notas.length
        return lg? parseInt(notas[lg-1]?.id || 0) + 1 : 1
    }

    obtenerNotas = async () => {
        try {
            return this.notas
        }
        catch(error) {
            console.log('error en obtenerNotas', error)
            return []
        }
    }

    obtenerNotasCurso = async curso => {
        try {
            return this.notas.filter(n => n.curso == curso)
        }
        catch(error) {
            console.log('error en obtenerNotas', error)
            return []
        }
    }

    guardarNota = async nota => {
        try {
            const id = this.getNext_Id(this.notas)
            const notaNew = {id, ...nota}
            this.notas.push(notaNew)

            return notaNew
        }
        catch(error) {
            console.log('error en guardarNota:',error)
            let nota = {}

            return nota
        }
    }
}

export default NotasMem