import * as yup from 'yup'
const AverageTime = yup.object().shape({
  boundaryId: yup.number().typeError('boundary_id Must be a valid integer').required('boundary_id Must be a valid integer'),
  vehicleId: yup.number().typeError('vehicle_id Must be a valid integer').required('vehicleId is required')
})
const EstimatedDateAndTime = yup.object().shape({
  boundaryId: yup.number().typeError('boundary_id Must be a valid integer').required('boundary_id Must be a valid integer'),
  vehicleId: yup.number().typeError('vehicle_id Must be a valid integer').required('vehicleId is required'),
  date: yup.string().required('Date is a required parameter').matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, 'Invalid date format expected YYYY-MM-DD'),
  time: yup.string().required('Time is required').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'invalid time format expected HH:MM')
})

class validation {
  async validateAverageTimeQuery (data: any) {
    return AverageTime.validate(data, { abortEarly: false })
  }

  async validateEstimatedDateAndTimeQuery (data: any) {
    return EstimatedDateAndTime.validate(data, { abortEarly: false})
  }
}

export default validation
