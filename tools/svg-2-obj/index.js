let fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');

fs.readdir('./svg-2-obj/svg', function (err, files) {
  const icons = {};
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let filePath = path.join('./svg-2-obj/svg', file);
    let fileName = file.split('.')[0];
    let fileExt = file.split('.')[1];

    if (fileExt === 'svg') {
      let buffer = fs.readFileSync(filePath);
      const fileContent = buffer.toString();

      let dom = new jsdom.JSDOM(fileContent);
      let svg = dom.window.document.querySelector('svg');
      let viewBox = svg.getAttribute('viewBox');
      var paths = [];
      let pathsHTML = dom.window.document.querySelectorAll('path');

      pathsHTML.forEach(function (element) {
        let pathD = element.getAttribute('d');
        if (pathD && pathD !== '') {
          paths.push(pathD);
        }
      });

      icons[fileName] = {
        path: paths,
        viewBox: viewBox,
      };
    }
  }

  let iconObj = JSON.stringify(icons);

  // template for icons.tsx
  // export const ICONS: TIcon = iconObj as const

  fs.writeFileSync(
    '../constants/icons.constant.ts',
    `export const ICONS = ${iconObj} as const; 
     export type TIcons = typeof ICONS;
     export const ICONS_OPTIONS = Object.keys(ICONS) as Array<keyof TIcons>;
    `,
  );
});
