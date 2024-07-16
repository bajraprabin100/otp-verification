
export function getStatusColor(label: string = "in progress"){
  switch (label?.toLowerCase()){
    case "in_progress":
    case "result_published":
      return "primary"
    case "cancelled":
      return "secondary"
    case "completed":
    case "booked":
      return "success"
    case "on_hold":
    case "pending":
      return "warning"
    case "draft":
      return "default"
    case "awaiting_result":
      return "error"
    default:
      return "primary"
  }
}

export function getStatusColorPayment(label: string = "completed"){
  switch (label?.toLowerCase()){
    case "failed":
      return "secondary"
    case "pending":
      return "info"
    case "completed":
      return "success"
    default:
      return "primary"
  }
}
