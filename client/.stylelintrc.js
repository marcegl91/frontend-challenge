module.exports = {
  extends: ['stylelint-config-standard-scss'],
  "plugins": ["stylelint-order"],
  rules: {
    'property-no-unknown': [true, {
      ignoreProperties: ['composes']
    }],
    "order/properties-alphabetical-order": true
  }
};
