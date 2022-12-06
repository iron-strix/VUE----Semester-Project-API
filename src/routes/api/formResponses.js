import { Router } from 'express'

import {
  getFormResponses,
  getFormResponse,
  addFormResponse,
  updateFormResponse,
  deleteFormResponse,
} from '../../models/formResponses'

const router = Router()

// should be async because database call
router.get('/', async (req, res) => {
  const responses = await getFormResponses()
  res.send(responses)
})

router.get('/:id', async (req, res) => {
  const response = await getFormResponse(req.params.id)
  if (response) {
    res.send(response)
  } else {
    res.status(404).send({ msg: 'Form response not found' })
  }
})

router.post('/:id', async (req, res) => {
  const parentFormId = req.params.id
  const response = req.body
  if (parentFormId && response) {
    await addFormResponse(response)
    res.send(response)
  } else {
    res
      .status(400)
      .send({ msg: 'Parent form is required to create a response' })
  }
})

router.put('/:id', async (req, res) => {
  const formBody = req.body
  const formId = req.params.id
  if (formBody && formId) {
    const form = await updateFormResponse(formId, formBody)
    res.send(form)
  } else {
    res.status(404).send({ msg: 'Form not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const form = await deleteFormResponse(req.params.id)
  if (form) {
    res.send(form)
  } else {
    res.status(404).send({ msg: 'Form not found' })
  }
})

export default router
