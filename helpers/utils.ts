import moment, { Moment } from 'moment'
import momentDurationFormat from 'moment-duration-format'
momentDurationFormat(moment as any)
class Utils {
  ConvertToDuration (records:any):{ formatted: string; raw: number } {
    const RAM = []
    let hold:string = null
    for (let i = 0; i < records.length; i++) {
      if (records[i].detected_event === 'enter') {
        hold = records[i].created_at
      } else {
        const entry:Moment = moment(hold)
        const exit: Moment = moment(records[i].created_at)
        RAM.push(exit.diff(entry, 'seconds'))
        hold = null
      }
    }
    const Sum = RAM.reduce((previousValue, currentValue) => previousValue + currentValue)
    const Avg = Sum / (RAM.length) || 0
    const formatted = moment.duration(Avg, 'seconds').format('y [years] d [days] h [hours] m [minutes] s [seconds]') as string
    return {
      formatted,
      raw: Avg
    }
  }
}
export default Utils
