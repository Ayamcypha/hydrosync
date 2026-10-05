const fs = require('fs');
const path = require('path');
const https = require('https');
const { promises: fsPromises } = require('fs');

const PICS_DIR = path.join(__dirname, '..', 'public', 'pics');

// Curated Unsplash photo URLs for each service category
// Using high-quality Unsplash photos that are free for commercial use
// Using higher quality parameters: w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb
const IMAGE_MAP = {
  // HVAC Services
  'heating': 'https://images.unsplash.com/photo-1623302105554-73e3c15628f6?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'cooling': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'air-quality': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  
  // Plumbing Services
  'plumbing': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'emergency': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'kitchen': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'backflow': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-line': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'gas-line': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sump-pumps': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'slab-leaks': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-heaters': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-treatment': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'kitchen': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'gas-line': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sump-pumps': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'slab-leaks': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-heaters': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-treatment': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'gas-line': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sump-pumps': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'slab-leaks': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-heaters': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'water-treatment': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  
  // Sewer & Drains
  'sewer-drains': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'camera-inspection': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'catch-basins': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'drain-cleaning': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'hydrojetting': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sewer-line': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'pipe-lining': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sewer-line': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'toilet-repair': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'catch-basins': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'drain-cleaning': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'hydrojetting': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sewer-line': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'toilet-repair': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'catch-basins': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'drain-cleaning': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'hydrojetting': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sewer-line': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'toilet-repair': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'catch-basins': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'drain-cleaning': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'hydrojetting': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'sewer-line': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'toilet-repair': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  
  // Commercial
  'commercial': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'commercial-hvac': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'commercial-plumbing': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  
  // Main pages
  'services': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'heating': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'cooling': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
  'air-quality': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop&crop=entropy&cs=tinysrgb',
};

const SERVICE_PAGES = {
  // Main services page
  'services': { file: 'src/app/services/page.tsx', key: 'services' },
  
  // HVAC
  'heating': { file: 'src/app/services/hvac/heating/page.tsx', key: 'heating' },
  'cooling': { file: 'src/app/services/hvac/cooling/page.tsx', key: 'cooling' },
  'air-quality': { file: 'src/app/services/hvac/air-quality/page.tsx', key: 'air-quality' },
  
  // Plumbing
  'plumbing': { file: 'src/app/services/plumbing/page.tsx', key: 'plumbing' },
  'emergency': { file: 'src/app/services/plumbing/emergency/page.tsx', key: 'emergency' },
  'backflow': { file: 'src/app/services/plumbing/backflow/page.tsx', key: 'backflow' },
  'water-line': { file: 'src/app/services/plumbing/water-line/page.tsx', key: 'water-line' },
  'gas-line': { file: 'src/app/services/plumbing/gas-line/page.tsx', key: 'gas-line' },
  'sump-pumps': { file: 'src/app/services/plumbing/sump-pumps/page.tsx', key: 'sump-pumps' },
  'slab-leaks': { file: 'src/app/services/plumbing/slab-leaks/page.tsx', key: 'slab-leaks' },
  'water-heaters': { file: 'src/app/services/plumbing/water-heaters/page.tsx', key: 'water-heaters' },
  'water-treatment': { file: 'src/app/services/plumbing/water-treatment/page.tsx', key: 'water-treatment' },
  'gas-line': { file: 'src/app/services/plumbing/gas-line/page.tsx', key: 'gas-line' },
  'sump-pumps': { file: 'src/app/services/plumbing/sump-pumps/page.tsx', key: 'sump-pumps' },
  'slab-leaks': { file: 'src/app/services/plumbing/slab-leaks/page.tsx', key: 'slab-leaks' },
  'water-heaters': { file: 'src/app/services/plumbing/water-heaters/page.tsx', key: 'water-heaters' },
  'water-treatment': { file: 'src/app/services/plumbing/water-treatment/page.tsx', key: 'water-treatment' },
  'kitchen': { file: 'src/app/services/plumbing/kitchen/page.tsx', key: 'kitchen' },
  'backflow': { file: 'src/app/services/plumbing/backflow/page.tsx', key: 'backflow' },
  'gas-line': { file: 'src/app/services/plumbing/gas-line/page.tsx', key: 'gas-line' },
  
  // Sewer & Drains
  'sewer-drains': { file: 'src/app/services/sewer-drains/page.tsx', key: 'sewer-drains' },
  'camera-inspection': { file: 'src/app/services/sewer-drains/camera-inspection/page.tsx', key: 'camera-inspection' },
  'catch-basins': { file: 'src/app/services/sewer-drains/catch-basins/page.tsx', key: 'catch-basins' },
  'drain-cleaning': { file: 'src/app/services/sewer-drains/drain-cleaning/page.tsx', key: 'drain-cleaning' },
  'hydrojetting': { file: 'src/app/services/sewer-drains/hydrojetting/page.tsx', key: 'hydrojetting' },
  'sewer-line': { file: 'src/app/services/sewer-drains/sewer-line/page.tsx', key: 'sewer-line' },
  'pipe-lining': { file: 'src/app/services/sewer-drains/pipe-lining/page.tsx', key: 'pipe-lining' },
  'toilet-repair': { file: 'src/app/services/sewer-drains/toilet-repair/page.tsx', key: 'toilet-repair' },
  'catch-basins': { file: 'src/app/services/sewer-drains/catch-basins/page.tsx', key: 'catch-basins' },
  'drain-cleaning': { file: 'src/app/services/sewer-drains/drain-cleaning/page.tsx', key: 'drain-cleaning' },
  'hydrojetting': { file: 'src/app/services/sewer-drains/hydrojetting/page.tsx', key: 'hydrojetting' },
  'sewer-line': { file: 'src/app/services/sewer-drains/sewer-line/page.tsx', key: 'sewer-line' },
  'toilet-repair': { file: 'src/app/services/sewer-drains/toilet-repair/page.tsx', key: 'toilet-repair' },
  
  // Commercial
  'commercial': { file: 'src/app/services/commercial/page.tsx', key: 'commercial' },
  'commercial-hvac': { file: 'src/app/services/commercial-hvac/page.tsx', key: 'commercial-hvac' },
  'commercial-plumbing': { file: 'src/app/services/commercial-plumbing/page.tsx', key: 'commercial-plumbing' },
  
  // Main
  'services': { file: 'src/app/services/page.tsx', key: 'services' },
  'heating': { file: 'src/app/services/hvac/heating/page.tsx', key: 'heating' },
  'cooling': { file: 'src/app/services/hvac/cooling/page.tsx', key: 'cooling' },
  'air-quality': { file: 'src/app/services/hvac/air-quality/page.tsx', key: 'air-quality' },
};

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(PICS_DIR, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const [key, url] of Object.entries(IMAGE_MAP)) {
    const filename = `${key}.jpg`;
    try {
      await downloadImage(IMAGE_MAP[key], filename);
    } catch (error) {
      console.error(`Failed to download ${key}:`, error.message);
    }
  }
  
  console.log('All downloads completed!');
}

async function updatePageImages() {
  console.log('Updating page files with backgroundImage props...');
  
  for (const [key, pageInfo] of Object.entries(SERVICE_PAGES)) {
    const filepath = path.join(__dirname, '..', pageInfo.file);
    const key = pageInfo.key;
    
    if (!IMAGE_MAP[key]) {
      console.log(`No image mapping for ${key}`);
      continue;
    }
    
    const filename = `${key}.jpg`;
    
    try {
      let content = await fsPromises.readFile(filepath, 'utf-8');
      
      // Check if already has backgroundImage
      if (content.includes('backgroundImage=')) {
        console.log(`Skipping ${key} - already has backgroundImage`);
        continue;
      }
      
      // Find the ServiceHero component and add backgroundImage
      const serviceHeroRegex = /<ServiceHero\s+([^>]*?)title=/;
      const match = content.match(serviceHeroRegex);
      
      if (match) {
        const beforeHero = content.substring(0, match.index + match[0].length);
        const afterHero = content.substring(match.index + match[0].length);
        
        // Check if backgroundImage already exists in the props
        const propsBeforeTitle = match[1];
        if (propsBeforeTitle.includes('backgroundImage=')) {
          console.log(`Skipping ${key} - already has backgroundImage`);
          continue;
        }
        
        // Add backgroundImage before title
        const newProps = propsBeforeTitle.replace(/title=/, `backgroundImage="/pics/${key}.jpg" `);
        const newContent = beforeHero + newProps + afterHero;
        
        await fsPromises.writeFile(filepath, newContent, 'utf-8');
        console.log(`Updated ${key} with backgroundImage`);
      } else {
        console.log(`Could not find ServiceHero in ${key}`);
      }
    } catch (error) {
      console.error(`Error updating ${key}:`, error.message);
    }
  }
  
  console.log('All page updates completed!');
}

async function main() {
  await downloadAllImages();
  await updatePageImages();
}

main().catch(console.error);