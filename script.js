
let btnp = Array.from(document.getElementsByClassName("plus"));
let btnm = Array.from (document.getElementsByClassName("minus"));
let del = Array.from (document.getElementsByClassName("bi-file-x"));
let like = Array.from (document.getElementsByClassName("bi-heart-fill"));
let card = Array.from(document.getElementsByClassName("card"));
let quan = Array.from (document.getElementsByClassName("qte"))
let price = document.querySelectorAll(".price")
let priceUn = Array.from(document.getElementsByClassName("priceUn"))
let total = document.getElementById("totale")


for (let i = 0; i < btnp.length; i++) {
  btnp[i].addEventListener("click", () => {
    btnp[i].previousElementSibling.innerHTML++;
  price[i].innerHTML = priceUn[i].innerHTML*quan[i].innerHTML
    
    totale()
  });
}
for (let i = 0; i < btnm.length; i++) {
  btnm[i].addEventListener("click", () => {
   quan[i].innerHTML==1 ? price[i].innerHTML=priceUn[i].innerHTML : price[i].innerHTML = price[i].innerHTML-priceUn[i].innerHTML
    quan[i].innerHTML == 1 ? (quan[i].innerHTML = 1) : quan[i].innerHTML--;
   totale()

  });
}

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", () => {
    card[i].remove(card);
    total.innerHTML = total.innerHTML - price[i].innerHTML
  });
}
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    like[i].style.color === "black"
      ? (like[i].style.color = "red")
      : (like[i].style.color = "black");
  });
}
function totale (){
  let quan=document.getElementsByClassName("qte")
 let priceUn=document.getElementsByClassName("priceUn")
 let sum=0
 for (let i = 0; i < price.length; i++) {
   sum=sum+ quan[i].innerHTML*priceUn[i].innerHTML
   
 }
 let totale=document.getElementById("totale")
 totale.innerHTML=sum
}
