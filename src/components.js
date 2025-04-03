// Mock UI components since we can't access the original shadcn components
const Input = ({ className, type, placeholder }) => {
  return (
    <input 
      type={type || 'text'} 
      placeholder={placeholder}
      className={`rounded border p-2 ${className}`}
    />
  );
};

const Button = ({ children, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={`rounded font-medium ${className}`}
    >
      {children}
    </button>
  );
};
