import { StatusCodes } from 'http-status-codes';

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
import { logger } from '@/server';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './otpConstants';

export const otpService = {
  validateOtp: async (): Promise<ServiceResponse<null>> => {
    try {
      return new ServiceResponse<null>(ResponseStatus.Success, SUCCESS_MESSAGE, null, StatusCodes.OK);
    } catch (ex) {
      const errorMessage = `${ERROR_MESSAGE} : $${(ex as Error).message}`;
      logger.error(errorMessage);
      return new ServiceResponse(ResponseStatus.Failed, errorMessage, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
};
