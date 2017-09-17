const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)
let now = moment()
let year = now.range('year')

console.log(now.year())
for (const month of year.by('months'))
{
    console.log(_.pad(month.format('MMMM'), 26, '-'))
    console.log('S  M   T   W   Th  F   S')


    let days = Array.from(month.range('month').by('days'))
    let paddedDays = _.map(days, day => {
        let date = day.date()
        if(day.month() == 8 && day.date() == 9 + 1){
            date = chalk.red(date)
        }
        if(day.month() == 9 && day.date() == 10 + 14){
            date = chalk.blue(date)
        }
        return _.padEnd(date, 2, ' ')
    })
    console.log(paddedDays)
}