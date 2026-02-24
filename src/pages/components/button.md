---
layout: layouts/component.njk
title: Button
permalink: /components/button/
description: Buttons communicate actions users can take.
variants:
  - title: Default
    items:
      - label: Primary
        classes: usa-button
  - title: Color Variants
    items:
      - label: Secondary
        classes: usa-button--secondary
      - label: Accent Cool
        classes: usa-button--accent-cool
  - title: States
    items:
      - label: Disabled
        classes: usa-button
        disabled: true
---

{% for group in variants %}
## {{ group.title }}

<div class="variation-group">
  {% for btn in group.items %}

    {# Set variables explicitly (SAFE approach) #}
    {% set label = btn.label %}
    {% set classes = btn.classes %}
    {% set disabled = btn.disabled %}

    {% include "components/uswds/button.njk" %}

  {% endfor %}
</div>

{% endfor %}