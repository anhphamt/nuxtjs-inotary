import { extend } from 'vee-validate'
import { required, email, digits } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Vui lòng nhập thông tin này',
})
extend('email', {
  ...email,
  message: 'Email không chính xác',
})
extend('digits', {
  ...digits,
  params: ['length'],
  validate(value, { length }) {
    return value.length == length
  },
  message: 'Phải chứa {length} số',
})
