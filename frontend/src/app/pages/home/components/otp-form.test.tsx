import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import OtpForm from "@/app/pages/home/components/otp-form";

jest.mock("@/app/core/services/api/auth/auth.service", () => ({
  validateOtp: jest.fn(),
}));

const mockSuccessMsg = jest.fn();
const mockErrorMsg = jest.fn();
jest.mock("@/app/shared/components/toast/toast", () => ({
  __esModule: true,
  default: () => ({
    successMsg: mockSuccessMsg,
    errorMsg: mockErrorMsg,
    warningMsg: jest.fn(),
  }),
}));

const queryClient = new QueryClient();

const MockOtpForm = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer />
      <OtpForm />
    </BrowserRouter>
  </QueryClientProvider>
);

describe("OtpForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<MockOtpForm />);
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

});