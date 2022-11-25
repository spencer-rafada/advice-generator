const fetchAdvice = async () => {
  const adviceSlip = await fetch("https://api.adviceslip.com/advice").then(
    (response) => response.json()
  );
  console.log(adviceSlip.slip);
  return adviceSlip.slip;
};

const loadData = async () => {
  const advice = await fetchAdvice();
  console.log(advice);
  const advice_number = document.getElementById("advice-title__number");
  advice_number.innerHTML = `#${advice.id}`;
  console.log(advice.id);
  const advice_message = document.getElementById("advice__message");
  advice_message.innerHTML = advice.advice;
};
