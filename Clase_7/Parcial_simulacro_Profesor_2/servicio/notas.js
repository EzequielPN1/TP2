import NotasMem from '../model/DAOs/notasMem.js'

class ServicioNotas {

    constructor() {
        this.notasMem = new NotasMem()
    }

    async obtenerNotas() { 
        let notas = await this.notasMem.obtenerNotas()
        return notas
    }

    obtenerPromedioTotal = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const suma = notas.map(n => n.nota).reduce((acc, nota) => acc + nota, 0)
        return suma / notas.length
    }

    obtenerPromedioCurso = async curso => {
        const notas = await this.notasMem.obtenerNotasCurso(curso)
        const suma = notas.map(n => n.nota).reduce((acc, nota) => acc + nota, 0)
        return suma / notas.length
    }

    obtenerCantidadNotas = async () => {
        const notas = await this.notasMem.obtenerNotas()
        return notas.length
    }

    obtenerCantidadNotasCurso = async curso => {
        const notas = await this.notasMem.obtenerNotasCurso(curso)
        return notas.length
    }

    obtenerCantidadNotaBaja = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const nota = notas.sort((a,b) => a.nota - b.nota)[0]
        return nota
    }

    obtenerCantidadNotaAlta = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const nota = notas.sort((a,b) => b.nota - a.nota)[0]
        return nota
    }

    async guardarNota(nota) { 
        return await this.notasMem.guardarNota(nota) 
    }
}

export default ServicioNotas
