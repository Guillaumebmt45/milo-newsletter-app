#!/bin/bash

echo "Starting a simple HTTP server to view the React project structure..."
echo "Note: This is just to view the files, not to run the React application."
echo "To fully run the React application, you would need Node.js and npm installed."
echo ""

# Try to use Ruby first since we know it's available
if command -v ruby &> /dev/null; then
    echo "Starting server with Ruby..."
    cd "$(dirname "$0")"
    ruby -run -e httpd . -p 3000
# Check if Python 3 is available
elif command -v python3 &> /dev/null; then
    echo "Starting server with Python 3..."
    cd "$(dirname "$0")"
    python3 -m http.server 3000
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    echo "Starting server with Python 2..."
    cd "$(dirname "$0")"
    python -m SimpleHTTPServer 3000
# If none of the above are available
else
    echo "Error: Could not find Python or Ruby to start a simple HTTP server."
    echo "Please install Node.js and npm to properly run this React application."
    exit 1
fi