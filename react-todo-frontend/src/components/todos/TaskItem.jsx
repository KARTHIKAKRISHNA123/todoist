import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Trash2, Check, RotateCcw, Edit2, Save, X } from "lucide-react";
import { useTodos } from "../../hooks/useTodos";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.15 } }
};

const colors = ["bg-[#6de39a] text-[#1a3d28]", "bg-[#ffce00] text-[#4d3e00]", "bg-[#9bd4ff] text-[#0d2a41]", "bg-[#ff99cc] text-[#420d2b]"];

const LabsIcons = [
  <svg viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="12"/><circle cx="50" cy="20" r="6"/><circle cx="50" cy="80" r="6"/><circle cx="20" cy="50" r="6"/><circle cx="80" cy="50" r="6"/><circle cx="30" cy="30" r="4"/><circle cx="70" cy="70" r="4"/><circle cx="30" cy="70" r="4"/><circle cx="70" cy="30" r="4"/></svg>,
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4"><path d="M50 50c10-20 40 0 20 20s-40-10-20-40 30 10 10 30" strokeLinecap="round"/><circle cx="30" cy="25" r="2" fill="currentColor"/><circle cx="70" cy="45" r="2" fill="currentColor"/></svg>,
  <svg viewBox="0 0 100 100" fill="currentColor"><path d="M20 40l15 10-15 10zM45 40l15 10-15 10zM70 40l15 10-15 10z"/><path d="M35 60l10 7-10 7z" opacity="0.5"/></svg>,
  <svg viewBox="0 0 100 100" fill="currentColor"><rect x="25" y="30" width="8" height="40" rx="4"/><rect x="40" y="20" width="8" height="60" rx="4"/><rect x="55" y="40" width="8" height="30" rx="4"/><rect x="70" y="25" width="8" height="50" rx="4"/></svg>
];

export default function TaskItem({ todo, index, isHovered, isAnyHovered, onHoverStart, onHoverEnd }) {
  const { updateTodo, deleteTodo } = useTodos();
  const ref = useRef(null);
  
  // --- NEW EDITING STATE ---
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const cardColor = colors[index % colors.length];
  const IconSymbol = LabsIcons[index % LabsIcons.length];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 400, damping: 25 };
  const rotateX = useTransform(useSpring(y, springConfig), [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(useSpring(x, springConfig), [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current || isEditing) return; // Disable tilt while typing
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== "") {
      updateTodo({ id: todo.id, data: { ...todo, title: editedTitle } });
      setIsEditing(false);
    }
  };

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        ref={ref}
        variants={itemVariants}
        onMouseEnter={onHoverStart}
        onMouseLeave={() => { onHoverEnd(); x.set(0); y.set(0); }}
        onMouseMove={handleMouseMove}
        animate={{ 
          opacity: isAnyHovered && !isHovered ? 0.3 : 1,
          scale: isHovered ? 1.03 : 1,
          y: isHovered ? -12 : 0,
          zIndex: isHovered || isEditing ? 20 : 0,
        }}
        whileTap={isEditing ? {} : { scale: 0.96 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", pointerEvents: isAnyHovered && !isHovered ? 'none' : 'auto' }}
        className={`relative aspect-square md:aspect-[1.5/1] p-8 rounded-[2.5rem] flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300 ${cardColor}`}
      >
        {/* Floating Labs Icon */}
        <motion.div 
          className="absolute top-8 right-8 w-32 h-32 opacity-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered && !isEditing ? 0.3 : 0 }}
          style={{ transform: "translateZ(30px)" }}
        >
          {IconSymbol}
        </motion.div>

        <div className="flex justify-between items-start" style={{ transform: "translateZ(60px)" }}>
          {isEditing ? (
            <input
              autoFocus
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              className="text-4xl md:text-5xl font-bold bg-black/10 border-b-4 border-black/20 outline-none w-full tracking-tight"
            />
          ) : (
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-[70%]">
              {todo.title}
            </h2>
          )}
        </div>

        <div className="space-y-6" style={{ transform: "translateZ(50px)" }}>
          <div className="flex flex-wrap gap-3">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="px-6 py-3 bg-white/40 rounded-full flex items-center gap-2 text-sm font-black uppercase"><Save size={18} /> SAVE</button>
                <button onClick={() => { setIsEditing(false); setEditedTitle(todo.title); }} className="px-6 py-3 bg-black/10 rounded-full flex items-center gap-2 text-sm font-black uppercase"><X size={18} /> CANCEL</button>
              </>
            ) : (
              <>
                <button onClick={(e) => { e.stopPropagation(); setIsEditing(true); }} className="px-6 py-3 bg-black/15 hover:bg-black/25 rounded-full flex items-center gap-2 text-sm font-black uppercase tracking-wider"><Edit2 size={18} /> EDIT</button>
                <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }} className="px-6 py-3 bg-black/15 hover:bg-black/25 rounded-full flex items-center gap-2 text-sm font-black uppercase tracking-wider"><Trash2 size={18} /> DELETE</button>
                <button 
                  onClick={(e) => { e.stopPropagation(); updateTodo({ id: todo.id, data: { ...todo, isCompleted: !todo.isCompleted } }); }}
                  className="px-6 py-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all flex items-center gap-2 text-sm font-black uppercase tracking-wider"
                >
                  {todo.isCompleted ? <>INCOMPLETE <RotateCcw size={20} /></> : <>COMPLETED <Check size={20} /></>}
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}