---
layout: template.njk
title: Basic Page
permalink: library/templates/basic-page/
tags: templates
prototype: 
  - name: Basic
    link: "/prototype/basic-page/"
overview: The basic page template is used for information or documentation.
description: |
  The basic page template is used for information or documentation. It is often the finial destination page in a user's journey.
details: |
  
  <h4> Guidance </h4>

  <h5> When to use the documentation page template </h5>
  <br>
  <p>Detailed information on a specific topic. Use a documentation page if you’re presenting detailed information on a specific topic or theme that has already been contextualized by a landing page. Some topics that can be nicely represented on this type of page include guides or how-tos, technical documentation, and program descriptions — in short, any subject that requires in-depth explanation.</p>

  <h4> Usability Guidance </h4>

  <p>Use a precise headline. A precise headline quickly communicates your page’s purpose. If the page content is especially complex, you may consider using a subheadline to further clarify its meaning.</p>

  <p>Write concise copy. Favor short sentences (and paragraphs) over longer ones, and use straightforward language, avoiding jargon. Remember, copy blocks don’t need to be long to be comprehensive.</p>

  <p>See component-specific guidance. For guidance on specific components, see the page for the individual components.</p>

specs:
- name: Title
  type: h1
  authored: yes
  content: 80 characters max
  searchable: yes
  source:
  notes: 
- name: Summary
  type: text
  authored: yes
  content: 250 characters max
  searchable: yes
- name: Body
  type: rich text
  authored: yes
  notes: allows h2, h3, h4, bullets, links, icons
---

## Functionality Specifications
This section show the details on how to build the page based on the author selections.

### Page Header
The page header includes the Title and Summary

### Page Body
The page body contains the body Copy with a max width of 80ex.