import SuccessIcon from "@/assets/icons/success.svg?react"
import FailedIcon from "@/assets/icons/fail.svg?react"
import PendingIcon from "@/assets/icons/pending.svg?react"

export const PAYMENT_SUMMARY = {
    success: {
        title: "Payment successful",
        description: "Please check your payment details below",
        icon: SuccessIcon,
    },
    fail: {
        title: "Payment failed",
        description: "Opps! Please check the details and process again or select a new payment method",
        icon: FailedIcon,
    },
    pending: {
        title: "Payment pending",
        description: "Your payment is currently in pending state. Please contact service provider for support",
        icon: PendingIcon,
    }
}
