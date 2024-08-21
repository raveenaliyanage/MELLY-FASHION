import express from 'express'

export const keyRouter = express.Router()
// /api/keys/paypal
keyRouter.get('/paypal', (req, res) => {
  res.json({ clientId: process.env.PAYPAL_CLIENT_ID || 'AaP27Gor7YDm_ZK4u7tnI4QmRmIwlr_gRB2udVgNilJ83mjnKRfaaiCSHPY-B9YLs6Fg3tobfrymyvri' })
})