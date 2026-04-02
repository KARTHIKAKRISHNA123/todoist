import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/auth/login', data);
      
      // Spring Boot usually returns the token directly, or inside a JSON object.
      // This line safely handles both scenarios!
      const token = response.data.token ? response.data.token : response.data;
      
      // Save the key to the vault
      localStorage.setItem('token', token);
      
      toast.success("Welcome back!");
      // Teleport the user to the main app
      navigate('/dashboard'); 
    } catch (error) {
      toast.error("Invalid email or password.");
      console.error("Error details:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-[var(--sidebar-background)] rounded-xl border border-border shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-2">Log in to view your tasks.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-secondary-foreground">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            {errors.email && <span className="text-xs text-primary mt-1">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-secondary-foreground">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            {errors.password && <span className="text-xs text-primary mt-1">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 mt-2 font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}