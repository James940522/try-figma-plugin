const { root, currentPage, showUI } = figma;

console.log('Root', root);

console.log('Current Page', currentPage);

// ui.html 파일을 읽어서 내가 지정한 ui 보여주기
showUI(__html__);
