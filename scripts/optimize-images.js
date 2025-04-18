const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const sourceDir = path.join(__dirname, '../public/assets/images');
const targetDir = path.join(__dirname, '../public/assets/images/optimized');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all PNG files from source directory
const imageFiles = fs.readdirSync(sourceDir)
  .filter(file => file.endsWith('.png') && !file.includes('optimized'));

console.log(`Found ${imageFiles.length} images to optimize`);

// Process each image
async function processImages() {
  for (const file of imageFiles) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file.replace('.png', '.webp'));

    try {
      // Convert to WebP with higher resolution but still good compression
      await sharp(sourcePath)
        .resize(450, 600, { fit: 'cover' }) // Higher resolution for card images
        .webp({ quality: 85, effort: 6 }) // Slightly higher quality, good compression effort
        .toFile(targetPath);

      console.log(`Optimized: ${file} -> ${path.basename(targetPath)}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  console.log('Image optimization complete!');
}

processImages().catch(console.error);
