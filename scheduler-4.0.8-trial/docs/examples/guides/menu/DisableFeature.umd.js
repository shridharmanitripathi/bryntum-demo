var scheduler = new Scheduler({
  appendTo: targetElement,
  autoHeight: true,
  rowHeight: 40,
  barMargin: 4,
  flex: 1,
  tbar: [{
    text: 'Disable Event menu',
    toggleable: true,
    pressed: true,
    icon: 'b-fa b-fa-square',
    pressedIcon: 'b-fa b-fa-check-square',
    color: 'b-blue b-raised',
    onToggle: function onToggle(_ref) {
      var pressed = _ref.pressed;
      scheduler.features.eventMenu.disabled = pressed;
    }
  }, {
    text: 'Disable Schedule menu',
    style: 'margin-left: 10px',
    toggleable: true,
    pressed: true,
    icon: 'b-fa b-fa-square',
    pressedIcon: 'b-fa b-fa-check-square',
    color: 'b-blue b-raised',
    onToggle: function onToggle(_ref2) {
      var pressed = _ref2.pressed;
      scheduler.features.scheduleMenu.disabled = pressed;
    }
  }, {
    text: 'Disable TimeAxis Header menu',
    style: 'margin-left: 10px',
    toggleable: true,
    pressed: true,
    icon: 'b-fa b-fa-square',
    pressedIcon: 'b-fa b-fa-check-square',
    color: 'b-blue b-raised',
    onToggle: function onToggle(_ref3) {
      var pressed = _ref3.pressed;
      scheduler.features.timeAxisHeaderMenu.disabled = pressed;
    }
  }],
  startDate: new Date(2018, 4, 6),
  endDate: new Date(2018, 4, 13),
  viewPreset: {
    base: 'dayAndWeek',
    timeColumnWidth: 30
  },
  columns: [{
    field: 'name',
    text: 'Name',
    width: 100
  }],
  resources: [{
    id: 1,
    name: 'Bernard'
  }, {
    id: 2,
    name: 'Bianca'
  }],
  events: [{
    id: 1,
    resourceId: 1,
    name: 'Right click me, the area behind me, and the header of the timeaxis',
    startDate: '2018-05-07',
    endDate: '2018-05-12'
  }],
  features: {
    eventMenu: {
      disabled: true
    },
    scheduleMenu: {
      disabled: true
    },
    timeAxisHeaderMenu: {
      disabled: true
    }
  }
});