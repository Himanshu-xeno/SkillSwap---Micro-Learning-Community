function TipCard({ tip }) {
  return (
   <div className="border border-gray-200 p-6 rounded-lg shadow bg-white h-full">
  <p className="text-gray-800">{tip.text}</p>
</div>
  );
}

export default TipCard;
