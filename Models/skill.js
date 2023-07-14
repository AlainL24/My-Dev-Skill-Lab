const skills = [
    {
      id: 1,
      name: 'JavaScript',
      description: 'A programming language for the web',
      level: 'Intermediate',
    },
    {
      id: 2,
      name: 'HTML',
      description: 'A markup language for creating web pages',
      level: 'Beginner',
    },
    {
      id: 3,
      name: 'CSS',
      description: 'A style sheet language used for designing web pages',
      level: 'Intermediate',
    },
  ];
  
  module.exports = {
    getAllSkills: () => {
      return skills;
    },
    getSkillById: (id) => {
      return skills.find((skill) => skill.id === id);
    },
  };