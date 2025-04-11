document.getElementById("android").addEventListener("click", showAndroid);

function showAndroid() {
  console.log("test");
  document.getElementById("logo").src = "appleandroid-img/appleandroid-img/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = "Android Home";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("link").href = "https://www.android.com";
  document.getElementById("page").style.background = "#a4c93b";
  // ...style.fontFamily = "Ro"
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
}


document.getElementById("apple").addEventListener("click", showApple);

function showApple() {
    document.getElementById("logo").src = "appleandroid-img/appleandroid-img/Apple-Logo.jpg";
    document.getElementById("explore").innerHTML = "Apple Home";
    document.getElementById("link").href = "https://apple.com";
    document.getElementById("explore").style.background = "#b6bcca";
    document.getElementById("page").style.background = "#b6bcca";
    document.getElementById("apple").classList.add("active");
    document.getElementById("android").classList.remove("active");
}