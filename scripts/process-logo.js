const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const inputPath = path.join(__dirname, '../public/logoL.jpg');
  const outputPath = path.join(__dirname, '../public/logo-square.jpg');
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;
    
    console.log(`Original dimensions: ${width}x${height}`);
    
    // Calculate padding (20% of the larger dimension)
    const paddingPercent = 0.2;
    const maxDimension = Math.max(width, height);
    const padding = Math.floor(maxDimension * paddingPercent);
    
    // Calculate square size (max dimension + padding on both sides)
    const squareSize = maxDimension + (padding * 2);
    
    console.log(`Square size: ${squareSize}x${squareSize}`);
    console.log(`Padding: ${padding}px on each side`);
    
    // Calculate offset to center the image
    const offsetX = Math.floor((squareSize - width) / 2);
    const offsetY = Math.floor((squareSize - height) / 2);
    
    console.log(`Offset: x=${offsetX}, y=${offsetY}`);
    
    // Create square canvas with white background, center the logo
    await sharp({
      create: {
        width: squareSize,
        height: squareSize,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
      .composite([
        {
          input: await sharp(inputPath).toBuffer(),
          left: offsetX,
          top: offsetY
        }
      ])
      .jpeg({ quality: 95 })
      .toFile(outputPath);
    
    console.log(`✅ Logo processed successfully!`);
    console.log(`Output: ${outputPath}`);
    console.log(`Format: Square ${squareSize}x${squareSize} (1:1 ratio)`);
    
  } catch (error) {
    console.error('Error processing logo:', error);
    process.exit(1);
  }
}

processLogo();
