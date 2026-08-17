import { cn } from "@/lib/utils"
import { ImagePlus } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type ImageUploadProps = {
  value?: File | null
  onChange?: (file: File | null) => void
  onBlur?: () => void
  name?: string
  "aria-invalid"?: boolean
} & Omit<React.ComponentProps<"div">, "onChange" | "value">

function ImageUpload({
  value,
  onChange,
  onBlur,
  name,
  className,
  ...props
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (!value) return setPreview(null)
    const url = URL.createObjectURL(value)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [value])

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onBlur={onBlur}
      className={cn(
        "relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-2",
        preview ? "border-none" : "border-dashed",
        className
      )}
      {...props}
    >
      {preview ? (
        <img
          src={preview}
          alt=""
          className="size-full object-cover object-center"
        />
      ) : (
        <div>
          <ImagePlus className="size-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Add</span>
        </div>
      )}
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept="image/png,image/jpg,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          onChange?.(e.target.files?.[0] ?? null)
          e.target.value = ""
        }}
      />
    </div>
  )
}

export { ImageUpload }
