echo "Building app..."
npm run build

echo "Deploy files to server..."
scp -r -i ~/Desktop/demo-swp dist/* root@206.189.158.35:/var/www/html/
echo "Done!"