import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"
import { useForm } from "@tanstack/react-form"
import { Input } from "@/components/ui/input"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
} from "@/components/ui/combobox"
import { ImageUpload } from "@/components/ui/image-upload"
import { Button } from "@/components/ui/button"
import { SaveIcon } from "lucide-react"

export const Route = createFileRoute("/_app/ingrediant/create")({
  component: RouteComponent,
})

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      name: "",
      category: "",
      unit: [{ label: "กรัม", value: "gram" }],
      image: null as File | null,
    },
    validators: {},
  })

  return (
    <>
      <div className="pt-3 pb-5">
        <h1 className="font-heading text-3xl">เพิ่มวัตถุดิบ</h1>
        <span className="text-md text-muted-foreground">
          เพิ่มวัตถุดิบจากหน้านี้เพื่อใช้เป็นตัวเลือกวุตถุดิบในหน้าสูตรอาหาร/เครื่องดื่ม
        </span>
      </div>
      <Card>
        <CardContent>
          <form id="form-tanstack-input">
            <div className="flex justify-center">
              <div className="flex w-xl flex-col justify-between gap-5 md:flex-row">
                <form.Field
                  name="image"
                  children={(field) => {
                    return (
                      <ImageUpload
                        name={field.name}
                        value={field.state.value}
                        onChange={field.handleChange}
                        onBlur={field.handleBlur}
                        aria-invalid={
                          field.state.meta.isTouched &&
                          !field.state.meta.isValid
                        }
                      />
                    )
                  }}
                />
                <FieldGroup>
                  <form.Field
                    name="name"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor="form-tanstack-input-material-name">
                            ชื่อ
                          </FieldLabel>
                          <Input
                            id="form-tanstack-input-material-name"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="ผงมัจฉะ , นมสด , น้ำมะพร้าว , ..."
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="unit"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor="form-tanstack-input-material-unit">
                            หน่วย
                          </FieldLabel>
                          <Combobox>
                            <ComboboxInput placeholder="เลือกหน่วยวัดตวง" />
                            <ComboboxContent>
                              <ComboboxEmpty>ไม่พบข้อมูล</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="category"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor="form-tanstack-input-material-category">
                            ประเภท
                          </FieldLabel>
                          <Combobox>
                            <ComboboxInput placeholder="เลือกประเภท" />
                            <ComboboxContent>
                              <ComboboxEmpty>ไม่พบข้อมูล</ComboboxEmpty>
                            </ComboboxContent>
                          </Combobox>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <Button>
                    <SaveIcon />
                    บันทึก
                  </Button>
                </FieldGroup>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
