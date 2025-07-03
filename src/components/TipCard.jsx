function TipCard({ tip }) {
  return (
    <div className="border border-gray-200 p-4 rounded shadow-sm mb-4 bg-white">
  <p className="text-gray-800">{tip.text}</p>
</div>

  );
}

export default TipCard;
