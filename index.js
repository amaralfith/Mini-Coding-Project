var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) slideIndex = 1;
  // next
  else if (n < 1) slideIndex = x.length;
  // previous

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
// otomatis
setInterval(() => {
  plusDivs(1);
}, 1000 * 3);

function validateform() {
  const name = document.forms["form"]["nama"].value;
  const email = document.forms["form"]["email"].value;
  const send = document.forms["form"]["send"].value;

  // if (name == "" || email == "" || send == "") {
  //   alert("Tidak boleh ada yang kososng");
  //   return false;
  // }

  document.getElementById("sender-name").innerText = name;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-send").innerText = send;
  console.log(name);
  document.getElementById("form").reset();

  return false;
}

function hapus() {
  const element1 = document.getElementById("sender-name");
  const element2 = document.getElementById("sender-email");
  const element3 = document.getElementById("sender-send");

  element1.remove();
  element2.remove();
  element3.remove();

  return false;
}
