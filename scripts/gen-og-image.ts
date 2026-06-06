/**
 * Generates public/images/og-default.jpg (the default social-share image) from
 * the source og_image.png in the project root. Resized to the canonical Open
 * Graph size (1200×630) and compressed so messaging apps (WhatsApp/Viber) will
 * render the preview.
 *
 *   npm run og
 */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'og_image.png');
const out = resolve(root, 'public', 'images', 'og-default.jpg');

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out);

const { size } = await sharp(out).metadata().then(async () => {
  const fs = await import('node:fs');
  return fs.statSync(out);
});
console.log(`✓ og-default.jpg generated (1200×630, ${(size / 1024).toFixed(0)} KB)`);
