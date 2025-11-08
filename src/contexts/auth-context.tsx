"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  name: string;
  email: string;
  avatar?: string;
  type: "student" | "faculty" | "career-office" | "employer";
}

interface AuthContextType {
  user: User | null;
  login: (
    userType: "student" | "faculty" | "career-office" | "employer"
  ) => void;
  logout: () => void;
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
  isLoginDialogOpen: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers = {
  student: {
    name: "Ana Horvat",
    email: "ana.horvat@student.com",
    type: "student" as const,
  },
  faculty: {
    name: "FER Zagreb",
    email: "contact@fer.hr",
    type: "faculty" as const,
  },
  "career-office": {
    name: "Marko Ljutić",
    email: "marko.ljutic@unizg.hr",
    type: "career-office" as const,
  },
  employer: {
    name: "Tech Innovation Hub",
    email: "hr@techhub.com",
    type: "employer" as const,
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("career-plus-user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("career-plus-user");
      }
    }
  }, []);

  const login = (
    userType: "student" | "faculty" | "career-office" | "employer"
  ) => {
    const userData = mockUsers[userType];
    setUser(userData);
    localStorage.setItem("career-plus-user", JSON.stringify(userData));
    setIsLoginDialogOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("career-plus-user");
  };

  const openLoginDialog = () => {
    setIsLoginDialogOpen(true);
  };

  const closeLoginDialog = () => {
    setIsLoginDialogOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        openLoginDialog,
        closeLoginDialog,
        isLoginDialogOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
