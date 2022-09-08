import nodeMailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper


  export const transporter = nodeMailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
          rejectUnauthorized:
              process.env.NODE_ENV === 'production' ? true : false,
      },
  })

export const getPhotoUrl = (selector:string) => {

    const selectPhoto = document.querySelector(selector)

    if(!selectPhoto) return 'no photo selected'

    const photo = selectPhoto as HTMLInputElement

    const photoUrl = new Promise((resolve, reject) => {

        photo.addEventListener('change', (e) => {

            const file = e.target as HTMLInputElement

            const reader = new FileReader()

            reader.readAsDataURL(file.files![0])

            reader.onload = () => resolve(reader.result)

            reader.onerror = (err) => reject(err)

        })

    })

    return photoUrl



}


  

