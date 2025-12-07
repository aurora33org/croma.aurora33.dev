const express = require('express');
const router = express.Router();

const healthRouter = require('./health');
const jobsRouter = require('./jobs');
const newsletterRouter = require('./newsletter');

router.use('/health', healthRouter);
router.use('/jobs', jobsRouter);
router.use('/newsletter', newsletterRouter);

module.exports = router;
