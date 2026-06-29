// ── Calculator ──
const slider = document.getElementById('kw-slider');
const calcKw = document.getElementById('calc-kw');
const calcBar = document.getElementById('calc-bar');
const calcMonthly = document.getElementById('calc-monthly');
const calcAnnual = document.getElementById('calc-annual');

function formatINR(n) {
  return n.toLocaleString('en-IN');
}

function updateCalc() {
  const kw = parseInt(slider.value) || 1;
  calcKw.textContent = kw;
  calcBar.style.width = Math.min(100, kw) + '%';
  calcMonthly.textContent = formatINR(kw * 1000);
  calcAnnual.textContent  = formatINR(kw * 12 * 1000);
}

slider.addEventListener('input', updateCalc);
updateCalc();

// ── FAQ ──
const faqs = [
  {
    q: 'How do I get paid?',
    a: 'Earnings are calculated at ₹1000 per kW of the sanctioned system capacity in the signed project agreement. Payment is processed within the agreed cycle, directly to your registered bank account.'
  },
  {
    q: 'Do I need to know anything about solar to join?',
    a: 'No. We provide a simple one-page explainer and WhatsApp-ready message templates. Your job is to identify the lead and make the introduction. We handle every technical conversation.'
  },
  {
    q: 'What counts as a valid referral?',
    a: 'Any residential, commercial, or industrial property owner in India who is genuinely interested in a rooftop solar installation and has not already been approached by our team.'
  },
  {
    q: 'Is there a limit to how many leads I can refer?',
    a: 'None. There is no cap on referrals or earnings. The more deals you bring, the more you earn.'
  },
  {
    q: 'How do I track my referrals?',
    a: 'You get access to a referral dashboard showing the status of every lead — from initial contact through to deal closure.'
  },
  {
    q: 'What if my lead doesn\'t convert?',
    a: 'Earnings are on closed deals only. We\'ll keep you updated at every stage, and a lead that doesn\'t convert today may convert next quarter.'
  },
  {
    q: 'Can a CA or professional firm refer multiple clients?',
    a: 'Absolutely. A CA practice managing 40+ business clients could realistically generate significant recurring referral income every financial year.'
  },
];

const faqList = document.getElementById('faq-list');
let openIndex = null;

function renderFaq() {
  faqList.innerHTML = '';
  faqs.forEach((f, i) => {
    const isOpen = openIndex === i;
    const item = document.createElement('div');
    item.style.cssText = 'background:white; border-radius:18px; margin-bottom:14px; border:1.5px solid rgba(82,183,136,.14); overflow:hidden; transition:border .2s';

    const btn = document.createElement('button');
    btn.className = 'faq-btn';
    btn.style.cssText = 'width:100%; text-align:left; background:none; border:none; padding:22px 28px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:16px; transition:background .2s';
    btn.innerHTML = `
      <span style="font-weight:700; font-size:15.5px; color:#132E21; line-height:1.45; text-wrap:pretty">${f.q}</span>
      <div style="width:32px; height:32px; border-radius:50%; background:rgba(82,183,136,.1); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:20px; color:#2D6A4F; font-weight:300; line-height:1; font-family:'DM Serif Display',serif; transition:background .2s">${isOpen ? '−' : '+'}</div>
    `;
    btn.addEventListener('click', () => {
      openIndex = openIndex === i ? null : i;
      renderFaq();
    });

    const answer = document.createElement('div');
    answer.style.cssText = isOpen
      ? 'padding:0 28px 24px; color:#4A7A5A; font-size:15px; line-height:1.75; border-top:1px solid rgba(82,183,136,.1)'
      : 'display:none';
    answer.innerHTML = `<div style="padding-top:18px">${f.a}</div>`;

    item.appendChild(btn);
    item.appendChild(answer);
    faqList.appendChild(item);
  });
}

renderFaq();

// ── Form ──
function handleFormSubmit(e) {
  e.preventDefault();
  document.getElementById('form-container').classList.add('submitted');
}
