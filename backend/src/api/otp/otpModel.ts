import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { object, z } from 'zod';

import { commonValidations } from '@/common/utils/commonValidation';

extendZodWithOpenApi(z);

export type Otp = z.infer<any>;
export const OtpSchema = z.object({
    otp: z.number()
  });

export const ValidateOtpSchema = z.object({
    body: z.object({ otp: z
      .string()
      .length(6, { message: 'OTP must be exactly 6 digits long' })
      .refine((data) => /^[0-9]+$/.test(data), { message: 'OTP must be numeric' })
      .refine((data) => data[data.length - 1] !== '7', { message: 'The last digit cannot be 7' }) }),
  });
