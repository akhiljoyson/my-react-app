export default function Trainer({ id, children }) {
  return (
    <div>
      <h2>Trainer Component</h2>
      <p>Trainer ID: {id}</p>
      {children}
    </div>
  );
}