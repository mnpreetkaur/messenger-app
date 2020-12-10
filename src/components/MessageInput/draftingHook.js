import { useState } from 'react'

const DraftingHook = () => {
  const [draft, changeDraft] = useState([])

  const getDraft = (sentTo) => {
    const messageObj =  draft.find(({ to }) => to === sentTo )
    const { msg = "" } = messageObj || {}
    return msg
  }

  const setDraft = (sentTo, message) => {
    const index = draft.findIndex(({ to }) => to === sentTo )
    if (index > 0) {
      draft[index].msg = message
    } else {
      draft.push({
        to: sentTo,
        msg: message
      })
    }
    changeDraft(draft)
  }
  
  return {
    getDraft,
    setDraft
  }
}

export default DraftingHook
