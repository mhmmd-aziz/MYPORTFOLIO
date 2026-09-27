import fs from 'fs';

const targetFile = 'd:/about_me/WEB PORTFOLIO/src/pages/Work.tsx';
let code = fs.readFileSync(targetFile, 'utf8');

const regex = /<motion\.div\s+initial={[^}]*}\s+whileInView={[^}]*}\s+viewport={[^}]*}\s+transition={[^}]*}\s+className=\"group[^>]+onClick={\(\) => openModal\(\[([^\]]+)\]\)}[^>]*>([\s\S]*?)<\/motion\.div>/g;

code = code.replace(regex, (match, imagesStr, innerContent) => {
  let firstImg = imagesStr.split(',')[0].trim().replace(/['"`]/g, '');
  if (!firstImg) return match;

  const bgImageDiv = `
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="${firstImg}" alt="Preview" className="w-full h-full object-cover" />
            </div>`;
  
  const innerStart = match.indexOf(innerContent);
  if (innerStart !== -1) {
    return match.slice(0, innerStart) + bgImageDiv + match.slice(innerStart);
  }
  return match;
});

fs.writeFileSync(targetFile, code);
console.log('Work.tsx updated successfully.');
