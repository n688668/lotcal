# Lotcal

```ts
// Telegram Message
// Get chat id: https://api.telegram.org/bot<YourBOTToken>/getUpdates
// Get bot: https://api.telegram.org/bot<YourBOTToken>/getMe
// emoji: https://apps.timwhitlock.info/emoji/tables/unicode
// sendTgMessage(`
//   🔥 *Entry* 🔥
//   \n🔸 *SL pip*: ${slpip.value}
//   \n🔸 *SL value*: ${slvalue.value}
//   \n🔸 *TP pip*: ${tppip.value}
//   \n🔸 *TP value*: ${tpvalue.value}
//   \n[inline URL](http://www.example.com/)
// `)
async function sendTgMessage(text: any) {
  const token = '<YourBOTToken>'
  // const { data: result } = await useFetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=<ChatID>&parse_mode=MarkdownV2&text=${encodeURIComponent(text)}`)

  const data = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    // body: {
    //   // My todo data
    // },
    query: {
      chat_id: '<ChatID>',
      parse_mode: 'MarkdownV2',
      text,
    }
  })

  // console.log(data)
}
```
