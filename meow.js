// just a silly willy easter egg code
/* eslint-disable no-undef */
const fs = require('fs').promises

async function main() {
  let data

  try {
    data = await fs.readFile('meow.txt', 'utf-8')
  } catch (err) {
    await fs.writeFile('meow.txt', '1')
    data = '1'
  }

  data = Number(data) + 1
  await fs.writeFile('meow.txt', data.toString())

  console.log('\x1b[36m%s\x1b[0m', 'meow meow meow :3')

  let msg

  setTimeout(() => {
    switch (data) {
      case 1:
        msg = 'easter egg found!'
        break
      case 2:
        msg = 'easter egg found... again!'
        break
      case 3:
        msg = 'yes, you found the easter egg once more'
        break

      default:
        if (data <= 7) {
          msg = 'wow.. you found the easter egg for the ' + data + 'th time..'
        } else if (data <= 10) {
          msg = 'sigh... this the ' + data + "th time you're opening this, is everything okay?"
        } else if (data <= 21) {
          msg = "hi, you've opened this for " + data + ' times now.'
        } else if (data === 50) {
          msg =
            "wow. You actually opened this 50 whole times, congrats on the milestone. You're strong and loved <3"
        } else {
          let messages = [
            "you're loved.",
            'you matter.',
            "you're valid.",
            'keep going.',
            'never give up.',
            'i believe in you.'
          ]
          msg = messages[Math.floor(Math.random() * messages.length)]
        }
        break
    }

    console.log('\x1b[36m%s\x1b[0m', msg)
  }, 1000)

  if (Number(data) >= 15) {
    setTimeout(() => {
      console.log('...')
    }, 2000)
    setTimeout(() => {
      console.log('\n\n\x1B[3m*hug*\x1B[23m')
    }, 2000)
  }

  setTimeout(() => {
    process.exit()
  }, 4000)
}

main().catch((err) => console.error(err))
