<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <ul class="usa-collection">
    {% for item in assessmentReport.workshops %}
        <li class="usa-collection__item">
            <div class="usa-collection__calendar-date">
                <time datetime="{{item.workshop_date}}">
                <span class="usa-collection__calendar-date-month">{{item.month}}</span>
                <span class="usa-collection__calendar-date-day">{{item.day}}</span>
                </time>
            </div>
            <div class="usa-collection__body">
                <h3 class="usa-collection__heading">
                <a
                class="usa-link"
                href="">
                {{item.workshop_title}}
                </a>
                </h3>
                <ul class="usa-collection__meta" aria-label="More information">
                <li class="usa-collection__meta-item">
                    <p><time datetime="2020-01-11T12:00:00+01:00">{{item.time}}</time></p>
                    <a href="{{item.registration_link}}">Register</a>
                    <span> | </span>
                    <a href="{{item.agenda_pdf_attachment}}">Agenda</a>
                </li>
                </ul>
                <p class="usa-collection__description">
                {{item.summary}}
                </p>
            </div>
        </li>
    {%endfor%}
    </ul>
  </div>
</div>