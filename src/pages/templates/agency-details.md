---
layout: template.njk
title: Agency Details
permalink: library/templates/agency-details/
tags: templates
prototype:
  - name: Agency Details Page Template
    link: /prototype/agency-details
overview: The Agency Details Page template is a subpage used to provide additional information on a topic.
description: The Agency Details Page template is used for providing additional information on a topic or item.
specs:
    - name: Title
      type: h1
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: slug
      type: short text
      authored: yes
      content:
      searchable:
    - name: Body
      type: rich text
      authored: yes
      notes: allows h2, h3, h4, bullets, link, icons
    - name: Media
      type: image
      authored: yes
      content: ratio 1:1
      searchable:
    - name: Related Resources
      type: list
      authored:
      content: multi-valued - see table below
      searchable: yes
specs2: 
  - name: List Title
    type: h2
    authored: yes
    content:
  - name: List link
    type: href
    authored: yes
    content: distation page url
---

### Related list item
{% include "partials/library/content-specs.html" content=page.specs2 %} 

## Functionality Specifications
This section show the details on how to build the page based on the author selections.

### Page Header
The page header includes the page title (h1)

### Body
- Rich text (includes option for pull quotes)
- Max-width 80ex
- Typically includes rich text and optional images
- Allows h2, h3, h4, bullets, links, icons

## Related Resources
Authors can choose up to 9 resources to features from this series.
- Module title - h2 - content: "Related Resources"
- list - page title of related resource - link options to resource page
- url - page link of related resource