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


describe('GET api/estimated_date_and_time_of_arrival', () =>{
  it('returns status code 200 if boundaryId, vehicleId, date and time is passed', async () => {
    const res = await request(app)
      .get('/api/estimated_date_and_time_of_arrival/?boundaryId=2&vehicleId=1&date=2022-01-27&time=14:17')
    expect(res.statusCode).toEqual(200)
  })
  it('returns status code 400 if time is passed but date is not passed', async () => {
    const res = await request(app)
      .get('/api/estimated_date_and_time_of_arrival/?boundaryId=2&vehicleId=1&time=14:17').send()
    expect(res.statusCode).toEqual(400)
  })

  it('returns status code 400 if date is passed but time is missing', async () => {
    const res = await request(app).get('/api/estimated_date_and_time_of_arrival/?boundaryId=2&vehicleId=1&date=2022-01-27').send()
    expect(res.statusCode).toEqual(400)
  })
})
