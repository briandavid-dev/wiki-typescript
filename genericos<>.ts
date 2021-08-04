/**
 * Genéricos en tipos
 * - Un generigo es una manera de meter parameros en definiciones de tipos
 * - Podemos influir en los tipos internos declarados
 * */

interface Respuesta<Type> {
  type: string;
  success: boolean;
  message: Type;
}

let payload1: Respuesta<string> = {
  type: "post",
  success: true,
  message: "TIPO_ALGO",
};

let payload2: Respuesta<boolean> = {
  type: "error",
  success: true,
  message: true,
};

let payload3: Respuesta<number> = {
  type: "error",
  success: true,
  message: 10,
};

/**
 * Múltiples genéricos y buenas prácticas
 */

interface Respuesta2<Message, Algo> {
  type: string;
  success: boolean;
  message: Message;
  something?: Algo;
}

let payload4: Respuesta2<string, number> = {
  type: "post",
  success: true,
  message: "TIPO_ALGO",
  something: 40,
};

/**
 * Genéricos en funciones
 */

type Nota = { mensaje: string };
type NotaColorida = Nota & { color: string };
type Foto = { url: string };
type Video = Foto & { duracion: number };

// HTTP POST /upload
function subir<Publicacion, Extra>(p: Publicacion, e?: Extra): Publicacion {
  return p;
}

let post: Nota = { mensaje: "Esta es la nota" };
let sub = subir(post);
