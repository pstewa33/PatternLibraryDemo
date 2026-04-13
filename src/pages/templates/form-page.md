---
layout: template.njk
title: Form Page
permalink: library/templates/form-page/
tags: templates
prototype: 
  - name: Contact Us
    link: "/prototype/contact-form/"
overview: The Form template is used to collect information from the user.
description: The Form template is used to collect information from the user.

specs:
    - name: Title
      type: h1
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: Form
      type: form
      authored: yes
      content: multi-valued see table below
      searchable:   
specs2:
    - name: Form Title
      type: h4
      authored: yes
      content: 80 characters max
      searchable: yes
---

### Form Component
{% include "partials/library/content-specs.njk", content: specs2 %}

## Functionality Specifications
This section shows the details on how to build the page based on the author selections.

### Page Header
The page header includes the page title (h1)

## Form
The form includes a heading and multiple form controls
- Heading is an h4
- Form controls can include input, summary box, combobox, validation, buttons, etc.
---