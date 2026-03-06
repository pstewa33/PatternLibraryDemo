module.exports = {
  variants: [
    {
      name: "Primary",
      label: "Primary button",
      classes: "usa-button"
    },
    {
      name: "Secondary",
      label: "Secondary button",
      classes: "usa-button usa-button--secondary"
    },
    {
      name: "Accent Cool",
      label: "Accent Cool",
      classes: "usa-button usa-button--accent-cool"
    },
    {
      name: "Accent Warm",
      label: "Accent Warm",
      classes: "usa-button usa-button--accent-warm"
    },
    {
      name: "Outline",
      label: "Outline",
      classes: "usa-button usa-button--outline"
    },
    {
      name: "Big",
      label: "Big button",
      classes: "usa-button usa-button--big"
    },
    {
      name: "Disabled",
      label: "Disabled button",
      classes: "usa-button",
      disabled: true
    }
  ],
  states: [
    { name: "Default", class: "" },
    { name: "Hover", class: "usa-button--hover" },
    { name: "Active", class: "usa-button--active" },
    { name: "Focus", class: "usa-focus" },
    { name: "Disabled", class: "disabled" }
  ]
};