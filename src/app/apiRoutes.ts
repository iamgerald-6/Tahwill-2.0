/* eslint-disable import/no-anonymous-default-export */
export default {
  Auth: {
    login: "/api/admin/login/",
    logout: "/api/logout/",
  },
  blog: {
    postBlog: "/api/blog/",
    getBlog: "/api/blog/",
    getBlogAdmin: "/api/blog/admin/",
  },
  mail: {
    sendMail: "/api/subscribe/",
  },
  payment: {
    paymentApi: "/api/payment",
    getPayment: "/api/getTransaction/",
  },
  booking: {
    getBook: "/api/booking/",
  },
};
