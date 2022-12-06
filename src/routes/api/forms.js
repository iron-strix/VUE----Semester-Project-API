import { Router } from 'express'

import {
  getForm,
  getForms,
  addForm,
  updateForm,
  deleteForm,
} from '../../models/forms'

const router = Router()

// should be async because database call
router.get('/', async (req, res) => {
  const forms = await getForms()
  res.send(forms)
})

router.get('/:id', async (req, res) => {
  const form = await getForm(req.params.id)
  if (form) {
    res.send(form)
  } else {
    res.status(404).send({ msg: 'Form not found' })
  }
})

router.post('/', async (req, res) => {
  const formBody = req.body
  if (formBody) {
    const form = await addForm(formBody)
    res.send(form)
  } else {
    res.status(400).send({ msg: 'Form body is required' })
  }
})

router.put('/:id', async (req, res) => {
  const formBody = req.body
  const formId = req.params.id
  if (formBody && formId) {
    const form = await updateForm(formId, formBody)
    res.send(form)
  } else {
    res.status(404).send({ msg: 'Form not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const form = await deleteForm(req.params.id)
  if (form) {
    res.send(form)
  } else {
    res.status(404).send({ msg: 'Form not found' })
  }
})

export default router
