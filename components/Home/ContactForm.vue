<template>
  <section class="container mx-auto lg:px-4 lg:py-20 font-light">
    <div class="flex flex-col-reverse lg:flex-row-reverse">
      <form
        id="contactForm"
        class="bg-gray-100 border border-gray-300 p-4 lg:p-10 lg:m-2 w-full lg:w-3/6"
        @submit.prevent="sendContact"
        @mouseover="launchRecaptcha"
      >
        <ValidationObserver v-slot="{ invalid }">
          <h2 class="text-center text-orange text-xl lg:text-4xl">
            Đăng Ký Dùng Thử I-NOTARY
          </h2>
          <p class="text-center mb-6">
            <strong>Phần mềm quản lý Văn phòng công chứng </strong>
          </p>
          <div
            v-if="sentMail"
            class="p-4 bg-green-100 text-green-700 mb-4 border-l-4 border-green-500"
          >
            <p class="font-bold">Gửi yêu cầu thành công !</p>
            <p>
              Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại
              với bạn trong thời gian sớm nhất.
            </p>
          </div>
          <div
            v-if="error"
            class="p-4 bg-red-100 text-red-700 mb-4 border-l-4 border-red-500"
          >
            <p class="font-bold">Gửi yêu cầu không thành công !</p>
            <p>Có lỗi xảy ra, xin vui lòng thử lại !</p>
          </div>
          <div class="mb-4">
            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required"
            >
              <input
                v-model="form.name"
                class="border rounded w-full py-2 px-3 focus:outline-none focus:bg-white border-gray-300 focus:border-orange-600"
                type="text"
                placeholder="Tên của bạn *"
              />
              <p class="text-red-700">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="mb-4">
            <ValidationProvider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <input
                v-model="form.email"
                class="border rounded w-full py-2 px-3 focus:outline-none focus:bg-white border-gray-300 focus:border-orange-600"
                type="text"
                placeholder="Địa chỉ Email *"
              />
              <p class="text-red-700">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="mb-4">
            <ValidationProvider
              v-slot="{ errors }"
              name="phone"
              rules="required|digits:10"
            >
              <input
                v-model="form.phone"
                class="border rounded w-full py-2 px-3 focus:outline-none focus:bg-white border-gray-300 focus:border-orange-600"
                type="number"
                maxlength="10"
                placeholder="Số điện thoại *"
              />
              <p class="text-red-700">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="mb-4">
            <textarea
              v-model="form.content"
              rows="5"
              class="border rounded w-full py-2 px-3 focus:outline-none focus:bg-white border-gray-300 focus:border-orange-600"
              type="text"
              placeholder="Nội dung"
            />
          </div>
          <div class="mb-6">
            <div
              class="g-recaptcha"
              :data-sitekey="$config.GOOGLE_RECAPTCHA_KEY"
              :data-callback="onCaptchaSuccess"
            ></div>
            <p class="text-red-700">{{ errorCaptcha }}</p>
          </div>
          <div class="mb-4">
            <button
              :disabled="invalid"
              type="submit"
              class="w-full block px-6 py-4 leading-none focus:outline-none rounded-full text-white bg-orange mt-4 lg:mt-0 uppercase shadow hover:bg-red-600"
            >
              <span v-if="invalid">Vui lòng nhập đúng thông tin</span>
              <span v-else>Gửi liên hệ</span>
            </button>
          </div>
        </ValidationObserver>
      </form>
      <div class="w-full lg:w-3/6 lg:p-10 p-4">
        <h4 class="text-center text-orange text-4xl">Mô hình phần mềm</h4>
        <p class="text-center mb-6">
          <strong>Quản lý Văn phòng công chứng</strong>
        </p>
        <picture class="w-full mx-auto">
          <source srcset="/img/mo-hinh-phan-mem.webp" type="image/webp" />
          <source srcset="/img/mo-hinh-phan-mem.png" type="image/png" />
          <img src="/img/mo-hinh-phan-mem.png" alt="Mô hình phần mềm" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        content: '',
      },
      sentMail: false,
      error: false,
      errorCaptcha: '',
    }
  },
  methods: {
    launchRecaptcha() {
      const script = document.createElement('script')
      script.setAttribute('async', '')
      script.setAttribute('defer', '')
      script.src = 'https://www.google.com/recaptcha/api.js'
      document.head.appendChild(script)
    },
    onCaptchaSuccess(token) {
      this.error = false
      this.errorCaptcha = ''
    },
    async sendContact() {
      try {
        const token = await window.grecaptcha.getResponse()
        await this.$axios
          .$post(this.$config.API_URL + '/validate-captcha', null, {
            params: {
              token,
            },
          })
          .then((res) => {
            if (res.success) {
              this.$axios
                .$post(this.$config.BASE_URL + '/mail/send', {
                  from: {
                    name: this.form.name,
                    address: this.form.email,
                  },
                  to: this.$config.CONTACT_MAIL,
                  subject: 'Đăng ký dùng thử phần mềm i-Notary',
                  text: 'Đăng ký dùng thử phần mềm i-Notary',
                  html:
                    '<p>Họ tên: ' +
                    this.form.name +
                    '</p>' +
                    '<p>Email: ' +
                    this.form.email +
                    '</p>' +
                    '<p>Số điện thoại: ' +
                    this.form.phone +
                    '</p>' +
                    '<p>Nội dung: ' +
                    this.form.content +
                    '</p>',
                })
                .then((response) => {
                  this.sentMail = true
                  this.form = {
                    name: '',
                    email: '',
                    phone: '',
                    content: '',
                  }
                })
                .catch((e) => {
                  this.error = true
                })
            } else {
              this.errorCaptcha = 'Captcha không chính xác'
            }
          })
          .catch((e) => {
            this.error = true
          })
        await window.grecaptcha.reset()
      } catch (error) {
        this.error = true
        this.errorCaptcha = 'Bạn phải xác thực Captcha'
      }
    },
  },
}
</script>
