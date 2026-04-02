import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import TaskItem from "./TaskItem";
import { useTodos } from "../../hooks/useTodos";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

export default function TaskList() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { todos, isLoading, addTodo } = useTodos();
  
  // Track which card is currently being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTodo({ title: newTaskTitle, isCompleted: false }); 
    setNewTaskTitle("");
  };

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
       <div className="text-muted-foreground animate-pulse text-lg font-medium">
         Loading your workspace...
       </div>
    </div>
  );

  return (
    <div className="w-full mt-6 max-w-7xl mx-auto px-4">
      <form onSubmit={handleAddTask} className="mb-16 relative group max-w-2xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-primary/70 group-focus-within:text-primary transition-colors">
          <Plus size={32} strokeWidth={3} />
        </div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="What's your next big project?"
          className="w-full py-6 pl-14 pr-4 bg-transparent border-b-4 border-border text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all text-4xl font-bold tracking-tighter"
        />
      </form>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32" 
      >
        <AnimatePresence mode="popLayout">
          {todos.map((todo, index) => (
            <TaskItem 
              key={todo.id} 
              todo={todo} 
              index={index}
              // Pass hover state props down to coordinate animations
              isHovered={hoveredIndex === index}
              isAnyHovered={hoveredIndex !== null}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}