---
layout: base.njk
title: Components Home
permalink: /library/components/
hideFromSidebar: true
---

<div class="grid-container-widescreen">
  <div class="grid-row grid-gap">
    {%- for component in collections.components %}
      <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
        <div class="usa-card">
          <div class="usa-card__container">
            <div class="usa-card__header">
              <h4>{{ component.data.title }}</h4>
            </div>
            <div class="usa-card__body">
              <p>{{ component.data.description }}</p>
            </div>
            <div class="usa-card__footer">
              <a href="{{ component.url }}" class="usa-button">
                {{ component.data.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>