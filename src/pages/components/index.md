---
layout: base.md
title: Components Home
permalink: /library/components/
hideFromSidebar: true
---

<div class="grid-container">
  <div class="grid-row">
    {% for component in collections.components %}
      <div class="grid-col-4">
        <div class="card">
          <h3>
            <a href="{{ component.url }}">
              {{ component.data.title }}
            </a>
          </h3>
          <p>{{ component.data.description }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>