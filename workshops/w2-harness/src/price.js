const TAX_RATE = 0.08;

function parseAmount(str) {
  if (typeof str === 'number') return str;
  return Number(str);
}

function calcTotal(items) {
  const subtotal = items.reduce((sum, item) => {
    const quantity = item.quantity == null ? 1 : item.quantity;
    return sum + parseAmount(item.amount) * quantity;
  }, 0);

  return Math.round(subtotal * (1 + TAX_RATE));
}

module.exports = { calcTotal, parseAmount };
