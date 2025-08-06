import { create } from "zustand";
import { getCurrentUser } from "../libs/appwrite";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  setIsAuthenticated: (status) => set({ isAuthenticated: status }),
  setUser: (user) => set({ user }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  fetchAuthenticatedUser: async () => {
    set({ isLoading: true });
    try {
      const user = await getCurrentUser();
      console.log("user", user);
      if (user) {
        set({ user, isAuthenticated: true });
      } else {
        set({ user: null, isAuthenticated: false });
      }
    } catch (error) {
      console.error("Error fetching authenticated user:", error);
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },
  //   signOut: async (appwriteClient) => {
  //     set({ isLoading: true });
  //     try {
  //       await appwriteClient.account.deleteSession('current');
  //       set({ user: null, isAuthenticated: false });
  //     } catch (error) {
  //       console.error("Error signing out:", error);
  //     } finally {
  //       set({ isLoading: false });
  //     }
  //   }
}));

export default useAuthStore;
