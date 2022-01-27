import express, { Request, Response } from 'express'
import Db from '../db/db'
import moment, { Moment } from 'moment'
import Validation from '../helpers/validation'
import momentDurationFormat from 'moment-duration-format'

momentDurationFormat(moment as any)
const router = express.Router()

router.get('/average_time', async function (req: Request, res: Response):Promise<void> {
  const RAM = []
  const connection = await new Db().connect()
  try {
    await new Validation().validateAverageTimeQuery(req.query)
    // let query:string = `SELECT * from vehicle_boundary_events where  boundary_id = ${req.query.boundary_id}  AND (created_at between DATE_ADD(NOW( ), INTERVAL -1 MONTH ) and now()) order by vehicle_id asc ,id asc`
    const query = `select * from vehicle_boundary_events where boundary_id = ${req.query.boundaryId}  AND (created_at between DATE_ADD(NOW( ), INTERVAL -1 MONTH ) and now()) AND vehicle_id = ${req.query.vehicleId} order by id asc;`
    const [records]:any = await connection.query(query)
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
    res.send(moment.duration(Avg, 'seconds').format('y [years] d [days] h [hours] m [minutes] s [seconds]'))
  } catch (e) {
    res.status(400).json(e)
  } finally {
    connection.destroy()
  }
})
export default router
