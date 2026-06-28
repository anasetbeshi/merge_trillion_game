// 🎮 التحكم في حركة اللاعب
document.addEventListener("keydown", (e) => {
  switch(e.key.toLowerCase()) {
    case 'w':
      console.log("تحرك للأمام");
      break;
    case 's':
      console.log("تراجع للخلف");
      break;
    case 'a':
      console.log("تحرك يسارًا");
      break;
    case 'd':
      console.log("تحرك يمينًا");
      break;
  }
});

// 🔫 إطلاق النار بالماوس مع صوت وتأثير بصري
document.body.addEventListener("click", () => {
  const effect = document.getElementById("shootEffect");
  effect.style.display = "block";
  setTimeout(() => effect.style.display = "none", 300);

  const sound = new Audio("gunshot.mp3"); // ضع ملف صوت هنا
  sound.play();

  // تقليل صحة العدو عند إطلاق النار
  damageEnemy(25);
});

// ❤️ نظام الصحة للأعداء
let enemyHealth = [90, 80, 70]; // صحة الأعداء
function damageEnemy(amount) {
  for (let i = 0; i < enemyHealth.length; i++) {
    if (enemyHealth[i] > 0) {
      enemyHealth[i] -= amount;
      if (enemyHealth[i] < 0) enemyHealth[i] = 0;
      updateEnemyUI();
      addCoins(50); // إضافة عملات عند إصابة العدو
      break;
    }
  }
}

function updateEnemyUI() {
  const bars = document.querySelectorAll(".panel:nth-child(3) .health-bar");
  bars.forEach((bar, index) => {
    bar.style.width = enemyHealth[index] + "px";
  });
}

// 💰 نظام العملات
let coins = 1350;
function addCoins(amount) {
  coins += amount;
  document.querySelector(".coins").textContent = "💰 " + coins;
}