export function formatPrice(amount) {
  return `${amount.toFixed(2)} د.إ`;
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
