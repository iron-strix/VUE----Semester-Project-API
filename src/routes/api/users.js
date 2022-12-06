import { Router } from 'express'

import {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from '../../models/users'

const router = Router()

// should be async because database call
router.get('/', async (req, res) => {
  const users = await getUsers()
  res.send(users)
})

router.get('/:id', async (req, res) => {
  const user = await getUser(parseInt(req.params.id, 10))
  if (user) {
    res.send(user)
  } else {
    res.status(404).send({ msg: 'User not found' })
  }
})

router.post('/', async (req, res) => {
  const user = await addUser(req.body)
  if (user) res.send(user)
  else
    res
      .status(400)
      .json({ error: 'User could not be added. (some error trace here)' })
})

router.put('/:id', async (req, res) => {
  const user = await updateUser(parseInt(req.params.id, 10), req.body)
  if (user) {
    res.send(user)
  } else {
    res.status(404).send({ msg: 'User not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const user = await deleteUser(parseInt(req.params.id, 10))
  if (user) {
    res.send(user)
  } else {
    res.status(404).send({ msg: 'User not found' })
  }
})

export default router
