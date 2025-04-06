import express from 'express';
import { markdownHandler } from '../controllers/convertMarkdown';
const router = express.Router();

router.post("/markdown", markdownHandler)

export default router;