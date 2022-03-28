const newAdviceButton = document.querySelector('button')
const adviceIdElement = document.getElementById('advice-id')
const adviceElement = document.getElementById('advice');

let adviceId
let advice

newAdviceButton.addEventListener('click', async () => {
  await fetchAdvice();
  displayAdvice()
})

const fetchAdvice = async () => {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()

    adviceId = data.slip.id;
    advice = data.slip.advice;
  } catch (error) {
    console.error(error);
  }
}

const displayAdvice = () => {
  adviceIdElement.textContent = adviceId;
  adviceElement.textContent = advice;
}
