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
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("career-plus-user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        // Set cookie for middleware to access
        document.cookie = `career-plus-user=${storedUser}; path=/; max-age=86400; SameSite=Lax`;
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem("career-plus-user");
        document.cookie = "career-plus-user=; path=/; max-age=0";
      }
    }
    setIsLoading(false);
  }, []);

  const login = (
    userType: "student" | "faculty" | "career-office" | "employer"
  ) => {
    const userData = mockUsers[userType];
    setUser(userData);
    const userJson = JSON.stringify(userData);
    localStorage.setItem("career-plus-user", userJson);
    // Set cookie for middleware to access
    document.cookie = `career-plus-user=${userJson}; path=/; max-age=86400; SameSite=Lax`;
    setIsLoginDialogOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("career-plus-user");
    // Remove cookie
    document.cookie = "career-plus-user=; path=/; max-age=0";
    // Redirect to home page
    window.location.href = "/";
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
        isLoading,
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
