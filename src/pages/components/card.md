---
layout: component.njk
title: Card
permalink: library/components/card/
tags: components
component: components/uswds/card/card-default.html
variations:
  - name: Card Flag
    file: "components/uswds/card/card-flag.html"
description: Cards contain content and actions about a single subject.
settings:
  - name: $theme-card-border-color
    description: Stroke color of card.
  - name: $theme-card-border-radius
    description: Border radius of card.
  - name: $theme-card-border-width
    description: Stroke thickness of card.
  - name:  $theme-card-gap
    description: Gap between cards in a card group.
  - name:  $theme-card-flag-min-width
    description: Width at which flag cards change to horizontal layout.
  - name: $theme-card-flag-image-width
    description: Fixed image width in the card flag variant.
  - name: $theme-card-font-family
    description: Font family for card body.
  - name: $theme-card-header-typeset
    description: Family, size, and line height of the heading.
  - name: $theme-card-margin-bottom
    description: Bottom margin for card.
  - name: $theme-card-padding-perimeter
    description: Padding between card elements and card border.
  - name: $theme-card-padding-y
    description: Vertical padding between card elements.
variants:
  - name: .usa-card--flag
    description: Display in a horizontal (“flag”) orientation at a specified width ($theme-card-flag-min-width).
  - name: .usa-card--header-first
    description: Displays the header element before the media element.
  - name: .usa-card--media-right
    description: In combination with usa-card--flag, sets the media element on the right. (Flag cards display media on the left by default.)
  - name: .usa-card__media--inset
    description: Indents the media element so it doesn’t extend to the edge of the card.
  - name: .usa-card__body--exdent
    description: Extends the body element out over the card border. Useful for light-bordered cards.
  - name: .usa-card__footer--exdent
    description: Extends the footer element out over the card border. Useful for light-bordered cards.
  - name: .usa-card__header--exdent
    description: Extends the header element out over the card border. Useful for light-bordered cards.
  - name: .usa-card__media--exdent
    description: Extends the media element out over the card border. Useful for light-bordered cards.
---

### About the card component

A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

An individual card is typically a member of a collection of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.

Finally, a card is modular, which means you can vary the order of cards in a collection without destroying any individual card’s meaning.

### When to use the card component

- **Tabular data.** Don’t use a card as a substitute for a table row.
- **Simple calls to action.** Use a button instead.
- **Standalone content.** Consider an <a href="/components/side-navigation/">aside</a> or another standalone element.
- **Sequential, continuous text.** Cards should be self-contained and modular. If the reader is meant to read from card to card, consider a list or simple body text and headings.

### Usability guidance

- Make cards actionable. Since cards are used as a summary of more detailed information, any individual card should link out to that information.
- Don’t use the card component only for decoration. Use the card component for cards, not for any type of content that’s designed to have a border around it.
- Include non-redundant content. Don’t repeat images or content common to all or most cards in a collection. Repeated information (like using the same image for each card in a collection) makes it more difficult to distinguish cards from one another.
- Make sure images are properly sized. Cards often change size depending on the device. - Make sure you use an image that works well on any device at any size.
- Use simple styling. Avoid distracting skeumorphism. Don’t include any card styling that calls too much attention to the metaphor of a paper card, like folds, bent edges, or paper texture.

### Accessibility Guidance

- Use unordered lists and list items. Use a ul for a card group and an li for each card. - This formatting allows screen readers to enumerate the items in the card group and allows shortcuts between list items.
- Use the appropriate heading level for your page. Update heading level based on the content of your page to make sure card headings are in the correct, logical outline order.
- Use CSS to order the media element. Logically, the media element should follow the header element. Don’t re-organize the markup to reverse their order.


