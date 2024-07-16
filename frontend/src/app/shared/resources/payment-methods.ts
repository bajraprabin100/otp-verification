import Esewa from "@/assets/images/payments/esewa.svg";
import FonePay from "@/assets/images/payments/fonepay.svg";
import Cash from "@/assets/images/payments/cash.svg";
import QRPayment from "@/assets/images/payments/qr.svg";

export const PAYMENT_METHODS = [
    {
        name: "QR Payment",
        alias: "qr_payment",
        image: QRPayment
    },
    {
        name: "Esewa",
        alias: "esewa",
        image: Esewa
    },
    {
        name: "Fonepay",
        alias: "fonepay",
        image: FonePay
    },
    {
        name: "Cash",
        alias: "cash",
        image: Cash
    }
]
