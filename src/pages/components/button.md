---
layout: component.njk
title: Buttons
permalink: /components/button/
description: Button component demos showing all variants and states.
tags: components
---

{{ description }}

## Component Preview

<div class="grid-row grid-gap">
{% for button in button.variants %}
  <div class="tablet:grid-col-4 margin-bottom-2">
    <p><strong>{{ button.label }}</strong></p>
    <button class="{{ button.classes }}" {% if button.disabled %}disabled{% endif %}>
      {{ button.label }}
    </button>
  </div>
{% endfor %}
</div>

## Example Code

## Guidance