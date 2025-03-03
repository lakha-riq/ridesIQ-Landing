import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Generate an absolute URL with an optional hash fragment
 * @param {string} path - The path (can include hash fragment)
 * @returns {string} - Full absolute URL
 */
export function getAbsoluteUrl(path:string) {
  // Base URL depends on environment
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://ridesiq.com' 
    : 'http://localhost:3000'; // Assuming default Next.js port
    
  // Handle paths that might already include a hash
  const cleanPath = path.startsWith('#') ? path : `/${path}`.replace(/\/\//g, '/');
  
  return `${baseUrl}${cleanPath}`;
}