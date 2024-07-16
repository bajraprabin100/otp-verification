import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { Request, Response, Router } from 'express';

import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { handleServiceResponse, validateRequest } from '@/common/utils/httpHandlers';
import { OtpSchema, ValidateOtpSchema } from './otpModel';
import { otpService } from './otpService';

export const otpRegistry = new OpenAPIRegistry();

otpRegistry.register('Otp', OtpSchema);

export const otpRouter: Router = (() => {
  const router = express.Router();
  router.use(express.json());

  otpRegistry.registerPath({
    method: 'post',
    path: '/api/otp/validate',
    tags: ['Otp'],
    request: {
      body: {
        content: {
          'application/json': {
            schema: ValidateOtpSchema,
          },
        },
      },
    },
    responses: createApiResponse(OtpSchema, 'Success'),
  });

  router.post('/validate', validateRequest(ValidateOtpSchema), async (req: Request, res: Response) => {
    const serviceResponse = await otpService.validateOtp();
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
