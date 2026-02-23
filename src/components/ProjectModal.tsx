import { motion, AnimatePresence } from "motion/react";
import { X, Play, Image as ImageIcon, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  videoPlaceholder?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass bg-white/90 rounded-3xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Media Section */}
                <div className="space-y-4">
                  <div className="aspect-video rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
                    <Play className="w-12 h-12 mb-4 text-primary" />
                    <h4 className="font-semibold">Video Demonstration</h4>
                    <p className="text-sm text-white/60">Placeholder for project walkthrough video</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="mt-auto pt-8 border-t border-gray-100">
                    <div className="flex gap-4">
                      <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                        View Live Demo <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="px-6 border-2 border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-colors">
                        Case Study PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
