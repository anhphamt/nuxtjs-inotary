<template>
  <div class="relative text-gray-700">
    <section
      :class="
        (payment == `purchase` ? `mb-6 lg:mb-10` : `mb-10 lg:mb-20`) +
        ` container mx-auto text-center`
      "
    >
      <h1
        class="text-orange pt-4 lg:pt-10 pb-4 font-light text-2xl lg:text-5xl"
      >
        Bảng Giá Phần Mềm & Dịch Vụ
      </h1>
      <p class="mb-2 text-lg italic px-4">
        “Có 3 phiên bản <strong>phần mềm i-NOTARY</strong> tùy theo nhu cầu sử
        dụng”
      </p>
      <p class="mb-6 font-light text-base px-4">
        Bạn có thể chọn MUA/THUÊ phần mềm công chứng nhằm phục vụ tối đa nhu cầu
        sử dụng của các văn phòng công chứng với quy mô từ đơn giản đến phức
        tạp.
      </p>
      <div class="inline-flex mt-4 lg:mt-0">
        <button
          :class="
            (payment == `purchase`
              ? `bg-orange text-white font-bold`
              : `bg-orange-100 text-orange`) +
            ` focus:outline-none hover:bg-orange hover:text-white py-2 px-4 rounded-l`
          "
          @click="payment = `purchase`"
        >
          Mua phần mềm
        </button>
        <button
          :class="
            (payment == `rent`
              ? `bg-orange text-white font-bold`
              : `bg-orange-100 text-orange`) +
            ` focus:outline-none hover:bg-orange hover:text-white py-2 px-4 rounded-r`
          "
          @click="payment = `rent`"
        >
          Thuê phần mềm
        </button>
      </div>
    </section>

    <section
      v-if="payment == `purchase`"
      class="w-full lg:w-5/12 mx-auto mb-10 lg:mb-20 bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange px-4 py-3 shadow-md"
    >
      <div class="flex">
        <div class="py-2 hidden md:block">
          <svg
            class="fill-current h-6 w-6 text-orange mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            />
          </svg>
        </div>
        <ul class="inline-flex flex-wrap">
          <li class="flex-initial w-full text-gray-700 text-left py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline-block w-4 text-orange"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Bảo hành phần mềm 12 tháng
          </li>
          <li class="flex-initial w-full text-gray-700 text-left py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline-block w-4 text-orange"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Hỗ trợ nâng cấp, chỉnh sửa miễn phí trong suốt thời gian bảo hành
          </li>
          <li class="flex-initial w-full text-gray-700 text-left py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline-block w-4 text-orange"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Tiết kiệm hơn so với việc thuê theo từng tháng
          </li>
          <li class="flex-initial w-full text-gray-700 text-left py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="inline-block w-4 text-orange"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Chi phí đã bao gồm 10% thuế VAT
          </li>
        </ul>
      </div>
    </section>

    <section
      class="w-full lg:w-4/5 mx-auto grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-0 mb-10 lg:mb-20 text-center font-light"
    >
      <div class="rounded-l shadow p-4 border-t">
        <div class="py-6 px-4">
          <h3 class="text-orange text-xl font-bold mb-6">BASIC - CƠ BẢN</h3>
          <div class="p-3 bg-gray-100 text-xl rounded-lg mb-6">
            <p class="font-bold -mb-2">Giá Liên hệ</p>
            <small class="italic text-sm">{{ timeUse }}</small>
          </div>
          <ul class="divide-y divide-dashed divide-gray-300">
            <li class="py-3">Một phòng công chứng</li>
            <li class="py-3">Sao lưu dữ liệu hằng ngày</li>
            <li class="py-3">Tính năng sử dụng bị hạn chế</li>
            <li class="py-3">Giới hạn tối đa 10 nhân viên</li>
            <li class="py-3">Hỗ trợ cài đặt & vận hành</li>
          </ul>
        </div>
      </div>
      <div class="rounded shadow p-4 bg-orange text-white lg:-my-10">
        <div class="py-6 lg:py-12 px-4">
          <h3 class="text-xl md:text-2xl font-bold mb-6">
            BUSINESS - NÂNG CAO
          </h3>
          <div class="p-3 bg-white text-orange text-xl rounded-lg mb-6">
            <p class="font-bold -mb-2">Giá Liên hệ</p>
            <small class="italic text-sm">{{ timeUse }}</small>
          </div>
          <ul class="divide-y divide-dashed divide-gray-300">
            <li class="py-3">Một phòng công chứng</li>
            <li class="py-3">Sao lưu dữ liệu hằng ngày</li>
            <li class="py-3">Sử dụng đầy đủ tính năng</li>
            <li class="py-3">Không giới hạn nhân viên</li>
            <li class="py-3">Hỗ trợ cài đặt & vận hành</li>
          </ul>
        </div>
      </div>
      <div class="rounded-r shadow p-4 border-t">
        <div class="py-6 px-4">
          <h3 class="text-orange text-xl font-bold mb-6">
            ENTERPRISE - CHUYÊN NGHIỆP
          </h3>
          <div class="p-3 bg-gray-100 text-xl rounded-lg mb-6">
            <p class="font-bold -mb-2">Giá Liên hệ</p>
            <small class="italic text-sm">{{ timeUse }}</small>
          </div>
          <ul class="divide-y divide-dashed divide-gray-300">
            <li class="py-3">Một phòng công chứng</li>
            <li class="py-3">Sao lưu dữ liệu hằng ngày</li>
            <li class="py-3">Sử dụng đầy đủ tính năng</li>
            <li class="py-3">Không giới hạn nhân viên</li>
            <li class="py-3">Ứng dụng Mobile iOS & Android</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-white font-light">
      <div class="container mx-auto lg:px-4 py-10 text-center">
        <h2 class="text-orange px-4 lg:px-0 text-2xl lg:text-5xl mb-1 mb-6">
          # Các dịch vụ khác
        </h2>
        <h4
          class="text-orange px-4 lg:px-0 text-xl lg:text-3xl mb-1 mb-6 font-medium"
        >
          Dịch vụ Server phần cứng
        </h4>
        <p class="mb-6 px-4 lg:px-0">
          i-NOTARY cung cấp dịch vụ Server đi kèm trong quá trình vận hành phần
          mềm. Hệ thống server do chính đội ngũ phát triển, đảm bảo tương thích
          tốt với phần mềm Quản lý Văn Phòng Công Chứng. Khách hàng có toàn
          quyền truy cập vào dữ liệu của Văn Phòng. Bộ phận quản lý server sẽ
          cung cấp tài khoản quản trị dữ liệu (nếu khách hàng có nhu cầu), tuy
          nhiên nên hạn chế truy cập, chỉnh sửa để đề phòng dữ liệu bị hư.
        </p>
        <div class="w-full lg:w-4/6 mx-auto mb-10 lg:mb-20 shadow-md">
          <div class="bg-orange text-white font-bold rounded-t px-4 py-3">
            Chi phí: 3.000.000 đ / tháng
          </div>
          <div
            class="bg-orange-100 border-orange-500 border border-t-0 border-orange rounded-b text-orange px-4 py-3"
          >
            <div class="flex">
              <div class="py-2 hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="fill-current h-6 w-6 text-orange mr-4"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <ul class="inline-flex flex-wrap">
                <li
                  v-for="(item, index) in server"
                  :key="index"
                  class="flex-initial w-full text-gray-700 text-left py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="inline-block w-4 text-orange"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h4
          class="text-orange px-4 lg:px-0 text-xl lg:text-3xl mb-1 mb-6 font-medium"
        >
          Các dịch vụ hỗ trợ khác
        </h4>
        <p class="mb-6 px-4 lg:px-0">
          Chi phí áp dụng cho việc mua phần mềm. Khách hàng thuê phần mềm sẽ
          được miễn phí toàn bộ chi phí phát sinh.
        </p>
        <div class="divide-y divide-gray-400 w-full lg:w-4/6 mx-auto">
          <div
            v-for="(services, index) in otherServices"
            :key="index"
            class="py-2 inline-flex w-full bg-white odd:bg-gray-100"
          >
            <div
              class="flex-initial px-4 lg:px-6 w-2/6 text-left py-2 text-orange"
            >
              {{ index }}
            </div>
            <div class="flex-initial px-4 w-4/6 inline-flex flex-wrap">
              <div
                v-for="(item, id) in services"
                :key="id"
                class="flex-initial w-full text-gray-700 text-left py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ item }}
              </div>
            </div>
          </div>
          <div
            class="py-2 px-4 text-sm inline-flex w-full bg-white odd:bg-gray-100 text-right italic"
          >
            Chú ý: Chi phí dịch vụ hỗ trợ chưa bao gồm 10% VAT.
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div
        class="container mx-auto px-4 py-10 text-orange text-center text-xl italic"
      >
        <p>“Chi phí tối thiểu - Hiệu quả tối đa”</p>
      </div>
    </section>
    <Hotline />
  </div>
</template>

<script>
import Hotline from '~/components/Hotline.vue'
export default {
  components: {
    Hotline,
  },
  async asyncData({ $content }) {
    const pricing = await $content('pricing').fetch()
    const data = {
      server: pricing.data.server,
      otherServices: pricing.data.otherServices,
      payment: 'purchase',
      timeUse: 'Sử dụng Vĩnh viễn',
    }

    return data
  },
  watch: {
    payment(val) {
      this.timeUse = val == 'purchase' ? 'Sử dụng Vĩnh viễn' : 'Phí hàng tháng'
    },
  },
  head() {
    return {
      title:
        'Bảng giá phần mềm quản lý văn phòng công chứng | i-NOTARY Pricing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Có 3 phiên bản phần mềm i-NOTARY tùy theo nhu cầu sử dụng. Bạn có thể chọn MUA/THUÊ theo tháng. Bảo hành phần mềm 12 tháng. Chi phí đã bao gồm 10% thuế VAT',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Bảng giá phần mềm quản lý văn phòng công chứng | i-NOTARY Pricing',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Có 3 phiên bản phần mềm i-NOTARY tùy theo nhu cầu sử dụng. Bạn có thể chọn MUA/THUÊ theo tháng. Bảo hành phần mềm 12 tháng. Chi phí đã bao gồm 10% thuế VAT',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.BASE_URL + '/img/bang_gia.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$config.BASE_URL + '/bang-gia',
        },
      ],
    }
  },
}
</script>
