export default function Subscribe() {
  return (
    <section className="py-16 flex flex-col items-center bg-gray-100">
      <h2 className="text-2xl font-bold">Subscribe</h2>
      <p className="text-gray-600">Get 40% off on our exclusive service.</p>
      <div className="mt-4 flex space-x-2">
        <input type="email" placeholder="Email Address" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
      </div>
    </section>
  );
}
