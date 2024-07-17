import { StatusCodes } from 'http-status-codes';
import express, { Request, Response } from 'express';

import { handleServiceResponse } from '@/common/utils/httpHandlers';
import { otpService } from './otpService';

export const otpController = {
  validateOtp: async (req: Request, res: Response): Promise<any> => {
    const serviceResponse = await otpService.validateOtp();
    handleServiceResponse(serviceResponse, res);
  },
};
