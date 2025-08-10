#!/bin/bash

# Create node_modules directory if it doesn't exist
mkdir -p node_modules

# Create a basic public directory with index.html
mkdir -p public
cat > public/index.html << 'EOL'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0B0B0C" />
    <meta
      name="description"
      content="Milo Newsletter - Stay ahead with curated insights"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Milo Newsletter</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
EOL

# Create a simple manifest.json
cat > public/manifest.json << 'EOL'
{
  "short_name": "Milo",
  "name": "Milo Newsletter",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#0B0B0C",
  "background_color": "#0B0B0C"
}
EOL

# Create a simple robots.txt
cat > public/robots.txt << 'EOL'
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
EOL

# Create a simple .gitignore file
cat > .gitignore << 'EOL'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOL

echo "Setup complete! The React project structure has been created."
echo "To start the development server, you would typically run:"
echo "  npm start"
echo "But since we don't have Node.js installed, you can view the files directly."