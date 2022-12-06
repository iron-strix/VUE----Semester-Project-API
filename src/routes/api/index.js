import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import forms from './forms'
import formResponses from './formResponses'
import users from './users'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/forms', forms)
router.use('/formResponses', formResponses)
router.use('/users', users)

export default router
