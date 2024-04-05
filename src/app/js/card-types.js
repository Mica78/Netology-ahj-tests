const cardTypes = [
  {
    alias: "visa",
    lengths: [13, 16, 19],
    pattern: /^(?!4026|4175|4405|4508|4844|4913|4917)(4){1}\d*$/,
    logo: "@images/visa.svg",
  },
  {
    alias: "master",
    lengths: [16],
    pattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/,
    logo: "@images/mastercard-4.svg",
  },
  {
    alias: "amex",
    lengths: [15],
    pattern: /^3[47]\d*$/,
    logo: "@images/american-express-1.svg",
  },
  {
    alias: "diners_club",
    lengths: [14],
    pattern: /^3(0[0-5]|[689])\d*$/,
    logo: "@images/diners-club-international-3.svg",
  },
  {
    alias: "jcb",
    lengths: [16, 17, 18, 19],
    pattern: /^(2131|1800|35)\d*$/,
    logo: "@images/jcb-emblem-logo.svg",
  },
  {
    alias: "unionpay",
    lengths: [16, 17, 18, 19],
    pattern: /^62[0-5]\d*$/,
    logo: "@images/union-pay.svg",
  },
  {
    alias: "maestro",
    lengths: [16, 17, 18, 19],
    pattern: /^(5[0678]|6304|6390|6054|6271|67)\d*$/,
    logo: "@images/maestro-2.svg",
  },
  {
    alias: "mir",
    lengths: [16, 17, 18, 19],
    pattern: /^22\d*$/,
    logo: "@images/mir.svg",
  },
  {
    alias: "visa_electron",
    lengths: [16],
    pattern: /^(4026|4175|4405|4508|4844|4913|4917)\d*$/,
    logo: "@images/visa-electron.svg",
  },
];

export default cardTypes;
