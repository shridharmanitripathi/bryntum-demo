StartTest(function (t) {
  var scheduler;
  t.it('Should not be able to add a new match between same teams', function (t) {
    t.chain({
      contextmenu: '.b-sch-timeaxis-cell',
      offset: [518, 38]
    }, function (next) {
      scheduler = bryntum.fromElement(t.query('.b-scheduler')[0], 'scheduler');
      t.wontFire(scheduler.eventStore, 'add');
      next();
    }, {
      click: '.b-menuitem:contains(Add)'
    }, {
      click: 'button:contains(Save)'
    }, {
      click: 'button:contains(Cancel)'
    });
  });
  t.it('Should be able to add a new match', function (t) {
    t.chain({
      contextmenu: '[data-index="1"] .b-sch-timeaxis-cell',
      offset: [518, 38]
    }, function (next) {
      scheduler = bryntum.fromElement(t.query('.b-scheduler')[0], 'scheduler');
      t.firesOnce(scheduler.eventStore, 'add');
      next();
    }, {
      click: '.b-menuitem:contains(Add)'
    }, {
      click: '#save'
    });
  });
});