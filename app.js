const tabs = [...document.querySelectorAll('.tab')];
const panels = [...document.querySelectorAll('.solution-panel')];
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => { const active = item === tab; item.classList.toggle('active', active); item.setAttribute('aria-selected', String(active)); });
  panels.forEach((panel) => { const active = panel.id === tab.dataset.panel; panel.classList.toggle('active', active); panel.hidden = !active; });
}));
const slider = document.querySelector('#saveRate');
const rateOut = document.querySelector('#rateOut');
const amountOut = document.querySelector('#saveAmount');
function updateWhatIf() {
  const rate = Number(slider.value);
  const amount = Math.round(170799 * rate / 100);
  rateOut.value = `${rate}%`;
  amountOut.textContent = `₹${amount.toLocaleString('en-IN')} cr`;
}
slider.addEventListener('input', updateWhatIf);
updateWhatIf();
