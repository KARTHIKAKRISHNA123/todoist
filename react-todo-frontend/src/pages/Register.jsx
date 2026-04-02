import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";

export default function Register() {
  // Initialize React Hook Form
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  // The function that runs when the user clicks "Sign Up"
  const onSubmit = async (data) => {
    try {
      // Sends a POST request to http://localhost:8081/auth/register
      await api.post('/auth/register', data);
      
      toast.success("Registration successful! You can now log in.");
      navigate('/login'); // Instantly swaps the page to the login screen
    } catch (error) {
      toast.error("Registration failed. This email might already be taken or the server is offline.");
      console.error("Error details:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-[var(--sidebar-background)] rounded-xl border border-border shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-sm text-muted-foreground mt-2">Start organizing your work and life.</p>
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
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 4, message: "Password must be at least 4 characters" }
              })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            {errors.password && <span className="text-xs text-primary mt-1">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 mt-2 font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}