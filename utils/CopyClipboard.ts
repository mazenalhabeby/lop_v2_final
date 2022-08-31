import toast from 'react-hot-toast'

export function copyClipBoard(inputId: any, msg: string) {
  /* Get the text field */
  var copyText = document.getElementById(inputId)

  /* Select the text field */
  //@ts-ignore
  copyText?.select()
  //@ts-ignore
  copyText?.setSelectionRange(0, 99999) /* For mobile devices */

  /* Copy the text inside the text field */
  //@ts-ignore
  navigator.clipboard.writeText(copyText?.value)

  /* Alert the copied text */
  toast.success(msg)
}
