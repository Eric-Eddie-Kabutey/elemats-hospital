import { cn } from "@/lib/utils"

const Typography = ({ children, className, typo = "body" }) => {
  const styles = {
    "header-6-semibold": "text-lg font-semibold",
    "body-small-regular": "text-sm font-normal",
    "body": "text-base font-normal",
  }

  return (
    <p className={cn(styles[typo] || styles.body, className)}>
      {children}
    </p>
  )
}

export { Typography }
