export function formatPrice(amount) {
  return `${amount.toFixed(2)} د.إ`;
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// دالة للتحريك التدريجي للعناصر
export function animateDelay(index, delay = 100) {
  return { transitionDelay: `${index * delay}ms` };
}
