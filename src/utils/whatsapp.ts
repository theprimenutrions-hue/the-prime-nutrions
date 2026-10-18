import { CartItem, CustomerDetails, Product } from '../types';
import { STORE_INFO } from '../data/products';

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function buildWhatsAppOrderMessage(
  items: CartItem[],
  customer: CustomerDetails,
  subtotal: number,
  deliveryFee: number,
  total: number,
  orderId?: string
): string {
  const code = orderId || `TPN-${Math.floor(100000 + Math.random() * 900000)}`;

  let text = `🏋️ *NEW ORDER - THE PRIME NUTRITIONS* 🏋️\n`;
  text += `*Order ID:* #${code}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `👤 *CUSTOMER DETAILS*\n`;
  text += `• *Name:* ${customer.name || 'Valued Customer'}\n`;
  text += `• *Phone:* ${customer.phone || 'Provided via WhatsApp'}\n`;
  if (customer.address) {
    text += `• *Delivery Address:* ${customer.address}, ${customer.city || ''} ${customer.pincode ? '- ' + customer.pincode : ''}\n`;
  }
  if (customer.notes) {
    text += `• *Special Instructions:* ${customer.notes}\n`;
  }

  text += `\n📦 *ORDERED SUPPLEMENTS*\n`;
  items.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.quantity;
    text += `${index + 1}. *${item.product.name}*\n`;
    text += `   • Size: ${item.selectedSize}\n`;
    text += `   • Flavour: ${item.selectedFlavour}\n`;
    text += `   • Quantity: ${item.quantity} × ${formatCurrency(item.unitPrice)} = *${formatCurrency(itemTotal)}*\n`;
  });

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `💰 *PAYMENT & BILLING*\n`;
  text += `• Items Subtotal: ${formatCurrency(subtotal)}\n`;
  text += `• Shipping / Delivery: ${deliveryFee === 0 ? 'FREE (Store Offer)' : formatCurrency(deliveryFee)}\n`;
  text += `• *Total Amount Payable:* *${formatCurrency(total)}*\n`;
  text += `• *Payment Preference:* Cash on Delivery (COD) / Direct Confirmation\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Hi Pratham Chachra (@the_prime_nutrions), I would like to place this order with The Prime Nutritions. Please confirm product dispatch!`;

  return text;
}

export function getWhatsAppOrderLink(
  items: CartItem[],
  customer: CustomerDetails,
  subtotal: number,
  deliveryFee: number,
  total: number,
  orderId?: string
): string {
  const message = buildWhatsAppOrderMessage(items, customer, subtotal, deliveryFee, total, orderId);
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getProductDirectWhatsAppLink(
  product: Product,
  selectedFlavour: string,
  selectedSize: string
): string {
  const text =
    `Hello Pratham Chachra, I'm interested in ordering *${product.name}* (${selectedSize}, ${selectedFlavour}) priced at *${formatCurrency(product.price)}* from *The Prime Nutritions*. Could you confirm availability and delivery?`;
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getGeneralWhatsAppConsultationLink(topic?: string): string {
  const greeting = topic
    ? `Hello Pratham Chachra! I have a question regarding: "${topic}". Could you please guide me on the right supplement stack?`
    : `Hello Pratham Chachra! I want to consult regarding genuine gym supplements from *The Prime Nutritions*.`;
  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(greeting)}`;
}
