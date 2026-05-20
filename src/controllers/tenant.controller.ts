import { Request, Response } from 'express';

import {
    getFirstTenant,
    getTenantById
} from '../services/tenant.service';

export const fetchTenantProfile = async (
    req: Request,
    res: Response
) => {
    try {
        const { id } = req.params;

        const tenant = await getTenantById(id as string);

        if (!tenant) {
            return res.status(404).json({
                success: false,
                message: 'Tenant not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: tenant
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export const fetchDemoTenant = async (
    req: Request,
    res: Response
) => {
    try {
        const tenant = await getFirstTenant();

        return res.status(200).json({
            success: true,
            data: tenant
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};