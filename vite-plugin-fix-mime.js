// vite-plugin-fix-mime.js
export default function fixMimePlugin() {
  return {
    name: 'fix-mime-types',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Fix MIME types for specific problematic files
        if (req.url.includes('chext_driver.js') || req.url.includes('chext_loader.js')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        }
        next();
      });
    },
    // Handle production build
    generateBundle(options, bundle) {
      // Ensure proper MIME types in the generated bundle
      Object.keys(bundle).forEach(fileName => {
        if (fileName.endsWith('.js') || fileName.includes('chext_driver') || fileName.includes('chext_loader')) {
          if (bundle[fileName].type === 'asset') {
            bundle[fileName].fileName = bundle[fileName].fileName.replace(/\.js$/, '.mjs');
          }
        }
      });
    }
  };
}
