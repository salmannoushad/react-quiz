export default function Button({ className, children }) {
  return <div class={`{classes.button} ${className}`}>{children}</div>;
}
