import { Router } from 'express';

import {
    fetchDemoTenant,
    fetchTenantProfile
} from '../controllers/tenant.controller';

const router = Router();

router.get('/demo/profile', fetchDemoTenant);

router.get('/:id', fetchTenantProfile);

export default router;