import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPhoneNumber = (value: any) => {
  // Elimina cualquier caracter que no sea un número
  const numericValue = value.replace(/\D/g, "");

  // Aplica el formato "(9) 9999 9999"
  let formattedValue = "";

  if (numericValue.length >= 1) {
    formattedValue += `(${numericValue.charAt(0)}`;
  }

  if (numericValue.length >= 5) {
    formattedValue += `) ${numericValue.substring(1, 5)}`;
  } else if (numericValue.length > 1) {
    formattedValue += `) ${numericValue.substring(1)}`;
  }

  if (numericValue.length >= 9) {
    formattedValue += ` ${numericValue.substring(5, 9)}`;
  } else if (numericValue.length > 5) {
    formattedValue += ` ${numericValue.substring(5)}`;
  }

  return formattedValue;
};

export const formatedRut = (rut: string) => {
  // Elimina cualquier guión o punto del RUT y lo convierte a mayúsculas
  rut = rut
    .replace(/\./g, "")
    .replace(/-/g, "")
    .replace(/[^0-9kK-]/g, "")
    .toUpperCase();

  if (rut.length < 2) {
    return rut;
  }

  // Separa el RUT en su parte numérica y su dígito verificador
  const rutPart = rut.slice(0, -1);
  const verificador = rut.slice(-1);

  // Combina la parte numérica del RUT con el dígito verificador y guión
  return rutPart + "-" + verificador;
};

export function limpiarCadena(cadena: string) {
  // Eliminar paréntesis, espacios, guiones y puntos
  return cadena.replace(/[()\s.-]/g, "");
}

interface SeparatedUrl {
  host: string;
  storeId: string;
}

export const separateUrl = (env_url: string): SeparatedUrl | null => {
  // Separar el host y el storeId de la URL

  if (!env_url) {
    return null;
  }
  const matches = env_url.match(/^(https?:\/\/[^\/]+)\/api\/([^\/]+)/);
  if (matches && matches.length === 3) {
    const host = matches[1]; // Obtener el host
    const storeId = matches[2]; // Obtener el storeId

    const result: SeparatedUrl = {
      host: host,
      storeId: storeId,
    };

    return result;
  } else {
    console.error("No se pudo separar la URL correctamente.");
    return null; // O un objeto vacío, dependiendo de tus necesidades
  }
};
