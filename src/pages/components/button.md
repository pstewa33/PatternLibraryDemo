---
layout: layouts/component.njk
title: Button Component
permalink: /components/button/
buttons:
  - label: Primary
    classes: usa-button
  - label: Secondary
    classes: usa-button--secondary
  - label: Disabled
    classes: usa-button--hover
    disabled: true
---

{% for btn in buttons %}
  {% include "components/uswds/button.njk" %}
{% endfor %}

## Code

{% for btn in buttons %}
<pre><code>
&lt;button class="{{ btn.classes | default('usa-button') }}" type="button" {% if btn.disabled %}disabled{% endif %}&gt;
  {{ btn.label | default("Click me") }}
&lt;/button&gt;
</code></pre>
{% endfor %}