type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "496e1d42",
    amount: 25,
    status: "pending",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "509e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  // ...
];
