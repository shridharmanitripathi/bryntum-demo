var scheduler = new Scheduler({
  appendTo: targetElement,
  autoHeight: true,
  startDate: new Date(2018, 4, 6),
  endDate: new Date(2018, 4, 20),
  viewPreset: 'weekAndDay',
  columns: [{
    field: 'name',
    text: 'Name',
    width: 100
  }]
});