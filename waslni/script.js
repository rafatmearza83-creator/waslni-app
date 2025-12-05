// دور المستخدم في role.html
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role');
  const roleContent = document.getElementById('roleContent');
  
  if (roleContent) {
    if(role === 'driver') {
      roleContent.innerHTML = `<p>مرحبًا بك سائق! اضغط للذهاب لصفحة السائق.</p>
      <button onclick="location.href='driver.html'">اذهب لصفحة السائق</button>`;
    } else if(role === 'customer') {
      roleContent.innerHTML = `<p>مرحبًا بك زبون! اضغط للذهاب لصفحة الزبون.</p>
      <button onclick="location.href='customer.html'">اذهب لصفحة الزبون</button>`;
    } else {
      roleContent.innerHTML = `<p>الدور غير معروف</p>`;
    }
  }
}

// زر العودة
function goBack() {
  window.history.back();
}
