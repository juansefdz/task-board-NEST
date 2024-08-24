import Counter from "@/components/Counter"
export default function Home() {
  console.log("desde el servidor")
  return (
    <>
      <h1>CounterPage</h1> 
      <Counter />
    </>
  );
}