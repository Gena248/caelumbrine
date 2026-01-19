export const register = (name, email, password) => {
  return new Promise((resolve) => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      resolve({ authorized: false, message: "User already exists" });
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    resolve({ authorized: true });
  });
};

export const login = (email, password) => {
  return new Promise((resolve) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      resolve({ authorized: false, message: "No user found" });
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email !== email || user.password !== password) {
      resolve({ authorized: false, message: "Invalid credentials" });
      return;
    }

    localStorage.setItem("token", "fake-jwt-token");

    resolve({ authorized: true, user });
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      resolve(null);
      return;
    }

    resolve(JSON.parse(storedUser));
  });
};

export const logout = () => {
  return new Promise((resolve) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    resolve();
  });
};
