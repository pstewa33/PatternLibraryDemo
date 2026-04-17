<div class="usa-accordion">
  {% for item in rolesAndResponsibilitiesList.roles %}
    {% set id = "role-" + loop.index %}
    <h4 class="usa-accordion__heading">
      <button
        class="usa-accordion__button"
        aria-expanded="false"
        aria-controls="{{ id }}"
      >
        {{ item.role }}
      </button>
    </h4>
    <div id="{{ id }}" class="usa-accordion__content usa-prose">
      {{ item.content | markdownify | safe }}
    </div>
  {% endfor %}
</div>