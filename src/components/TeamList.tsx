import teamsData from '../CollegeBasketballTeams(1).json';
import TeamCard from './TeamCard';

const TeamList = () => {
  return (
    <div className="grid">
      {teamsData.teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
};

export default TeamList;


  
