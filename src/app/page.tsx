import Counter from "@/components/Counter"
export default function Home() {
  console.log("desde el servidor")
  return (
    <>
      <h1>Hola mundo</h1> 
      <Counter />
    </>
  );
}
