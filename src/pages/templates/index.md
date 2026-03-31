---
layout: base.njk
title: Templates Home
permalink: /library/templates/
---

<div class="grid-container-widescreen">
  <div class="grid-row grid-gap">
    {%- for template in collections.templates %}
      <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
        <div class="usa-card">
          <div class="usa-card__container">
            <div class="usa-card__header">
              <h4>{{ template.data.title }}</h4>
            </div>
            <div class="usa-card__body">
              <p>{{ template.data.description }}</p>
            </div>
            <div class="usa-card__footer">
              <a href="{{ template.url }}" class="usa-button">
                {{ template.data.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>