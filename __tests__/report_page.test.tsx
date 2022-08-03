import '@testing-library/jest-dom'

describe('Report Page', () => {
  describe('Number of transactions are less than or equal to 20', () => {
    it.todo('should render/open report page and generate report')

    it.todo('should be able to share report via copying the link')

    it.todo('should save report as PDF to device')
  })

  describe('Number of transactions are more than 20', () => {
    it.todo(
      'should render/open report page and display input modal' +
        ' to initiate payment process if payment is not complete'
    )

    it.todo(
      'should render/open report page and display input modal' +
        ' to initiate payment process if payment is not successful'
    )

    it.todo(
      'it should render/open report page and generate report if payment is successful'
    )
  })
})
