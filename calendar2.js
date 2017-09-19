const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)
let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S   M   T   W   Th  F   S   ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()

    let monthDays = Array.from(monthRange.by('days'))
    
    _.chain(monthDays)
        .map(day => {
            let date = day.format('DD')
            if(day.month() == 8 && day.date() == 9 + 1){
                date = chalk.red(date)
            }
            if(day.month() == 9 && day.date() == 10 + 14){
                date = chalk.blue(date)
            }
            return date
        })
        .tap(days => {
            for (let i = 0; i < firstDay; i++)
                {
                    days.unshift('  ')
                }
            })
        .chunk(7)
        .each(week => {
            console.log(week.join('  '))
        })

        .value()

    console.log('')
    })