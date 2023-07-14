const skillModel = require('../models/skill');

module.exports = {
    index: (req, res) => {

        const skills = skillModel.getAllSkills();
        res.render('skills/index', { skills });
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
      };