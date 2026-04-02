import AppLayout from "../components/layout/AppLayout";
import TaskList from "../components/todos/TaskList";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Today</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Organize your tasks and boost your productivity. Check off completed items and stay on top of your day!
        </p>
      </div>
      
      {/* The Animated List! */}
      <TaskList />
      
    </AppLayout>
  );
}