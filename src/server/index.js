import express from 'express'
import serverless from "serverless-http";

import cors from 'cors'
import sectionRoutes from './routes/sectionRoutes.js'
import aboutRoutes from './routes/aboutRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import languageRoutes from './routes/languageRoutes.js'
import benefitsRoutes from './routes/benefitRoutes.js'
import jobsRoutes from './routes/jobRoutes.js'
import jobApplicationRoutes from './routes/jobApplicationRoutes.js'
import companyRoutes from './routes/companyRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

app.use('/api/sections', sectionRoutes)
app.use('/api/abouts', aboutRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/languages', languageRoutes)
app.use('/api/benefits', benefitsRoutes)
app.use('/api/jobs', jobsRoutes)
app.use('/api/apply', jobApplicationRoutes)
app.use('/api/company', companyRoutes)


if (process.env.NODE_ENV !== 'lambda') {
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
}

export const handler = serverless(app)
