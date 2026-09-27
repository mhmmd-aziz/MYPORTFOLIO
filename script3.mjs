import fs from 'fs';

const targetFile = 'd:/about_me/WEB PORTFOLIO/src/pages/Work.tsx';
let code = fs.readFileSync(targetFile, 'utf8');

// The regex will match the Image Preview block
const regex = /\s*\{\/\*\s*Image Preview\s*\*\/\}\s*<div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-\[100px\] flex justify-end items-start">\s*<img src="[^"]+" alt="Preview" className="w-full h-full object-cover" \/>\s*<\/div>/g;

let count = 0;
code = code.replace(regex, () => {
  count++;
  // We inject an Eye icon in the bottom right corner
  return `
            {/* View Icon */}
            <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-acid-lime group-hover:text-acid-lime transition-all duration-500 bg-near-black z-10">
              <Eye size={20} />
            </div>`;
});

// Make sure Eye is imported from lucide-react
if (count > 0 && !code.includes(' Eye')) {
  code = code.replace(/import {([^}]+)} from 'lucide-react'/, (match, imports) => {
    return `import {${imports}, Eye } from 'lucide-react'`;
  });
}

fs.writeFileSync(targetFile, code);
console.log('Removed ' + count + ' Image Previews and added Eye icons.');
