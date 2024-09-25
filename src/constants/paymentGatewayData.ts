import sslCommerzPhoto from "@/assets/images/paymentGateways/sslCommerz.png";
import razorPayPhoto from "@/assets/images/paymentGateways/razorpay.png";
import paytmPhoto from "@/assets/images/paymentGateways/paytm.png";
import paypalPhoto from "@/assets/images/paymentGateways/paypal.png";
import stripePhoto from "@/assets/images/paymentGateways/stripe.png";
import bkashPhoto from "@/assets/images/paymentGateways/bkash.png";

export const paymentGatewayData = [
  {
    _id: 6,
    name: "BKash",
    image: bkashPhoto,
    status: "inactive",
  },
  {
    _id: 3,
    name: "Paytm",
    image: paytmPhoto,
    status: "inactive",
  },
  {
    _id: 1,
    name: "Sslcommerz",
    image: sslCommerzPhoto,
    status: "active",
  },
  {
    _id: 5,
    name: "Stripe",
    image: stripePhoto,
    status: "active",
  },
  {
    _id: 2,
    name: "Razorpay",
    image: razorPayPhoto,
    status: "inactive",
  },

  {
    _id: 4,
    name: "Paypal",
    image: paypalPhoto,
    status: "inactive",
  },
];
