/**
 * Scheduler 2 config file
 */
export default {
    id        : 'scheduler2',
    minHeight : '20em',

    partner           : 'scheduler1',
    barMargin         : 10,
    resourceImagePath : 'assets/users/',

    stripeFeature    : true,
    sortFeature      : 'name',
    eventDragFeature : {
        constrainDragToTimeline : false
    },

    columns : [
        {
            type  : 'resourceInfo',
            text  : 'Stockholm office',
            width : '15em'
        }
    ],

    resources : [
        { id : 11, name : 'Angelo' },
        { id : 12, name : 'Gloria' },
        { id : 13, name : 'Madison' },
        { id : 14, name : 'Malik' },
        { id : 15, name : 'Mark' },
        { id : 16, name : 'Rob' }
    ],
    events : [
        {
            id           : 11,
            resourceId   : 11,
            name         : 'Implement Feature X',
            startDate    : new Date(2018, 0, 1, 10),
            duration     : 2,
            durationUnit : 'h'
        },
        {
            id           : 12,
            resourceId   : 12,
            name         : 'Refactoring',
            startDate    : new Date(2018, 0, 1, 12),
            duration     : 2,
            durationUnit : 'h'
        },
        {
            id           : 13,
            resourceId   : 16,
            name         : 'Write application tests',
            startDate    : new Date(2018, 0, 1, 14),
            duration     : 2,
            durationUnit : 'h'
        }
    ]

};