// Configuración de API URL para desarrollo y producción
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Genera la URL completa para llamadas a la API
 * @param {string} path - Ruta de la API (ej: '/sections', '/api/blogs')
 * @returns {string} URL completa
 */
export const apiUrl = (path) => {
  // Asegurar que el path comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si VITE_API_URL está definida (producción en AWS), úsala completa
  if (import.meta.env.VITE_API_URL) {
    // Si el path ya incluye /api, no duplicar
    const finalPath = normalizedPath.startsWith('/api') 
      ? normalizedPath 
      : `/api${normalizedPath}`;
    return `${API_BASE_URL}${finalPath}`;
  }
  
  // Si no está definida (desarrollo local), usa el proxy de Vite
  return normalizedPath.startsWith('/api') 
    ? normalizedPath 
    : `/api${normalizedPath}`;
};

