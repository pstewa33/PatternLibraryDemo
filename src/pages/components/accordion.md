---
layout: component.njk
title: Accordion
permalink: library/components/accordion/
tags: components
component: components/uswds/accordion/accordion-borderless.html
variations:
  - name: Bordered
    file: components/uswds/accordion/accordion-bordered.html
  - name: Multiselect
    file: components/uswds/accordion/accordion-multiselect.html
description: An accordion is a list of headers that hide or reveal additional content when selected.
settings:
  - name: $theme-accordion-background-color
    description: Background color of the accordion content.
  - name: $theme-accordion-border-width
    description: Border width of the bordered accordion.
  - name: $theme-accordion-border-color
    description: Border color of the bordered accordion.
  - name: $theme-accordion-button-background-color
    description: Background color of the accordion button.
  - name: $theme-accordion-font-family
    description: Font family of the accordion.
variants:
  - name: .usa-accordion--bordered
    description: Display a border around accordion content.
---

### When to use the accordion component 

- If users will only need a few specific pieces of content within a page.
- If you have only a small space to display a lot of content.

### When to consider something else

**If users need to see most or all of the information on a page.** Use well-formatted text instead.

**If there is not enough content to warrant condensing.** Accordions increase cognitive load and interaction cost because users have to make decisions about what headers to click on.

### Usability Guidance

- Make the entire header selectable. Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
- Give interactive elements enough space. Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)

### Accessibility Guidance

- Code header areas in the accordion as buttons. Using a <button type="button"> assures accordions are usable with both screen readers and keyboards.
- Use meaningful expansion button labels. Aim for informative labels like “Explore federal compliance checklists” rather than vague ones like “Click here.”
- Use aria-controls to associate an accordion button with its related content. Connect an accordion button control with its appropriate content region by referencing the controlled element’s id in the button’s aria-controls attribute.
- Use unique ids. Each button has a unique name, aria-controls="[id]", that associates the control with the appropriate region by referencing the controlled element’s id.
- Accordions use javascript to set the hidden values of their content areas. Each content area will have its hidden attribute set by the component, depending on its corresponding button’s aria-expanded attribute. To ensure your content is accessible in the event that the JavaScript does not load or is disabled, you should not manually set hidden on any of your content areas.
- You do not need to add text alternatives for the collapsed and expanded accordion states. These states are set programmatically with JavaScript.