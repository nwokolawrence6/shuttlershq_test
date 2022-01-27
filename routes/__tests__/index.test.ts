/* eslint-disable */
import app from '../../app'
import request from 'supertest'


describe('GET api/average_time', () =>{
  it('returns status code 200 if boundaryId and vehicleId is passed', async () => {
    const res = await request(app)
        .get('/api/average_time?boundaryId=1&vehicleId=1')
    expect(res.statusCode).toEqual(200)
  })
  it('returns status code 400 if boundaryId is passed but vehicleId not passed', async () => {
    const res = await request(app)
        .get('/api/average_time?boundaryId=1').send()
    expect(res.statusCode).toEqual(400)
  })
  it('returns status code 400 if boundaryId is not passed but vehicleId is passed', async () => {
    const res = await request(app)
        .get('/api/average_time?vehicleId=1').send()
    expect(res.statusCode).toEqual(400)
  })

  it('returns status code 400 if boundaryId and vehicleId is not passed', async () => {
    const res = await request(app).get('/api/average_time').send()
    expect(res.statusCode).toEqual(400)
  })

})
