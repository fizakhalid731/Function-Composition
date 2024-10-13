// Real World Examples

// Example Statement 1: Project manager Emailed, warning me not to miss the deadline again.

const email_from = () => `Project manager Emailed,`;

const email_waring = (email) => `${email} warning me not to miss the deadline again.`;

const sent_email = () =>email_waring(email_from());

console.log(sent_email());

// Example Statement 2: Chocolate cake ingredients is mixed, baked until soft, and covered with creamy chocolate."
const cake_ingredients = (cake) => `${cake} ingredients is mixed,`;

const cake_baked = (cake) => `${cake} baked until soft,`;

const decore = (cake) => `${cake} and covered with creamy chocolate.`;

const make_chocolate_cake = (cake) => decore(cake_baked(cake_ingredients(cake)));

console.log(make_chocolate_cake("Chocolate cake"));