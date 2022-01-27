import express, { Request, Response } from 'express'
import Db from '../db/db'
import Validation from '../helpers/validation'
import Utils from '../helpers/utils'
import moment, { Moment } from 'moment'
const utils = new Utils()

const router = express.Router()

router.get('/average_time', async function (req: Request, res: Response):Promise<void> {
  const connection = await new Db().connect()
  try {
    await new Validation().validateAverageTimeQuery(req.query)
    const query = `select * from vehicle_boundary_events where boundary_id = ${req.query.boundaryId}  AND (created_at between DATE_ADD(NOW( ), INTERVAL -1 MONTH ) and now()) AND vehicle_id = ${req.query.vehicleId} order by id asc;`
    const [records]:any = await connection.query(query)
    const result:any = utils.ConvertToDuration(records)
    res.json({
      error: false,
      result: result.formatted
    })
  } catch (e) {
    res.status(400).json(e)
  } finally {
    connection.destroy()
  }
})
router.get('/estimated_date_and_time_of_arrival', async (req: Request, res: Response):Promise<void> => {
  const connection = await new Db().connect()
  try {
    await new Validation().validateEstimatedDateAndTimeQuery(req.query)
    const query = `select * from vehicle_boundary_events where boundary_id = ${req.query.boundaryId}  AND (created_at between DATE_ADD(NOW( ), INTERVAL -1 MONTH ) and now()) AND vehicle_id = ${req.query.vehicleId} order by id asc;`
    const [records]:any = await connection.query(query)
    const value:any = utils.ConvertToDuration(records)
    const futureDate:Moment = moment(req.query.date + ' ' + req.query.time, 'YYYY-MM-DD HH:mm')
    const result:Moment = moment(futureDate).add(value.raw, 'seconds')
    res.json({
      error: false,
      result
    })
  } catch (e) {
    res.status(400).json(e)
  } finally {
    connection.destroy()
  }
})
export default router
