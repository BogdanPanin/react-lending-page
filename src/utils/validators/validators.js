// validate Required

export const requiredField = value => {
  if (value) return undefined;
  return "Field is required";
};

// validate Email
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
