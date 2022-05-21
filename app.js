const mail = document.querySelector('#userEmail');
// console.log(mail);
const btnSubmit = document.querySelector('#btnEmail');
// btnSubmit.addEventListener((e) => console.log(mail.value));

function mailSubmit(e) {
  //   e.preventDefault;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (mail.value.match(pattern) && mail.value !== '') {
    mail.classList.add('valid');
    mail.classList.remove('invalid');
    // console.log(mail.value);
    alert('Ваша заявка успешно отправлена');
  } else if (mail.value === '') {
    mail.classList.remove('invalid');
    mail.classList.remove('invalid');
    alert('форма не заполнена ');
  } else {
    mail.classList.remove('invalid');
    mail.classList.add('invalid');
    alert('неверный формат ');
  }
  return;
}
//простая  проверка, что форма не пустая и соотвествует формату почты
