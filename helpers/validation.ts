import * as yup from 'yup'
const AverageTime = yup.object().shape({
  boundaryId: yup.number().typeError('boundary_id Must be a valid integer').required('boundary_id Must be a valid integer'),
  vehicleId: yup.number().typeError('vehicle_id Must be a valid integer').required('vehicleId is required')
})

class validation {
  async validateAverageTimeQuery (data: any) {
    return AverageTime.validate(data, { abortEarly: false })
  }
}

export default validation
