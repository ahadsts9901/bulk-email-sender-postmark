import express from 'express'
import { sendEmail } from '../functions/main.mjs'

const router = express.Router()

router.post('/bulk-email', async (req, res, next) => {

    try {

        const emailsData = req?.body?.emails

        if (!emailsData || emailsData?.length) {
            return res.status(400).send({
                message: 'emails data not provides'
            })
        }

        await Promise.all(emailsData.map(async (emailData) => {
            await sendEmail(emailData.email, emailData.userName)
        }))

        res.send({
            message: 'emails sent successfully'
        })

    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: 'internal server error',
            error: error
        })
    }

})

export default router