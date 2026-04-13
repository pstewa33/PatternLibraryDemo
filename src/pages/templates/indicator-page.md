---
layout: template.njk
title: Indicator Page
permalink: library/templates/indicator-page/
tags: templates
prototype: 
  - name: Indicators
    link: "/prototype/indicators/"
overview: The Indicator template is an article-based template used to give users information on indicators.
description: The Indicator template is an article-based template used to give users information on indicators.

specs:
    - name: Title
      type: h1
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: Date
      type: date
      authored: yes
      content: date range format YYYY - YYYY
      searchable: yes
    - name: Headline
      type: h3
      authored: yes
      content: 80 char max
      searchable:   
    - name: Opening body
      type: rich text
      authored: yes
      content: recommended 150 word max
      notes: allows h2, h3, h4, bullets, links, icons
    - name: Indicator Section
      type: Media
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: Body
      type: rich text
      authored: yes
      notes: allows h2, h3, h4, bullets, links, icons
      searchable: yes
    - name: Related Resources
      type: link
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: Explore
      type: links
      authored: yes
      content: multi-valued - see table below
      searchable: yes
specs2: 
  - name: Indicator
    type: media
    authored: yes
    content:
  - name: Indicator Links
    type: href
    authored: yes
    content: View Metadata, Enlarge, Download
  - name: Contributer Links
    type: href
    authored: yes
    content: Contributer Name
  - name: Indicator Caption
    type: text
    authored: yes
    content: recommended 150 word max
specs3: 
  - name: List Title
    type: h2
    authored: yes
    content: Related Resources
  - name: List link
    type: href
    authored: yes
    content: distation page url
specs4: 
  - name: List Title
    type: h2
    authored: yes
    content: Explore USGCRP Indicators
  - name: List link
    type: href
    authored: yes
    content: distation page url
---

### Indicator
{% include "partials/library/content-specs.njk", content: specs2 %}

### Related list item
{% include "partials/library/content-specs.njk", content: specs3 %}

### Explore list item
{% include "partials/library/content-specs.njk", content: specs4 %}

## Functionality Specifications
This section show the details on how to build the page based on the author selections.

### Page Header
The page header includes the page title (h1), date, and summary text
  - The page title is an h1
  - The date shows the date range (Date Range: YYYY - YYYY)
  - The summary text has a max-width of 80ex

### Body
- Rich text (includes option for pull quotes)
- Max-width 80ex
- Typically includes rich text and optional images
- Allows h2, h3, h4, bullets, links, icons

### Indicator
This is where the indicator data table/ chart is shown. It includes the table/ chart, links, and a caption.
- Data table/ Chart
- Caption in italics with a max-width of 80ex
- Links include 'View Metadata', 'Enlarge', and 'Download'
- The indicator's contributers are also represented by links that direct to that contributer's seperate landing page.

## Related Resources
Authors can choose up to 9 resources to features from this series.
- Module title - h2 - content: "Related Resources"
- list - page title of related resource - link options to resource page
- url - page link of related resource

## Explore USGCRP Indicators
Authors can choose up to 9 indicators to features from this series.
- Module title - h2 - content: "Related Resources"
- list - page title of related resource - link options to resource page
- url - page link of related resource
---