export default function Student({ id, children }) {
  return (
    <div>
      <h2>Student Component</h2>
      <p>Student ID: {id}</p>
      {children}
    </div>
  );
}