/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    webpack: (config, { isServer }) => {
        // Ignorar módulos específicos de Node en el bundle del cliente
        if (!isServer) {
          config.resolve.fallback = {
            ...config.resolve.fallback, // Mantener otros fallbacks si existen
            fs: false, // Si también da error con 'fs'
            net: false, // Si da error con 'net'
            tls: false, // Si da error con 'tls'
            child_process: false, // <-- Indicar que no resuelva 'child_process'
          };
        }
    
        // Importante: Devolver la configuración modificada
        return config;
      },
};

export default config;
