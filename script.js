function order(product, btn){
  let box = btn.parentElement;
  let name = box.querySelector(".name").value;
  let phone = box.querySelector(".phone").value;
  let id = box.querySelector(".id").value;

  if(name=="" || phone=="" || id.length!=6){
    alert("အချက်အလက် ပြည့်စုံအောင်ဖြည့်ပါ");
    return;
  }

  let msg = `
🛒 New Order
📦 Product: ${product}
👤 Name: ${name}
📞 Phone: ${phone}
🆔 ID: ${id}
`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg
    })
  }).then(()=>{
    alert("Order တင်ပြီးပါပြီ ✅");
    btn.disabled = true;
  });
}
// Receipt တင်မှ Order ဖွင့်ပေး
document.querySelectorAll(".receipt").forEach(input => {
  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      input.parentElement.querySelector("button").disabled = false;
    }
  });
});
function order(product, btn){
  let box = btn.parentElement;
  let name = box.querySelector(".name").value;
  let phone = box.querySelector(".phone").value;
  let id = box.querySelector(".id").value;

  if(name=="" || phone=="" || id.length!=6){
    alert("အချက်အလက် ပြည့်စုံအောင်ဖြည့်ပါ");
    return;
  }

  let msg = `
🛒 New Order
📦 Product: ${product}
👤 Name: ${name}
📞 Phone: ${phone}
🆔 ID: ${id}
`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg
    })
  }).then(()=>{
    alert("Order တင်ပြီးပါပြီ ✅");
    btn.disabled = true;
  });
}
