<div class="footer"></div>
<!-- begin Modal callback  -->
<div class="modal fade" id="callback" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title text-center">Заполните форму</h4>
        <p class="modal-description text-center">И мы обязательно перезвоним в ближйшее время</p>
      </div>
      <div class="modal-body">
          <form id="form-callback" action="index.php?route=mail/mail" method="POST">
          <input class="form-control" type="text" name="name" placeholder="Введите имя" />
          <input class="form-control" type="text" name="phone" placeholder="Введите телефон" />
          <button class="btn btn-submit" type="submit">Позвоните мне</button>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- end Modal callback  -->
<!-- begin Modal searching-car  -->
<div class="modal fade" id="searching-car" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title text-center">Найдите товар для своего автомобиля</h4>
      </div>
      <div class="modal-body">
        <form id="form-searching-car" action="">
          <div class="col-xs-3 make text-center">
            <img src="image/catalog/make.png" />
            <select class="form-control" name="make">
              <option value="">Выбор производителя</option>
            </select>
          </div>
          <div class="col-xs-3 year text-center">
            <img src="image/catalog/year.png" />
            <select class="form-control" name="yaer">
              <option value="">Выбор года</option>
            </select>
          </div>
          <div class="col-xs-3 model text-center">
            <img src="image/catalog/model.png" />
            <select class="form-control" name="model">
              <option value="">Выбор модели</option>
            </select>
          </div>
          <div class="col-xs-3">
            <button class="btn btn-submit" type="submit">Смотреть товар</button>
          </div>
          <div class="clearfix"></div>
        </form>

      </div>
    </div>
  </div>
</div>
<!-- end Modal searching-car  -->
</body>
</html>