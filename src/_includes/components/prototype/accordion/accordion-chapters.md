<div class="usa-accordion">
  {% for item in chaptersList.chapters %}
    <h4 class="usa-accordion__heading">
      <button
        class="usa-accordion__button"
        aria-expanded="false"
        aria-controls="c-a{{ loop.index }}"
      >
        {{ item.chapter }}
      </button>
    </h4>

    <div id="c-a{{ loop.index }}" class="usa-accordion__content usa-prose">
      <p>{{ item.content }}</p>
    </div>
  {% endfor %}
</div>