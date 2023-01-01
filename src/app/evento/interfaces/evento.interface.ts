export interface Evento {
    idEvento: number
    idPromocion: number
    evento: string
    fechaEvento: Date
    idUsuario: number
    cantidadEntradas: number
    precio: number
    estado: string
    usuarioCreacion: string
    usuarioModificacion: any
    fechaCreacion: Date
    fechaModificacion: Date
    promocion: Promocion
    usuario: Usuario
  }
  
  export interface Promocion {
    idPromocion: number
    promocion: string
    fechaInicio: Date
    fechaFin: Date
    descuento: number
    estado: string
    usuarioCreacion: string
    usuarioModificacion: any
    fechaCreacion: Date
    fechaModificacion: Date
  }
  
  export interface Usuario {
    idUsuario: number
    idPersona: number
    usuario: string
    contrasenia: string
    estado: string
    usuarioCreacion: string
    usuarioModificacion: any
    fechaCreacion: Date
    fechaModificacion: Date
    persona: Persona
    roles: any[]
  }
  
  export interface Persona {
    idPersona: number
    nombres: string
    apellidos: string
    cedula: string
    celular: string
    estado: string
  }