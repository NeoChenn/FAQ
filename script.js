const buttons = document.querySelectorAll('.question');
const paragraphs = document.querySelectorAll('p');
const signs = document.querySelectorAll('.sign1, .sign2, .sign3, .sign4');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    toggleVisibility(paragraphs[index], signs[index]);
  });
});

function toggleVisibility(paragraph, sign) {
  if (paragraph.style.display === 'block') {
    paragraph.style.display = 'none';
    sign.src = 'images/icon-plus.svg';
  } else {
    paragraph.style.display = 'block';
    sign.src = 'images/icon-minus.svg';
  }
}