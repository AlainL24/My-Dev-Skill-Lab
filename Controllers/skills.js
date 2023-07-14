const skillModel = require('../models/skill');

module.exports = {
  index: (req, res) => {
    const skills = skillModel.getAllSkills();
    res.render('skills/index', { skills });
  },
  new: (req, res) => {
    res.render('skills/new');
  },
  create: (req, res) => {
    const { name, description, level } = req.body;
    const newSkill = {
      id: skillModel.getAllSkills().length + 1,
      name,
      description,
      level,
    };
    skillModel.getAllSkills().push(newSkill);
    res.redirect('/skills');
  },
  show: (req, res) => {
    const skillId = parseInt(req.params.id);
    const skill = skillModel.getSkillById(skillId);

    if (skill) {
      res.render('skills/show', { skill });
    } else {
      res.status(404).send('Skill not found');
    }
  },
  delete: (req, res) => {
    const skillId = parseInt(req.params.id);
    const skills = skillModel.getAllSkills();
    const index = skills.findIndex((skill) => skill.id === skillId);

    if (index !== -1) {
      skills.splice(index, 1);
    }

    res.redirect('/skills');
  },
};
