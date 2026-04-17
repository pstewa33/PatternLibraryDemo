<div class="usa-accordion">
    {% for item in assessmentReport.faqs %}
        {% set id = "a-" + loop.index %}
        <h4 class="usa-accordion__heading">
            <button
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="{{ id }}"
            >
                {{ item.question }}
            </button>
        </h4>
        <div id="{{ id }}" class="usa-accordion__content usa-prose">
            <p>
                {{ item.answer }}
            </p>
        </div>
    {% endfor %}
</div>