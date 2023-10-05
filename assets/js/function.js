var winmed = window.matchMedia("(max-width: 768px)");
if (winmed.matches) {
  $(".toForm").click(function () {
    $('html, body').animate({
      /*scrollTop: $("#formulario").offset().top*/
      scrollTop: $(".formBox").offset().top
    }, 3000);
  });

  $(".buttonHome").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 3000);
  });

  mapSelectMobile();
  setNameTipologias();
} else {
  $(".toForm").click(function () {
    $('html, body').animate({
      scrollTop: $(".section-eight").offset().top
    }, 3000);
  });

  $(".buttonHome").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 3000);
  });
  mapSelectDesktop();
}
//mapSelect();
hoverProyect();

function mapSelectDesktop() {
  var dosduendes = document.getElementById('dosduendes');
  var agave = document.getElementById('agave');
  var mapIframe = document.getElementById('map');
  var mapIframeDosduendes = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.1056446569991!2d-100.3716903!3d25.657283000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bde89b1c38bd%3A0x70bed107d6b86dfc!2sDosduendes%20Calzada!5e0!3m2!1ses!2smx!4v1694058297774!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  var mapIframeAgave = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5264311692376!2d-100.3485395!3d25.6538384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf88da24180b%3A0xb6433cc117a329e5!2sAGAVE%20Desarrollos!5e0!3m2!1ses!2smx!4v1693292994170!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  var pDosduendes = document.querySelector('#dosduendes h3');
  var h3Dosduendes = document.querySelector('#dosduendes p');
  var pAgave = document.querySelector('#agave p');
  var h3Agave = document.querySelector('#agave h3');

  mapIframe.innerHTML = mapIframeDosduendes;
  pDosduendes.classList.add('mapActiveP');
  h3Dosduendes.classList.add('mapActiveP');

  dosduendes.addEventListener('click', function (e) {
    e.preventDefault();
    mapIframe.innerHTML = mapIframeDosduendes;
    pDosduendes.classList.add('mapActiveP');
    h3Dosduendes.classList.add('mapActiveP');
    pAgave.classList.remove('mapActiveP');
    h3Agave.classList.remove('mapActiveP');
  });
  agave.addEventListener('click', function (e) {
    e.preventDefault();
    mapIframe.innerHTML = mapIframeAgave;
    pAgave.classList.add('mapActiveP');
    h3Agave.classList.add('mapActiveP');
    pDosduendes.classList.remove('mapActiveP');
    h3Dosduendes.classList.remove('mapActiveP');
  });
}

function mapSelectMobile() {
  var dosduendes = document.getElementById('dosduendes');
  var agave = document.getElementById('agave');
  var mapIframe = document.getElementById('mapMovile');
  var mapIframeDosduendes = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.1056446569991!2d-100.3716903!3d25.657283000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bde89b1c38bd%3A0x70bed107d6b86dfc!2sDosduendes%20Calzada!5e0!3m2!1ses!2smx!4v1694058297774!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  var mapIframeAgave = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5264311692376!2d-100.3485395!3d25.6538384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf88da24180b%3A0xb6433cc117a329e5!2sAGAVE%20Desarrollos!5e0!3m2!1ses!2smx!4v1693292994170!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  mapIframe.innerHTML = mapIframeDosduendes;

  var pDosduendes = document.querySelector('.content-mobile #dosduendes h3');
  var h3Dosduendes = document.querySelector('.content-mobile #dosduendes p');
  var pAgave = document.querySelector('.content-mobile #agave p');
  var h3Agave = document.querySelector('.content-mobile #agave h3');

  pDosduendes.classList.add('mapActiveP');
  h3Dosduendes.classList.add('mapActiveP');

  dosduendes.addEventListener('click', function (e) {
    e.preventDefault();
    mapIframe.innerHTML = mapIframeDosduendes;
    pDosduendes.classList.add('mapActiveP');
    h3Dosduendes.classList.add('mapActiveP');
    pAgave.classList.remove('mapActiveP');
    h3Agave.classList.remove('mapActiveP');
  });
  agave.addEventListener('click', function (e) {
    e.preventDefault();
    mapIframe.innerHTML = mapIframeAgave;
    pAgave.classList.add('mapActiveP');
    h3Agave.classList.add('mapActiveP');
    pDosduendes.classList.remove('mapActiveP');
    h3Dosduendes.classList.remove('mapActiveP');
  });
}

function hoverProyect() {
  var imgHoverLeft = document.querySelector('.img-hover-left');
  var imgHoverRight = document.querySelector('.img-hover-right');
  var leftInformation = document.querySelector('#leftInformation');
  var rigthInformation = document.querySelector('#rigthInformation');

  imgHoverLeft.addEventListener('mouseenter', (e) => {
    leftInformation.classList.add('visible');
    leftInformation.classList.remove('notVisible');
  });

  leftInformation.addEventListener('mouseleave', (e) => {
    leftInformation.classList.add('notVisible');
    leftInformation.classList.remove('visible');
  });

  imgHoverRight.addEventListener('mouseenter', (e) => {
    rigthInformation.classList.add('visible');
    rigthInformation.classList.remove('notVisible');
  });

  rigthInformation.addEventListener('mouseleave', (e) => {
    rigthInformation.classList.add('notVisible');
    rigthInformation.classList.remove('visible');
  });
}

function setNameTipologias() {
  var tipologiaA = document.getElementById("tipologiaA-tab");
  var tipologiaB = document.getElementById("tipologiaB-tab");
  var tipologiaC = document.getElementById("tipologiaC-tab");
  var tipologiaD = document.getElementById("tipologiaD-tab");
  var tipologiaE = document.getElementById("tipologiaE-tab");

  tipologiaA.innerHTML = "A" + '<br>' + "140 m2";
  tipologiaB.innerHTML = "B" + '<br>' + " 135 m2";
  tipologiaC.innerHTML = "C" + '<br>' + " 135 m2";
  tipologiaD.innerHTML = "D" + '<br>' + " 144 m2";
  tipologiaE.innerHTML = "E" + '<br>' + " 135 m2";
}
