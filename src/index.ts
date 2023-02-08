let var1 : string = "Hola Mundo"
var1 = "Desarrollo Web"

var1 = "Nos vemos"

console.log(var1)
console.log(typeof [])

/**
 * Tipos de JS
 * number, string, boolena, null, undefined, object, fucntion
 * 
 * Tipos TS
 * any -> no usarlo, unknown, never, arrays, tuplas, enums, tipos inferidos
 * 
 */
let extincionDinosarurios : number = 76_000_000
let dinosaurioFavorito : string = "T-rex"
let extintos:boolean = true 

 // ---- Tipado INFERIDO 
 let mivariable =  "este es mi valor"

 // ---- Tipo Any ---- recibe cualquier valor ---- no habria razon de usar typescrip en este caso
 let mivariable2 
 mivariable = "Hola Dev"
 mivariable2 = 42

 /**
  * Nunca dejar una variable sin un tipo o un valor asignardo 
 */
  
 // ---- FUNCIONES ----
 function gecndev(config: any){
    return config
 }

// ******************************
 // tipo Inferido de TS
 let animales = ['perro', 'gato', 'pollo']  

 // tipo TS
 let animales2: string[] = ['perro', 'gato', 'pollo'] 
 let nums: number[] = [1,2,3]
 let nums2 = [] // esto no queremos que suceda
 let checks: boolean[] = []

 // ******************************
 // metodo alternativo de dato Array
 let nums3: Array<number> = []

// animales.map(x => x. ) el auto completado sugiero metodos del tipo de dato

// ******************************
// ---- Tuplas ----
let tupla: [ number, string ] = [1, 'Desarrollo Web']
let tupla2: [ number, string[] ] = [1, ['Desarrollo Web', 'Hola']]

// ******************************
// ---- ENUMS ----
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }
console.log(Talla.Chica)

// <-- Al Transpilar el codigo se genera un IFEE de este enum

// ******************************
const enum LoadingState { Idle,Loading, Success, Error } // 0,1,2,3
// <-- no declara esto al compilar, ya que no es necesario al principio solo cuando se usa
const estado = LoadingState.Success

// ******************************
// ---- OBJETOS ----
const objeto:{ id:number, 
               nombre:string } = { id: 1, nombre: 'Guillermo' }

// si deseas que un valor sea opcionar pones el valor de ? en la variable
const objeto2:{ id:number, nombre?:string } = { id: 2 }

objeto.id = 47

// si no queremos que pueda ser modificado un valor devemos utilizar readonly
const objeto3:{ readonly id:number, 
                nombre?:string } = { id:3 }

// objeto3.id = 5  aqui muestra un error
const objeto4:{ 
        id:number, 
        nombre:string, 
        talla: Talla 
    } = { 
            id: 4,
            nombre: 'GECNDEV',
            talla: Talla.Grande
        }

// Se puede definir el tipo de objeto para nuestro ejemplo
type  Direccion = {
    numero: number,
    calle: string,
    pais:string
}     

type Persona = {
    id:number, 
    nombre:string, 
    talla: Talla,
    direccion: Direccion
}

const objeto5:Persona = {
    id:5,
    nombre:'Guillermo',
    talla:Talla.ExtraGrande,
    direccion:{ 
        numero: 1234,
        calle:'Jose',
        pais:'Bolvia'
    }
}

const arr: Persona[] = []











