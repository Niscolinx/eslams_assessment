export const getPhotoUrl = async(selector: string) => {
    const selectPhoto = document.querySelector(selector)

    console.log({selector})

    if (!selectPhoto) return 'no photo selected'

    const photo = selectPhoto as HTMLInputElement

    const photoUrl = await new Promise((resolve, reject) => {
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
