const forms = document.querySelectorAll('form');
const inputFile = document.querySelectorAll('.upload-file__input');

inputFile.forEach(function (el) {
  let textSelector = document.querySelector('.upload-file__text');
  let fileList;

  el.addEventListener('change', function (e) {

    fileList = [];
    for (let i = 0; i < el.files.length; i++) {
      fileList.push(el.files[i]);
    }
    if (fileList.length === 1) {
      textSelector.textContent = `${fileList.length} file selected`;
    } else {
      textSelector.textContent = `${fileList.length} files selected`;
    }
  })
})