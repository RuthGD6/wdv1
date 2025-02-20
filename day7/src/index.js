// loop 100 times to print hello on your console

const variants = ["primary", "secondary", "success", "info"];

const getAlertColors = (color) => {
  return `
    \nbackground-color: ${color};
    \ncolor: ${color};
  `;
};

for (const variant of variants) {
  console.log(`&--${variant} { ${getAlertColors("red")} }`);
}