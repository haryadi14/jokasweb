export const Button = ({ children, variant = 'primary', href, className = "", ...props }) => {
  const styles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-primary-500/30",
    secondary: "bg-white text-dark border border-slate-200 hover:bg-slate-50",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
  };
  
  const base = "px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95";

  return href ? (
    <a href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</a>
  ) : (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</button>
  );
};