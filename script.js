let f = 0;

let figuritas = JSON.parse(localStorage.getItem('figuritas')) || [];
if (figuritas.length == 0) {
  for (let i = 0; i < 240; i++) {
    figuritas[i] = false;
  }
}

let botones = document.querySelector('.botones');
for (let i = 0; i < 240; i++) {
  let btn = document.createElement('button');
  btn.textContent = i + 1;
  if (figuritas[i] == true) btn.disabled = true;
  else f++;
  btn.onclick = handleClick;
  botones.append(btn);
}

let h2 = document.querySelector('h2');
h2.textContent = 'Faltan ' + f + ' figuritas';

function handleClick(e) {
  let n = +e.target.textContent;
  figuritas[n - 1] = true;
  e.target.disabled = true;
  localStorage.setItem('figuritas', JSON.stringify(figuritas));
}