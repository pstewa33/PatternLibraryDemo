<ul class="usa-card-group">
  {% for card in cards %}
    <li class="usa-card {{card.class | default('tablet:grid-col-4')}}">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h2 class="usa-card__heading">{{card.title}}</h2>
        </div>
      <div class="usa-card__body">
        <p>
          {{card.date }} <br/> {{card.time}}
        </p>
        <p> {{ card.download }} </p>
      </div>
      <div class="usa-card__footer">
        <a href="{{card.link}}" class="usa-button">{{card.label}}</a>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>