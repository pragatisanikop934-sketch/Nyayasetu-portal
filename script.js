const details = {
  constitutional: {
    title: "Constitutional rights",
    body: `<p>The Constitution of India protects important rights, including equality before the law, certain freedoms, protection of life and personal liberty, and access to constitutional remedies.</p><ul><li>Read the Constitution and reliable explanations from official sources.</li><li>If you believe a right has been violated, write down what happened and keep relevant records.</li><li>Seek advice from a qualified lawyer or legal services authority about your specific situation.</li></ul>`
  },
  women: {
    title: "Women's rights",
    body: `<p>Indian law provides protections relating to violence, harassment, workplace safety, family matters and equal treatment. The correct process depends on the circumstances.</p><ul><li>If there is immediate danger, call 112.</li><li>Preserve relevant messages, dates and other records if safe to do so.</li><li>Contact an authorised support service, police station or legal services authority for guidance.</li></ul>`
  },
  children: {
    title: "Children's rights",
    body: `<p>Children are entitled to protections under Indian law, including safeguards against abuse and exploitation and rights relating to education and care.</p><ul><li>If a child is in immediate danger, contact emergency services.</li><li>Child Helpline 1098 is an established child assistance number; verify current access through official government channels.</li><li>Do not publish a child's identity or private details online.</li></ul>`
  },
  consumer: {
    title: "Consumer rights",
    body: `<p>Consumer protection law provides remedies for issues such as defective goods, deficient services and unfair trade practices.</p><ul><li>Keep bills, order confirmations, warranty details and communications.</li><li>Write to the seller or service provider and keep a copy.</li><li>For grievance guidance, use the National Consumer Helpline at consumerhelpline.gov.in.</li></ul>`
  },
  workers: {
    title: "Worker rights",
    body: `<p>Workplace rights can include protections concerning wages, working conditions, safety and social security. The applicable rules may depend on the type of work and employment arrangement.</p><ul><li>Keep appointment letters, wage slips, attendance and written communications.</li><li>Ask the relevant state or central labour department about the correct complaint process.</li><li>Seek legal advice before signing documents you do not understand.</li></ul>`
  },
  digital: {
    title: "Digital safety and cybercrime",
    body: `<p>If you experience online fraud, account compromise, cyber harassment or another cyber incident, act promptly and use official reporting channels.</p><ul><li>For financial fraud, immediately contact your bank or payment provider.</li><li>In India, call 1930 promptly for reporting financial cyber fraud and use cybercrime.gov.in.</li><li>Save transaction IDs, screenshots and relevant messages. Do not share OTPs or passwords.</li></ul>`
  }
};

const dialog = document.getElementById("infoDialog");
document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => {
    const item = details[button.dataset.open];
    if (!item) return;
    document.getElementById("dialogTitle").textContent = item.title;
    document.getElementById("dialogBody").innerHTML = item.body;
    dialog.showModal();
  });
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const search = document.getElementById("siteSearch");
const cards = [...document.querySelectorAll(".searchable")];
const noResults = document.getElementById("noResults");
const status = document.getElementById("searchStatus");
function filterCards() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const text = (card.innerText + " " + (card.dataset.keywords || "")).toLowerCase();
    const match = !query || text.includes(query);
    card.hidden = !match;
    if (match) visible++;
  });
  noResults.hidden = visible !== 0;
  status.textContent = query ? `${visible} matching section${visible === 1 ? "" : "s"} found.` : "";
}
search.addEventListener("input", filterCards);
document.getElementById("clearSearch").addEventListener("click", () => {
  search.value = "";
  filterCards();
  search.focus();
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
