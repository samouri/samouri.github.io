var css = `
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black; 
  cursor: zoom-out;
} 
.modal.show {
  display: block;
}

.modal-content {
  position: relative;
  margin: 0 auto;
  width: 90%;
  height: 100%;
}

.modal-img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.lightbox {
  cursor: zoom-in;
}
.no-scroll {
  overflow-y: hidden;
}
`;


function addLightboxStyle(doc) {
  var lightboxStyleTag = doc.createElement('style');
  lightboxStyleTag.id = 'lightbox';
  lightboxStyleTag.innerHTML = css;
  doc.head.appendChild(lightboxStyleTag); 
}

function openModal(e) {
  let img = e.target;
  var modal = document.querySelector('.modal');
  var modalImg = modal && modal.querySelector('.modal-img');
  if (!modal) {
    modal = document.createElement('div');
    var modalContent = document.createElement('div');
    modalImg = document.createElement('img');
    modalImg.src = img.src;

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalImg.classList.add('modal-img');

    modalContent.appendChild(modalImg);
    modal.appendChild(modalContent)
    document.body.appendChild(modal);
  }
  modalImg.src = img.src;
  modal.classList.add('show'); 
  document.body.classList.add('no-scroll');
  e.stopPropagation();

  function closeHandler(e) {
    // Don't pay attention to clicks within the modal.
    // if (e.target.closest('.modal')) {
    //   return;
    // }
    modal.classList.remove('show'); 
    document.body.classList.remove('no-scroll');
    window.removeEventListener('click', closeHandler);
  }
  window.addEventListener('click', closeHandler);
}

addLightboxStyle(document);
var images = document.querySelectorAll('.lightbox');
for (var i = 0; i < images.length; i++) {
  var photo = images[i];
  photo.addEventListener('click', openModal);
}