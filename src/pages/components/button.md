---
layout: component.md
title: Buttons
permalink: /components/button/
description: Button component demos showing all variants and states.
---

# Button Demos

Here are interactive previews of button variants:

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