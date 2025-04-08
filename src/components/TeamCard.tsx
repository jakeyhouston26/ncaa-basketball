type TeamProps = {
    school: string;
    name: string;
    city: string;
    state: string;
  };
  
  const TeamCard = ({ school, name, city, state }: TeamProps) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-all duration-200">
        <h2 className="text-2xl font-bold mb-2 text-blue-800">{school}</h2>
        <p className="text-gray-700 mb-1"><strong>Mascot:</strong> {name}</p>
        <p className="text-gray-600"><strong>Location:</strong> {city}, {state}</p>
      </div>
    );
  };
  
  export default TeamCard;
  