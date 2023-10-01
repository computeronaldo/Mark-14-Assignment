const initialPrice = document.getElementById("initial-price");
const stocksQuantity = document.getElementById("quantity");
const currentPrice = document.getElementById("current-price");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result");

const profitAndLossCalculator = (initial, quantity, current) => {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;
    resultBox.innerText = `Hey the loss is ${loss}, and the percent is ${lossPercentage}`;
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;
    resultBox.innerText = `Hey the profit is ${profit}, and the percent is ${profitPercentage}`;
  } else {
    resultBox.innerText = `No pain, no gain and no gain, no pain.`;
  }
};

const submitHandler = () => {
  const initVal = Number(initialPrice.value);
  const qty = Number(stocksQuantity.value);
  const currVal = Number(currentPrice.value);

  profitAndLossCalculator(initVal, qty, currVal);
};

submitBtn.addEventListener("click", submitHandler);
