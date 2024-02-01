import { IDB } from "../types/db";
import { userRequest } from "../types/req";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Z]).{5,8}$/;

export const checkEmpty = (request: userRequest) => {
  if (request.username === "" || undefined) {
    return {
      error: "Username must not be empty",
    };
  }
  if (request.email === "") {
    return {
      error: "Email must not be empty",
    };
  }
  if (request.password === "") {
    return {
      error: "Password must not be empty",
    };
  }
  return null;
};

export const validateInputs = (request: userRequest) => {
  if (
    !request.username ||
    request.username.length < 3 ||
    request.username.length > 8
  ) {
    return {
      error: "Username must be between 3 and 8 characters",
    };
  }

  if (!request.email || !emailRegex.test(request.email)) {
    return {
      error: "Invalid email format",
    };
  }

  if (!request.password || !passwordRegex.test(request.password)) {
    return {
      error:
        "Password must be between 5 and 8 characters and include at least one uppercase letter",
    };
  }
  if (!request.checked) {
    return {
      error: "You must agree to the Privacy Policy and the Terms of Service",
    };
  }
  return null;
};

export const isUserExist = async (request: userRequest, db: IDB) => {
  const usernameExists = await db.User.findOne({
    where: { username: request.username },
  });
  if (usernameExists) {
    return {
      message: "Error creating user",
      error: "Username already in use",
    };
  }
  const emailExists = await db.User.findOne({
    where: { email: request.email },
  });
  if (emailExists) {
    return {
      message: "Error creating user",
      error: "Email already in use",
    };
  }
  return null;
};
