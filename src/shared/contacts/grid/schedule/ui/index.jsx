const Schedule = () => {
  return (
    <div className="col-xl-5 col-lg-6 col-md-10">
      <div className="working-hour-chart">
        <h2 className="chart-title">Режим работы</h2>
        <ul>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Понедельник
            </span>
            <span>8:00-16:00</span>
          </li>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Вторник
            </span>
            <span>8:00-16:00</span>
          </li>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Среда
            </span>
            <span>8:00-16:00</span>
          </li>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Четверг
            </span>
            <span>8:00-16:00</span>
          </li>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Пятница
            </span>
            <span>8:00-16:00</span>
          </li>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Суббота
            </span>
            <span>выходной</span>
          </li>
          <li>
            <span>
              <i className="far fa-angle-right" />
              Воскресенье
            </span>
            <span>выходной</span>
          </li>
          <li>
            <span>
              <i className="bi bi-stopwatch" />
              Обед
            </span>
            <span>12:00-13:00</span>
          </li>
          <li>
            <span>
              <i className="bi bi-battery-charging" />
              Тихий час
            </span>
            <span>14:00-16:00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Schedule };
