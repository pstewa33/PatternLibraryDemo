---
layout: template.njk
title: Collections Landing
permalink: library/templates/collections-landing/
tags: templates
prototype: 
  - name: Collections Landing
    link: "/prototype/collections-landing-page/"
overview: The Collections Landing template is used for landing pages that utilize the collections component to display a list of content.
description: The Collections Landing template is used for landing pages that utilize the collections component to display a list of content.

specs:
    - name: Title
      type: h1
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: Summary
      type: text
      authored: yes
      content: 250 characters max
      searchable: yes
    - name: Hero
      type: image
      authored: yes
      content: ratio 4:1
      searchable:   
    - name: Body
      type: rich text
      authored: yes
    - name: Section
      type: collection component
      authored:
      content: multi-valued see table below
      searchable: yes
    - name: Filters
      type: Accordion
      authored: yes
      content: multi-valued see table below
      searchable: yes
    - name: Attachments
    - name: Pagination
      type: pagination
      authored:
      content: Bound Pagination
specs2:
    - name: Optional Image
      type: image
      authored: yes
      content: ratio 1:1
      searchable: yes    
    - name: Collection Heading
      type: h4
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: Collection Body
      type: text
      authored: yes
      content:
      searchable: yes
    - name: Collection Link
      type: href
      authored:
      content: Continue Reading
      searchable: yes
specs3:
    - name: Accordion Label
      type: button
      authored: yes
      content:
      searchable: yes    
    - name: Accordion Content
      type:
      authored: yes
      content:
      searchable: yes
---

### Collection Component
{% include "partials/library/content-specs.njk", content: specs2 %}

### Filter Component
{% include "partials/library/content-specs.njk", content: specs3 %}

## Functionality Specifications
This section shows the details on how to build the page based on the author selections.

### Page Header
The page header includes the page title (h1) and summary text.
- The summary has max-character count of 140

## Filters
The filters are represented by an accordion component. Each section of the accordion contains a label and corresponding filters.
- Accordion button label is an h4
- Filters

## Collection Section
The collection section includes a list of collection components that each represent a search result. Each component includes an optional image, basic information on the search result item, and a link to the item's corresponding page.
- Each collection component includes some combination of an optional image, a heading, a date, body copy, a url linking to typically a details page, and tags
- The image ratio is 1:1
- The heading is an h4
- Date format: Month DD, YYYY
- The body is made up of rich text

## Pagination
A bound pagination is used to navigate the search results