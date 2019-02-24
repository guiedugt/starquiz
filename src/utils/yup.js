/* eslint no-template-curly-in-string: 0 */
import * as yup from 'yup'
import validate from './validate'

yup.setLocale({
  mixed: {
    notType: 'Invlaid input'
  },
  string: {
    email: 'Invalid email'
  }
})

yup.addMethod(yup.string, 'name', () => yup.string().test('name', 'Invalid name', validate.name))

export default yup
