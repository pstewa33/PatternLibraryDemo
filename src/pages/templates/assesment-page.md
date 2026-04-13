---
layout: template.njk
title: Assessment Page
permalink: library/templates/assessment-page/
tags: templates
prototype: 
  - name: Assessment Page
    link: "/pages/prototype/assessment/"
overview: The Assessments Page template is used to build pages that contain various subpages stored in tabs.
description: The Assessments Page template is used to build pages that contain various subpages stored in tabs.

specs:
    - name: Title
      type: h1
      authored: yes
      content: 80 characters max
      searchable: yes
    - name: Year
      type: date
      authored: yes
      content: format YYYY
      searchable: yes
    - name: About
      type: long text
      authored: yes
      content:
      searchable:   
    - name: Mandate
      type: long text
      authored: yes
    - name: Chapters
      type: list
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: Roles and Responsibilities
      type: list
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: Engagement Summary
      type: long text
      authored: yes
      content:
      searchable:
    - name: Opportunities
      type: list
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: Workshops
      type: list
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: FAQs
      type: list
      authored: yes
      content: multi-valued - see table below
      searchable: yes
    - name: Timeline
      type: list
      authored: yes
      content: multi-valued - see table below
      searchable: yes
specs2: 
  - name: Chapters Label
    type: short text
    authored: yes
    content: max 80 chars
  - name: Chapter Content
    type: long text
    authored: yes
    content:
specs3: 
  - name: Role Label
    type: short text
    authored: yes
    content: max 80 chars
  - name: Role Content
    type: long text
    authored: yes
    content:
specs4: 
  - name: Opportunity Link
    type: href
    authored: yes
    content: destination page url
specs5: 
  - name: Workshop Title
    type: href
    authored: yes
    content: destination page url
  - name: Date
    type: date
    authored: yes
    content: format Mon, dd
  - name: Time
    type: time
    authored: yes
    content: format hour AM/ PM - hour AM/PM
  - name: Summary
    type: long text
    authored: yes
    content:
  - name: Registration Link
    type: href
    authored: yes
    content: Registration
  - name: Agenda PDF Attachment
    type: href
    authored: yes
    content: Agenda
specs6: 
  - name: FAQ Label
    type: short text
    authored: yes
    content: max 80 chars
  - name: FAQ Content
    type: long text
    authored: yes
    content:
specs7: 
  - name: Date
    type: date
    authored: yes
    content:
  - name: Content
    type: long text
    authored: yes
    content:
---

### Chapters List
{% include "partials/library/content-specs.njk", content: specs2 %}

### Roles and Responsibilities List
{% include "partials/library/content-specs.njk", content: specs3 %}

### Opportunities
{% include "partials/library/content-specs.njk", content: specs4 %}

### Workshops
{% include "partials/library/content-specs.njk", content: specs5 %}

### FAQs List
{% include "partials/library/content-specs.njk", content: specs6 %}

### Timeline
{% include "partials/library/content-specs.njk", content: specs7 %}

## Functionality Specifications
This section show the details on how to build the page based on the author selections.

### Page Header
The page header includes the page title (h1)

### Tabs
9 tabs can fit on one full-width page
- Label
- Tab Content (opperates like a subpage and can include text, rich text, various components, etc.)

## Overview
An overview of the Assessment Report.
- Upcoming Events - Card Components
- Link to events landing page
- About Section - long text
- Previous Assessments Links - urls
- Sustained Resources Links - urls

## Mandate
- Rich Text

## Chapters
- Accordion - accordion label (short text), accordion content (rich text)

## Roles and Responisibilities
- Accordion - accordion label (short text), accordion content (rich text)

## Regions
- Summary - long text
- Media - map of the specified regions within the US
- Map Legend

## Engagement
- Rich Text

## Workshops
Collection Component:
- Date
- Time
- PDF Link
- Registration Link
- Agenda Link
- Description - short text

## FAQs
- Accordion - accordion label (short text), accordion content (rich text)

## Timeline
Process List Component
- Label - date (YYYY format)
- Unordered List