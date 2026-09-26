const fs = require('fs');
const file = 'd:/about_me/WEB PORTFOLIO/src/pages/Work.tsx';
let content = fs.readFileSync(file, 'utf8');

const mapping = {
  'PETROCHAIN': ['/work/petrochain0.jpg', '/work/petrochain1.jpg', '/work/petrochain2.jpg', '/work/petrochain3.jpg', '/work/petrochain4.jpg', '/work/petrochain5.jpg', '/work/petrochain6.jpg', '/work/petrochain7.jpg'],
  'PFASMART': ['/work/getsmart.png', '/work/getsmart1.png'],
  'BYTESHIELD': ['/work/byteshiled1.jpg', '/work/byteshiled2.jpg', '/work/byteshiled3.jpg'],
  'AQUA SENTINEL': ['/work/aqua sentinel 1.jpg', '/work/aqua sentinel 2.jpg'],
  'SDG SENTIMENT': ['/work/sdgs 1.png', '/work/sdgs2.png'],
  'INFRASTRUCTURE LAB': ['/work/INFRASTRUCTURE LAB 1.jpg', '/work/INFRASTRUCTURE LAB2.jpg'],
  'COCOCARBONE': ['/work/cococarbone1.png', '/work/cococarbone2.png'],
  'SECURITY LABS': ['/work/securitylab1.png', '/work/security lab2.png'],
  '3D PROTOTYPING': ['/work/3dcadprorttyp1.jpg', '/work/3dcadprorttyp2.jpg'],
  'SALON APP': ['/work/salon we app.jpeg', '/work/salon web app2.jpeg'],
  'E-SURAT JTIK': ['/work/suratjttik.jpeg'],
  'SEKILAS TUGAS': ['/work/sekilastaask1.jpeg', '/work/seilastask2.jpeg'],
  'IMZY POS': ['/work/kasir imzy1.jpg', '/work/kasir imzy 2.jpg', '/work/kasir imzy 3.jpg'],
  'SUARA MATA': ['/work/SUARA MATA 0.jpeg', '/work/SUARA MATA1.jpeg'],
  'PLANT DISEASE APP': ['/work/plantdieseup.png'],
  'MANAJEMEN RUANG': ['/work/manajemeng raungan 1.jpeg']
};

for (const [title, images] of Object.entries(mapping)) {
  const imagesStr = JSON.stringify(images);
  // RegExp to match: <motion.div ... className="... group border..." ...> ... <h3...>TITLE</h3>
  // We match until we hit the h3 tag containing the title.
  const regex = new RegExp(`(<motion\\.div\\s+initial=[^>]+?\\n\\s*className=")([^"]*)(")([^>]*>)(\\s*(?:<div[^>]*>[^<]*<\\/div>\\s*)?<h3[^>]*>\\s*${title}\\s*<\\/h3>)`, 'g');
  
  content = content.replace(regex, (match, p1, p2, p3, p4, p5) => {
    let newClass = p2;
    if (!newClass.includes('cursor-pointer')) {
      newClass += ' cursor-pointer';
    }
    if (match.includes('onClick=')) return match;
    
    return p1 + newClass + p3 + " onClick={() => openModal(" + imagesStr + ")}" + p4 + p5;
  });
}

fs.writeFileSync(file, content);
console.log('Done!');
